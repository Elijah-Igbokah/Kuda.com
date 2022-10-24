import React from "react";


import "./flex.styles.scss";

const FlexContainer = ({children}) =>{
    return(
        <div className="flex-container">
            {children}
        </div>
    );
};

export default FlexContainer;