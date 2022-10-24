import React from "react";

import "./section.styles.scss";

const Section = ({children}) =>{
    return(
        <div className="section">
            {children}
        </div>
    );
};

export default Section;