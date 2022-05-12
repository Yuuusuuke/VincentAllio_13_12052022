import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";
import Logo from "../../img/argentBankLogo.png";

export default function Navbar(){
    return(
        <nav className="main-nav">
            <Link to={"/index"} className="main-nav-logo">
                <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link to={"/signin"} className="main-nav-item">
                    Sign In
                </Link>
            </div>
        </nav>
    );
}