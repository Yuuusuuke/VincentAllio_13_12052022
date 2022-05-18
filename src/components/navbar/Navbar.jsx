import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";
import Logo from "../../img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { disconnectUser} from "../../redux/api";

export default function Navbar(){
    const data = useSelector(state => state.api);
    const dispatch = useDispatch();

    return(
        <nav className="main-nav">
            <Link to={"/"} className="main-nav-logo">
                <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {data.connected ?<>
                    <Link to={"/user"} className="main-nav-item">
                        <FontAwesomeIcon icon={faCircleUser} />
                        {data.value.firstName}
                    </Link>
                    <Link to={"/"} className="main-nav-item" onClick={() => dispatch(disconnectUser())}>
                        <FontAwesomeIcon icon={faSignOut} />
                        Sign Out
                    </Link>
                </>:
                    <Link to={"/signin"} className="main-nav-item">
                        <FontAwesomeIcon icon={faCircleUser} />
                        Sign In
                    </Link>
                }
            </div>
        </nav>
    );
}