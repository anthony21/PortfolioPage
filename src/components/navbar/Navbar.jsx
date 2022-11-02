import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/D_logo.png'; 

// Bem -> Block element modifier

const Menu = () =>(
  <>
    <p><a href="#home">Home</a></p>
          <p><a href="#whoDuv">Who am I?</a></p>
          <p><a href="#possibility">My apps</a></p>
          <p><a href="#features">Skills Breakdown</a></p>
          <p><a href="#blog">Blog - Coming soon</a></p>
  </>
)
const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="duv__navbar">
      <div className="duv__navbar-links">
        <div className="duv__navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="duv__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="duv__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="duv__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="duv__navbar-menu_container scale-up-center">
            <div className="duv__navbar-menu_container-links">
                <Menu />
                <div className="duv__navbar-menu_container-links-sign">
                  <p>Sign in</p>
                  <button type="button">Sign up</button>
                </div>
              </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar