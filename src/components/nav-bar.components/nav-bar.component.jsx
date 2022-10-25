import React, {useState} from "react";

import logo from "../../images/svgexport-1.svg";
import ngrFlag from "../../images/nigeria-flag.svg";
import dropIcon from "../../images/dropdown-icon.svg";
import hamburger from "../../images/icons8-menu-30.png";
import xIcon from "../../images/x-icon.svg";

import "./nav-bar.styles.scss";
import MenuItem from "../menu-link.components/menu-item.components";
import GetKudaButton from "../button.components/get-kuda-btn.component";
import Dropdown from "./dropdown/dropdown.component";
import HamburgerMenu from "./hamburger/hamburger-menu.component";

const NavBar = () =>{
    const [dropDownDisplay, setDropDownDisplay] = useState(false);
    const [dropDownDisplay2, setDropDownDisplay2] = useState(false);
    const [dropDownDisplay3, setDropDownDisplay3] = useState(false);

    const [toggleHamburger, setToggleHamburger] = useState(false);
        
    return(
        
        <nav className="nav-bar">
            { toggleHamburger && <HamburgerMenu/>}
            
            <div className="nav-bar-container">
                <div className="left-side">
                    <div className="nav-logo-div">
                        <img className="nav-logo" src={logo} alt="" />
                    </div>
                    <div className="menu-list">
                        <div className="dropdown-menu" onMouseEnter={()=> setDropDownDisplay(true)} onMouseLeave={()=> setDropDownDisplay(false)}>
                            { dropDownDisplay && <div className="tint" onMouseEnter={()=> setDropDownDisplay(false)}></div>}
                            <MenuItem title="Features" /><span><img src={dropIcon} alt="" /></span>
                            { dropDownDisplay && <Dropdown title="Features"/>}
                        </div>
                        <MenuItem title="Business" />
                        <div className="dropdown-menu" onMouseEnter={()=> setDropDownDisplay2(true)} onMouseLeave={()=> setDropDownDisplay2(false)}>
                            { dropDownDisplay2 && <div className="tint" onMouseEnter={()=> setDropDownDisplay2(false)}></div>}
                            <MenuItem title="Company" /><span><img src={dropIcon} alt="" /></span>
                            { dropDownDisplay2 && <Dropdown title="Company"/>}
                        </div>
                        <div className="dropdown-menu" onMouseEnter={()=> setDropDownDisplay3(true)} onMouseLeave={()=> setDropDownDisplay3(false)}>
                            { dropDownDisplay3 && <div className="tint" onMouseEnter={()=> setDropDownDisplay3(false)}></div>}
                            <MenuItem title="Help" /><span><img src={dropIcon} alt="" /></span>
                            { dropDownDisplay3 && <Dropdown title="Help"/>}
                        </div>
                    </div>
                </div>
                
                <div className="right-side">
                    <div className="menu-list">
                        <div className="items">
                            <MenuItem title="Sign In" />
                        </div>
                        <GetKudaButton/><span><img src={ngrFlag} alt="" /></span>
                    </div>
                </div>
            </div>
            <div className="hamburger-menu" onClick={()=>setToggleHamburger(!toggleHamburger)}>
                <div className="nav-logo-div">
                    <img className="nav-logo" src={logo} alt="" />
                </div>
                <img className={ toggleHamburger ? 'hamburger-icon-hidden' : 'hamburger-icon'} src={hamburger} alt="" />
                { toggleHamburger && <img className="x-icon" src={xIcon} alt="" /> }
            </div>
            
        </nav>
    );
}

export default NavBar;