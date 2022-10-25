import React from "react";
import { Link } from "react-router-dom";

import "./button.scss";

const CommonButton = (Props) =>{
    return(
        <div className="common-button">
            <Link>
                <div className="common-btn">{Props.title}</div>
            </Link>
        </div>
    );
};

export default CommonButton;