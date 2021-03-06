import React from "react";
import "./Feature.css";
import PropTypes from 'prop-types';

/**
 * Feature component
 * 
 * @date 2022-05-18
 * @param {string} props.icon
 * @param {string} props.alt
 * @param {string} props.title
 * @param {string} props.subtitle
 */
export default function Feature(props){
    return(
        <div className="feature-item">
            <img src={props.icon} alt={props.alt} className="feature-icon" />
            <h3 className="feature-item-title">{props.title}</h3>
            <p>{props.subtitle}</p>
        </div>
    );
}

Feature.prototype = {
    icon: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string
  };