import React from "react";
import "./Account.css";
import PropTypes from 'prop-types';

/**
 * Account component
 * 
 * @date 2022-05-18
 * @param {string} props.title
 * @param {string} props.amount
 * @param {string} props.description
 */
export default function Account(props){
    return(
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{props.title}</h3>
                <p className="account-amount">{props.amount}</p>
                <p className="account-amount-description">{props.description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transaction</button>
            </div>
        </section>
    );
}

Account.prototype = {
    title: PropTypes.string,
    amount: PropTypes.string,
    description: PropTypes.string
}