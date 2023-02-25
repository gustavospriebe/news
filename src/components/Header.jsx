import React from "react";
import logo from "../assets/logo.svg";

function Header() {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categories</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
