import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: for styling the Navbar
import Login from './Login'; // Make sure to import the Login component

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  const handleClose = () => setShowLogin(false);
  const handleShow = () => setShowLogin(true);

  return (
    <>
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
      <Login show={showLogin} handleClose={handleClose} />
    </>
  );
}

export default Navbar;
