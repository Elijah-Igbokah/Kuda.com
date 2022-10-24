import React from "react";

import "./sect-flex.styles.scss";


const SectImage = (Props) =>{
    return(
        <div className="sect-image" style={{justifyContent: `${Props.flexPosition}`}}>
            <img src={Props.image} alt="" />
        </div>
    );
};

export default SectImage;