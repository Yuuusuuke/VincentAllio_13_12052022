import React, { useEffect, useState } from "react";
import "./User.css";
import Account from "../../components/account/Account";
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../redux/api";

export default function User(){
    const [updateModale, setUpdateModale] = useState(false);
    const [errorFirstname, setErrorFirstname] = useState(false);
    const [errorLastname, setErrorLastname] = useState(false);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");


    const navigate = useNavigate();
    const data = useSelector(state => state.api);
    const dispatch = useDispatch();

    useEffect(() => {
        !data.connected && navigate("/notConnected");
    }, [data, navigate])

    const checkInput = () => {
        const firstnameOK = (/[a-zA-Z]{3,}/.test(firstname) && firstname !== "");
        const lastnameOK = (/[a-zA-Z]{3,}/.test(lastname) && lastname !== "");
        setErrorFirstname(!firstnameOK);
        setErrorLastname(!lastnameOK);

        if(firstnameOK && lastnameOK){
            dispatch(changeName([data.token, {"firstName": firstname, "lastName": lastname}]));
            setUpdateModale(false);
        }
    }

    return(
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br/>{data.value.firstName} {data.value.lastName}</h1>
                <button className="edit-button" onClick={() => {setUpdateModale(true)}}>Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
            <Account title="Argent Bank Saving (x6712)" amount="$10,928.42" description="Available Balance" />
            <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />

            {updateModale && 
                <>
                    <div className="modale">
                        <form onSubmit={(e) => {e.preventDefault();checkInput();}}>
                            <div className="input-wrapper">
                                <label htmlFor="firstname">First name</label>
                                <input className={`input${errorFirstname && "-error"}`} type="text" id="firstname" onChange={e => setFirstname(e.target.value)} />
                                {errorFirstname && <p className="error">Invalid name</p>}
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="lastname">Last name</label>
                                <input className={`input${errorLastname && "-error"}`} type="text" id="lastname" onChange={e => setLastname(e.target.value)}/>
                                {errorLastname && <p className="error">Invalid name</p>}
                            </div>

                            <button type="submit" className="sign-in-button">Update</button>
                        </form>
                    </div>
                    <span className="smoke" onClick={() => setUpdateModale(false)}></span>
                </>
            }
        </main>
    );
}