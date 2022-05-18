import React from "react";
import "./Error.css";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

/**
 * Error page
 * 
 * @date 2022-05-18
 * @param {string} props.message
 */
export default function Error(props){
    return(
        <main className="main bg-dark error">
            <section className="errorText">
                <h1 className="errorTitle">{props.message}</h1>
                <Link to="/" className="errorRedirect">Redirection to the index</Link>
            </section>
        </main>
    );
}

Error.prototype = {
    message: PropTypes.string,
}