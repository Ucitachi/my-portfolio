import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card">
      <img src={`${process.env.PUBLIC_URL}/MyPortfolioImage.jpg`} alt="Your Photo" />
      <h1>Pavan R shetty</h1>
      <p>I am a versatile software developer skilled in programming languages such as C, Python, Java, JavaScript, and MySQL. With a strong interest in sports, programming, and technology, my focus is on developing innovative solutions in web development. My expertise spans both front-end technologies like React, Next.js, and Bootstrap, and back-end technologies like Node.js and Express. I am experienced in working with databases such as MongoDB and MySQL.

I have successfully designed a stock trading simulation application using Next.js, Node.js, and MongoDB, integrating the Upstox API for real-time market data. Additionally, I developed a comprehensive placement website using Django, helping students streamline their job search process.

Currently, I am focused on honing my skills in competitive programming with Python and working on improving my sleep habits. Outside of tech, I actively participate in volunteering activities, including serving with the NCC.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/pavan-shetty-a72757244" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/Ucitachi" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default App;
