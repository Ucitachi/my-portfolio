import React from "react";

const Projects = (darkMode) => {
    const projects = [
        {
          title: "Stock Trading Simulation",
          description:
            "Developed a stock trading simulation platform using Next.js and MongoDB, integrating real-time market data via the Upstox API.",
          link: "https://github.com/Ucitachi/S24-StockApp",
        },
        {
          title: "Comprehensive Placement Portal",
          description:
            "Built a placement platform using Django to streamline student job applications and placement processes.",
          link: "https://github.com/Ucitachi/placementui",
        },
        {
          title: "Gesture-Based Calculator",
          description:
            "Implemented a calculator using MediaPipe that performs calculations based on hand gestures for a touch-free experience.",
          link: "https://github.com/aish-walvekar/HandGestureRecognition",
        },
      ];

    return (
        <div className="p-6">
            <h2 className= {`${darkMode.darkMode ? 'text-white' : 'text-black'} text-3xl font-bold text-center mb-6`}>Projects</h2>
            <div className="grid md:grid-cols-3 gap-6 text-justify">
                {projects.map((project, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-all">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="mt-2 text-gray-600">{project.description}</p>
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