import React from "react";

import "./sect-flex.styles.scss";
import linkArrow from "../../images/svgexport-21.svg";

const SectText = (Props) =>{
    return(
        <div className="sect-text">
            <h2 style={{width: `${Props.width}`}}> {Props.heading} </h2>
            <p> {Props.desc} </p>
            <div className="link">
                <a href="link.com"> {Props.link} <span style={{color:"inherit", marginLeft:"5px", fontWeight:"900"}}>
                    <img src={linkArrow} alt="" />
                </span> </a>
            </div>
        </div>
    );
};

export default SectText;