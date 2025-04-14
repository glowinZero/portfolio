import "./navbar.css";
import logo from "../assets/logo.png";
import React, { useState, useEffect } from 'react';


function App() {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const interval = setInterval(() => {
        setIsVisible((prev) => !prev); 
      }, 500); 
  
      const timeout = setTimeout(() => {
        clearInterval(interval); 
        setIsVisible(true); 
      }, 5000);
  
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }, []);

  return (
    <div className="main-navbar">
        <div className="logo-navbar">
        {isVisible && <img src={logo} alt="Logo" />}
        </div>
        <div className="CTA">
            <button className="button-available-work">
            <div className="status-dot"></div>
            <h1>Available for work</h1>
            </button>
        <div class="select-wrapper">
          <select class="select-language">
            <option value="en">EN</option>
            <option value="pt">PT</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
