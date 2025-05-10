import React from 'react';
import '../styling/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">Jason Nguyen</div>
            <nav className="nav">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;
