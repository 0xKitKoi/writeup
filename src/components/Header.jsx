// src/components/Header.js
import React from 'react';

const Header = ({ title, subtitle }) => {
  return (
    <header className="py-8 bg-gradient-to-r from-black-800 to-grey-800 shadow-lg">
      <div className="container mx-auto text-center">
        <span>
          <button 
            style={{backgroundColor: 'darkslategrey'}} 
            className="bg-primary text-primary-foreground bg-gradient px-4 py-2 rounded-lg shadow-md hover:bg-primary/80 focus:outline-none focus:ring focus:ring-primary" 
            onClick={() => window.location.href='/projects.html'}>
            Home
          </button>
        </span>
        <br/><br/>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-xl mt-2">{subtitle}</p>
      </div>
    </header>
  );
};

export default Header;

