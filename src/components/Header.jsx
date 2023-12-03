import React, { useState } from "react";
import "./Header-style.css";

import {
  faBars,
  faCartShopping,
  faEnvelope,
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

  const location  = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
  return (
    <>
      <header className="header">
        {/* Top Bar  */}
        <div className="top_bar">
          <div className="top_bar_container">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                    <ul className="top_bar_contact_list">
                      <li>
                        <div className="question">Have any questions?</div>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faPhone}
                          style={{ color: "white" }}
                        />
                        <div>001-1234-88888</div>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          style={{ color: "white" }}
                        />
                        <div>info.deercreative@gmail.com</div>
                      </li>
                    </ul>
                    <div className="top_bar_login ml-auto no-underline">
                      <div className="login_button">
                        <Link to={"/login"}>Register or Login</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header Content  */}
        <div className="header_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="header_content d-flex flex-row align-items-center justify-content-start">
                  <div className="logo_container">
                    <Link to={"/"}>
                      <div className="logo_text">
                        Urja<span>Connect</span>
                      </div>
                    </Link>
                  </div>
                  <nav className="main_nav_contaner ml-auto">
                    <ul className="main_nav">
                      <li className={location.pathname === '/' ? 'active' : ''}>
                        <Link to={"/"}>Home</Link>
                      </li>
                      <li className={location.pathname === '/about' ? 'active' : ''}>
                        <Link to={"/about"}>About</Link>
                      </li>

                      <li className={location.pathname === '/contact' ? 'active' : ''}>
                        <Link to={'/contact'}>Contact</Link>
                      </li>
                    </ul>
                    <div className="search_button">
                      <FontAwesomeIcon icon={faSearch} />
                    </div>

                    {/* Hamburger */}

                    <div className="shopping_cart">
                      <FontAwesomeIcon icon={faCartShopping} />
                    </div>
                    <div className="hamburger menu_mm">
                      <FontAwesomeIcon icon={faBars} onClick={toggleMenu}/>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header Search Panel  */}
        <div className="header_search_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="header_search_content d-flex flex-row align-items-center justify-content-end">
                  <form action="#" className="header_search_form">
                    <button className="header_search_button d-flex flex-column align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Menu */}
      {showMenu && (
      <div className="absolute top-10 right-0 bg-white border border-gray-300 p-4 mt-14  trans-400 rounded shadow-lg">
       
       
        <nav className="menu_nav">
          <ul className="menu_mm">
            <li className="menu_mm">
              <Link to={'/'} className="block py-2 px-3 text-gray-800 hover:text-blue-600 transition duration-300">Home</Link>
            </li>
            <li className="menu_mm">
            <Link to={'/about'} className="block py-2 px-3 text-gray-800 hover:text-blue-600 transition duration-300">About</Link>
            </li>
            
            <li className="menu_mm">
            <Link to={'/contact'} className="block py-2 px-3 text-gray-800 hover:text-blue-600 transition duration-300">Contact</Link>
            </li>

            <li className="menu_mm">
            <Link to={'/login'} className="block py-2 px-3 text-gray-800 hover:text-blue-600 transition duration-300">Login</Link>
            </li>
          </ul>
        </nav>
      </div> )}
    </>
  );
};

export default Header;
