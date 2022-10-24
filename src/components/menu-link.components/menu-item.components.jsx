import React from "react";

import "./menu-item.styles.scss";


const MenuItem = (props) =>{
    return(
        <li><button className="links"> {props.title} </button></li>
    );
}

export default MenuItem;