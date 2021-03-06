import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from '../images/logo.svg';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={ logo } height="37" width="250" alt="Resort Home" title="head home" />
                    </Link>
                    <button type="button" aria-label="Nav Toggle" className="nav-btn" onClick={ handleToggle }>
                        <FaAlignRight className="nav-icon" />
                    </button>
                </div>
                <ul className={ isOpen ? "nav-links show-nav" : "nav-links" }>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/rooms">Rooms</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
