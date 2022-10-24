import React from "react";

import "./flex.styles.scss";

const FlexReverse = ({children}) =>{
    return(
        <div className="flex-reverse">
            {children}
        </div>
    );
};

export default FlexReverse;