import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: for styling the Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">DFM</h2>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
         <li className="nav-item">
              <button className="btn btn-primary" onClick={handleShow}>Login</button>
            </li>
      </ul>
    </nav>
  );
}

export default Navbar;
