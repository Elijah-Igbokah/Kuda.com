import React from "react";
import { Link } from "react-router-dom";

import "./link-list.styles.scss"



const LinkList = (Props) => {
    return(
        <div className="column">
            <h3>{Props.heading}</h3>
            <Link to="/">{Props.link1}</Link>
            <Link to="/">{Props.link2}</Link>
            <Link to="/">{Props.link3}</Link>
            <Link to="/">{Props.link4}</Link>
            <Link to="/">{Props.link5}</Link>            
        </div>
    )
};

export default LinkList;