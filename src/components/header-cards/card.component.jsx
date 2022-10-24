import React from "react";

import "./card.styles.scss"



const HeaderCard = (Props) => {
    return(
        <div className="card">
            <div>
                <img src={Props.icon} alt="" />
            </div>
            <p>{Props.text}</p>
        </div>
    )
}

export default HeaderCard;