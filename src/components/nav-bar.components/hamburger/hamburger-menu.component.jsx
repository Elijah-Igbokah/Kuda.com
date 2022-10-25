import "./hamburger-menu.styles.scss";

import { Link } from "react-router-dom";
import { FeaturesItems } from "../dropdown/dropdown-items.component";
import { CompanyItems } from "../dropdown/dropdown-items.component";
import { HelpItems } from "../dropdown/dropdown-items.component";

import CommonButton from "../../button.components/common.component";

const HamburgerMenu =()=>{
    return(
        <div className="hamburger-link-container">
            <div className="hamburger-btns">
                <CommonButton title="Sign-in" /><CommonButton title="Business" />
            </div>
            <div className="hamburger-links">
                
                <div className="hamburger-list">
                    <h3>Features</h3>
                    <div className="hamburger-link">
                        {
                            FeaturesItems.map((item)=> {
                                return(
                                    <li key={item.id} className="dropdown-list">
                                        <Link className="dropdown-link">
                                            <img src={item.icon} alt="" />{item.title}
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="hamburger-list">
                    <h3>Company</h3>
                    <div className="hamburger-link">
                        {
                            CompanyItems.map((item)=> {
                                return(
                                    <li key={item.id} className="dropdown-list">
                                        <Link className="dropdown-link">
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="hamburger-list">
                    <h3>Company</h3>
                    <div className="hamburger-link">
                        {
                            HelpItems.map((item)=> {
                                return(
                                    <li key={item.id} className="dropdown-list">
                                        <Link className="dropdown-link">
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </div>
                </div>
                

                
                
            </div>
        </div>
    )
};

export default HamburgerMenu;