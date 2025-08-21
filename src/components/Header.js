// src/components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importe o Link
import "./Header.css";
import logo from "../assets/logo.png";

function Header() {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo da Igreja" className="logo" />
      </div>
      <h2 className='title-header'>VERBO SEPETIBA</h2>
      <div className="header-right">
        <button className="dropdown-btn" onClick={toggleDropdown}>
          Menu ▾
        </button>
        {open && (
          <ul className="dropdown-menu">
            <li>
              <Link to="/" onClick={toggleDropdown}>Início</Link>
            </li>
            <li>
              <Link to="/sobre-nos" onClick={toggleDropdown}>Sobre Nós</Link>
            </li>
            <li>
              <Link to="/programacao" onClick={toggleDropdown}>Programação</Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;