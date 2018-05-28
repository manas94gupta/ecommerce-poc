import React from "react";
import { Link } from "react-router-dom";

// Css
import "./Header.css";

const Header = () => (
    <div className="header">
        <div className="header__content app-container flex-row">
            <div className="header__title">
                <Link to="/">My Awesome Shop</Link>
            </div>
            <ul className="header__menu flex-row">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Bag</li>
            </ul>
        </div>
    </div>
);

export default Header;
