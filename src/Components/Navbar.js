import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Navbar.css';  

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        if (window.innerWidth > 768) {
            setIsOpen(false); 
        }
    };

    const handleLinkClick = () => {
        if (isMobile) {
            setIsOpen(false); 
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="navbar">
            <h1>My Portfolio</h1>
            {isMobile && (
                <div className="hamburger-menu" onClick={toggleMenu}>
                    ☰
                </div>
            )}
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <Link to="/" onClick={handleLinkClick}>Home</Link>
                <Link to="/achivement" onClick={handleLinkClick}>Achivement</Link>
                <Link to="/projects" onClick={handleLinkClick}>Projects</Link>
                <Link to="/about" onClick={handleLinkClick}>About</Link>
            </div>
        </nav>
    );
};

export default Navbar;