// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'; 

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                 <Link to="/">JW</Link> {/* Remplacez par votre logo ou image */}
            </div>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/produits">Reservation</Link>
            </div>
      </nav>
    );
}

export default Navbar;
