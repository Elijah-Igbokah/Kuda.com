import React from "react";
import { Link } from "react-router-dom";

import "./button.scss";

const GetKudaButton = () =>{
    return(
        <div className="get-kuda-button">
            <Link>
                <div className="get-kuda">Get Kuda</div>
            </Link>
        </div>
    );
};

export default GetKudaButton;