import React, { useEffect, useState } from "react";
import "./User.css";
import Account from "../../components/account/Account";
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";

export default function User(){
    const [updateModale, setUpdateModale] = useState(false);
    const navigate = useNavigate();
    const data = useSelector(state => state.api);

    useEffect(() => {
        !data.connected && navigate("/notConnected");
    }, [data, navigate])

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
        </main>
    );
}