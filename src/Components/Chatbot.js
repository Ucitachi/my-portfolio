import React, { useState } from "react";
import { MessageSquare, Send, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! Ask me about my skills, experience, or projects.", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const CHATBOT_URL = process.env.REACT_APP_CHATBOT_URL;

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input.trim(), sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(CHATBOT_URL, {
        query: input.trim(),
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);

      setMessages((prev) => [...prev, { text: response.data.response, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [...prev, { text: "Sorry, something went wrong. Try again!", sender: "bot" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6">
      {isOpen ? (
        <div className="w-80 bg-white shadow-lg rounded-lg border border-gray-300 flex flex-col">
          {/* Header */}
          <div className="bg-gray-800 text-white p-3 flex justify-between items-center rounded-t-lg">
            <span className="font-semibold">Pavan's Chatbot</span>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-3 h-64 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-xs ${msg.sender === "bot" ? "bg-gray-200 self-start" : "bg-gray-800 text-white self-end"}`}
              >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown>
              </div>
            ))}
            {loading && <div className="text-gray-800 text-sm">Thinking...</div>}
          </div>

          {/* Input Box */}
          <div className="p-3 flex items-center border-t border-gray-300">
            <input
              type="text"
              className="flex-1 p-2 border rounded-lg focus:outline-none"
              placeholder="Ask me something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} className="ml-2 p-2 bg-gray-800 text-white rounded-lg">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-600"
        >
          <MessageSquare className="text-white w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Chatbot;