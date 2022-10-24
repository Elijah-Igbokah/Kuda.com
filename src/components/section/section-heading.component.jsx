import React from "react";

import "./section.styles.scss"



const SectionHeading = (Props) => {
    return(
        <div className="heading">
            <h1>{Props.text}</h1>
        </div>
    )
}

export default SectionHeading;