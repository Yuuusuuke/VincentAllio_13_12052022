import React, { useEffect, useState } from "react";
import "./Signin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logIN, getUserData } from "../../redux/api";
import {useNavigate} from "react-router-dom";

export default function Signin(){
    // Local variables
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(false);

    // Navigation Hook
    const navigate = useNavigate();

    // API variable and methodes
    const data = useSelector(state => state.api);
    const dispatch = useDispatch();

    // Check the status of the request
    useEffect(() => {
        switch(data.status){
            case 400:
                console.log("Bad request");
                setError(true);
                break;
            case 200:
                !data.valueFilled && dispatch(getUserData(data.token));
                setError(false);
                navigate("/user");
                break;
            default:
                break;
        }
    }, [data, navigate, dispatch]);

    return(
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon" />
                <h1>Sign In</h1>
                <form onSubmit={(e) => {e.preventDefault();dispatch(logIN({"email": username, "password": password}));}}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input className={`input${error && "-error"}`} type="text" id="username" onChange={e => setUsername(e.target.value)} />
                        {error && <p className="error">Invalid username or password</p>}
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input className={`input${error && "-error"}`} type="password" id="password" onChange={e => setPassword(e.target.value)}/>
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