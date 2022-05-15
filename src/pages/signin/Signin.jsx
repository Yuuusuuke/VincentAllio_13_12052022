import React, { useEffect, useState } from "react";
import "./Signin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logIN } from "../../redux/api";
import {useNavigate} from "react-router-dom";

export default function Signin(){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const data = useSelector(state => state.api);
    const dispatch = useDispatch();

    const tryLogIN = () => {
        dispatch(logIN({"email": username, "password": password}));
    }

    useEffect(() => {
        switch(data.status){
            case 400:
                console.log("Bad request");
                break;
            case 200:
                console.log(data);
                navigate("/user");
                break;
            default:
                break;
        }
    }, [data, navigate]);

    return(
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon" />
                <h1>Sign In</h1>
                <form onSubmit={(e) => {e.preventDefault();tryLogIN();}}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    <button type="submit" className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
}