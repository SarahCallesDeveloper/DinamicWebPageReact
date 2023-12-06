
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
const InstagramLogopath = "/path/to/your/instagram/logo.svg"; // Replace with your actual path

function App() {
  return (
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-white" href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                  Title
                  <i>
                    <svg width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                      <path d={InstagramLogopath} />
                    </svg>
                  </i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                  Title
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                      <path d={InstagramLogopath} />
                    </svg>
                  </i>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="https://www.google.com" target="_blank" rel="noopener noreferrer" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  MenuList Title
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item text-black" href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                      Item Title
                      <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                          <path d={InstagramLogopath} />
                        </svg>
                      </i>
                    </a>
                  </li>
                  {/* Add other items of ItemMenuList here */}
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                  Description Title
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                      <path d={InstagramLogopath} />
                    </svg>
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default App;
