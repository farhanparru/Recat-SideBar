import React from 'react';
import 'bootstrap/js/dist/dropdown'

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navabar-dark  bg-transparent ">
        <div className="container-fluid">
          <a className="navbar-brand bi bi-justify-left fs-4" style={{color:"white"}}>
           
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
           
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-5 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 Muhammad Shamin Farhan
               
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                     Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Setting
                    </a>
                  </li>
                  <a className="dropdown-item" href="#">
                     Logout
                    </a>
                  <li className="dropdown-divider"></li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
             
            </ul>
           
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
