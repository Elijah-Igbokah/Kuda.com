import React from "react";
import { useState } from "react";
import "./dropdown.scss";
import { Link } from "react-router-dom";
import { FeaturesItems } from "./dropdown-items.component";
import { CompanyItems } from "./dropdown-items.component";
import {HelpItems} from "./dropdown-items.component";

const Dropdown = (Props)=>{
    const [dropdown, setDropdown] = useState(false);

    switch (Props.title) {
        case 'Features':
            return(
                <div>
                    <ul className={ dropdown ? "features-submenu hidden" : "features-submenu"} 
                        onClick={() => setDropdown(!dropdown)}>
                        {
                        FeaturesItems.map((item)=> {
                            return(
                                <li key={item.id} className="dropdown-list">
                                    <Link className="dropdown-link" onClick={() => setDropdown(false)}>
                                        <img src={item.icon} alt="" />{item.title}
                                    </Link>
                                </li>
                            );
                        }
                        )
                        }
                    </ul>
                </div>
            );
        case "Company":
            return(
                <div>
                    <ul className={ dropdown ? "company-submenu hidden" : "company-submenu"} 
                        onClick={() => setDropdown(!dropdown)}>
                        {
                        CompanyItems.map((item)=> {
                            return(
                                <li key={item.id} className="dropdown-list">
                                    <Link className="dropdown-link" onClick={() => setDropdown(false)}>
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        }
                        )
                        }
                    </ul>
                </div>
            );

        case "Help":
            return(
                <div>
                    <ul className={ dropdown ? "help-submenu hidden" : "help-submenu"} 
                        onClick={() => setDropdown(!dropdown)}>
                        {
                        HelpItems.map((item)=> {
                            return(
                                <li key={item.id} className="dropdown-list">
                                    <Link className="dropdown-link" onClick={() => setDropdown(false)}>
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        }
                        )
                        }
                    </ul>
                </div>
            );

        default:
            console.log("Error");


    }

    
}

export default Dropdown;