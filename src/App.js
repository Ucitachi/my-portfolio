import React, { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Content from './Components/Content';
import Projects from './Components/Projects';
import Chatbot from './Components/Chatbot';

function App() {
  const [darkMode, setDarkMode] = useState(() => {return localStorage.getItem("darkMode") === "true"});
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("home");

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  function setOptions(menu, activeComponent) {
    setMenuOpen(menu);
    setActiveComponent(activeComponent);
  }

  return (
    <div className={`${darkMode ? "bg-gray-900 text:white" : "bg-gray-100 text-gray-900"} flex flex-col min-h-screen transition-all`}>
      <nav className={`${darkMode ? "bg-gray-800" : "bg-white shadow-lg"} fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50 transition-all`}>
      <h1 className= {`${darkMode ? "text-white":""} text-2xl font-bold mt-4`}>Welcome,</h1>      
      <div className="hidden md:flex space-x-6">
          <button onClick={() => setActiveComponent("home")} className={`${darkMode ? "text-white" : ""} hover:text-gray-400`}>Home</button>
          <button onClick={() => setActiveComponent("projects")} className={`${darkMode ? "text-white" : ""} hover:text-gray-400`}>Projects</button>
          <button onClick={() => setActiveComponent("courses")} className={`${darkMode ? "text-white" : ""} hover:text-gray-400`}>Courses</button>
          <button onClick={() => setActiveComponent("contacts")} className={`${darkMode ? "text-white" : ""} hover:text-gray-400`}>Contact</button>
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
          <button onClick={()=>{setOptions(false, "home")}} className="py-2 hover:text-blue-400" >Home</button>
          <button onClick={()=>{setOptions(false, "projects")}} className="py-2 hover:text-blue-400" >Projects</button>
          <button onClick={()=>{setOptions(false, "courses")}} className="py-2 hover:text-blue-400" >Courses</button>
          <button onClick={()=>{setOptions(false, "contacts")}} className="py-2 hover:text-blue-400" >Contact</button>
        </div>
      )}

      <div className="flex justify-center items-center flex-grow mt-16">
        {activeComponent === "home" && (
        <div className={`mt-5 p-6 ${darkMode ? "bg-gray-800 shadow-md" : "bg-white shadow-lg"} rounded-lg text-center max-w-3xl w-full transition-all`}>
        <img className="h-48 w-48 object-cover rounded-full mx-auto border-4 border-gray-300 shadow-sm" 
        src={`${process.env.PUBLIC_URL}/MyPortfolioImage.jpg`} alt="Pavan" />
        <h1 className= {`${darkMode ? "text-white":""} text-2xl font-bold mt-4`}>
          Pavan R Shetty
        </h1>
        <div className={`${darkMode ? "text-white": ""} mt-2 text-sm leading-relaxed px-4 text-justify`}>
        <Content />
        </div>
          <div className="mt-4 flex justify-center space-x-4">
            <SocialIcon url="https://github.com/Ucitachi" target="_blank" className="hover:scale-110"/>
            <SocialIcon url="https://www.linkedin.com/in/pavan-shetty-a72757244" target="_blank" className="hover:scale-110"/>
            <SocialIcon url="https://leetcode.com/u/Ucitachi/" target="_blank" className="hover:scale-110"/>
          </div>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-all">
          Contact me
        </button>
        <Chatbot />
        </div>)}
        {activeComponent === "projects" && <Projects darkMode={darkMode}/>}
      </div>
    </div>
  )
}

export default App;
