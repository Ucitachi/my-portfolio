import {React, useEffect, useState} from "react";
import axios from "axios";
import { projectDetails } from "../utils/ProjectDetails";

const Projects = (darkMode) => {
  const [projects, setProjects] = useState([]);

  useEffect (() => {
    setProjects(projectDetails);
  }, []);
  
    return (
        <div className="p-6">
            <h2 className= {`${darkMode.darkMode ? 'text-white' : 'text-black'} text-3xl font-bold text-center mb-6`}>Projects</h2>
            <div className="grid md:grid-cols-3 gap-6 text-justify">
                {projects.map((project, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-all">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="mt-2 text-white-600">{project.description}</p>
                    <a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-blue-500 hover:underline"> 
                    View Project ↗
                    </a>
                </div>
              ))}
            </div>
        </div>
    )
}

export default Projects;