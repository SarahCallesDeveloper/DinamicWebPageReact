import React from 'react';

export const NavBar = ({ children }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {children}
          </ul>
        </div>
      </div>
    </nav>
  );
}