import React, { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { socialLinks } from './utils/SocialLinks';
import Content from './Components/Content';
import Projects from './Components/Projects';
import Chatbot from './Components/Chatbot';
import profilePic from '/MyPortfolioImage.jpg';

function App() {
  const [darkMode, setDarkMode] = useState(() => {return localStorage.getItem("darkMode") === "true"});
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("home");
  const navItems = [ 
    { name: "Home", value: "home" },
    { name: "Projects", value: "projects" },
    { name: "Contact", value: "contacts" },
  ]

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  function setOptions(menu, activeComponent) {
    setMenuOpen(menu);
    setActiveComponent(activeComponent);
  }

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} flex flex-col min-h-screen transition-all`}>
      <nav className={`${darkMode ? "bg-gray-800" : "bg-white shadow-lg"} fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50 transition-all`}>
      <h1 className= {`${darkMode ? "text-white":""} text-2xl font-bold mt-4`}>Welcome,</h1>      
      <div className="hidden md:flex space-x-6">
        {navItems.map((item) => {
          return (
          <button 
          key={item.value}
          onClick={() => setActiveComponent(item.value)}
          className={`${darkMode ? "text-white" : ""} hover:text-gray-400`}> {item.name} </button>
        )})}
          <a 
          href="/PavanShetty_Resume.pdf"
          target="_blank"
          className={`${darkMode ? "text-white" : ""} hover:text-gray-400 mt-2`}
          >Resume</a>
        <button
        className="px-4 py-2 z-50 bg-gray-800 text-white rounded-lg hover:bg-gray-600 transition-all"
          onClick = {() => setDarkMode(!darkMode)}
      >
      {darkMode ? <SunIcon className="h-6 w-6"/>: <MoonIcon className="h-6 w-6"/>}
      </button>
      </div>

      <div className="md:hidden flex gap-4">
      <button
           className="px-4 py-2 z-50 bg-gray-800 text-white rounded-lg hover:bg-gray-600 transition-all"
             onClick = {() => setDarkMode(!darkMode)}
         >
         {darkMode ? <SunIcon className="h-6 w-6"/>: <MoonIcon className="h-6 w-6"/>}
         </button>
      <button  onClick={() => {setMenuOpen(!menuOpen)}}>
        {menuOpen ? <XIcon className="h-6 w-6"/> : <MenuIcon className="h-6 w-6"/>}
      </button>
      </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden flex flex-col bg-gray-700 text-white p-4 mt-20 space-y-2 absolute w-full top-0 left-0 transition-all">
          {navItems.map((item) => {
            return (
            <button
            key={item.value}
            onClick={() => setActiveComponent(item.value)}
            className={`${darkMode ? "text-white" : ""} hover:text-gray-400`}>{item.name} </button>
          )})}

          <a 
          href={`${import.meta.env.PUBLIC_URL}/PavanShetty_Resume.pdf`}
          target="_blank"
          className="text-center hover:text-blue-400 block" 
          >Resume</a>
        </div>
      )}

      <div className="flex justify-center items-center flex-grow mt-16">
        {activeComponent === "home" && (
        <div className={`mt-5 p-6 ${darkMode ? "bg-gray-800 shadow-md" : "bg-white shadow-lg"} rounded-lg text-center max-w-3xl w-full transition-all`}>
        <img className="h-48 w-48 object-cover rounded-full mx-auto border-4 border-gray-300 shadow-sm" 
        src={profilePic} alt="Pavan" />
        <h1 className= {`${darkMode ? "text-white":""} text-2xl font-bold mt-4`}>
          Pavan R Shetty
        </h1>
        <div className={`${darkMode ? "text-white": ""} mt-2 text-sm leading-relaxed px-4 text-justify`}>
        <Content />
        </div>
          <div className="mt-4 flex justify-center space-x-4">
          {socialLinks.map((link, index) => (
              <SocialIcon 
              key={index}
              url={link.url}
              target="_blank"
              className="hover:scale-110"
              />
              ))}
          </div>
          <section className='mt-4'>
          <a 
          href='mailto:pavanshetty742@gmail.com'
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-all">
            Contact me
          </a>
        </section>
        <Chatbot />
        </div>)}
        {activeComponent === "projects" && <Projects darkMode={darkMode}/>}
      </div>
    </div>
  )
}

export default App;