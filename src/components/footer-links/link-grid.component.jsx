import React from "react";

import "./link-list.styles.scss";
import LinkList from "./link-list.component";
// import FlexContainer from "../flex-container/flex.component";

import kudaLogo from "../../images/kuda-bank.JPG";
import playStore from "../../images/google-play-61cb4b62e2b04e3c1c5e6908b4cc7f6a.svg";
import appStore from "../../images/app-store-9df3d746121bcf93fcdce6bff77758b5.svg";
import kudaWeb from "../../images/kuda-web-77bc3dc525d8fc20bddde7f8195a4c17.svg"


class LinkGrid extends React.Component {

    constructor(){
        super();


        this.state = {
            FooterLinks: [
                {
                    heading: "Features",
                    link1: "Kuda Card",
                    link2: "Spend",
                    link3: "Save",
                    link4: "Budget",
                    link5: "Borrow"
                },
                {
                    heading: "Company",
                    link1: "Blog",
                    link2: "Press",
                    link3: "Join Our Team",
                    link4: "About Us"
                },
                {
                    heading: "Help",
                    link1: "Get Help",
                    link2: "FAQs",
                    link3: "Security",
                    link4: "Contact Us"
                    
                },
                {
                    heading: "Transparency",
                    link1: "Terms & Conditions",
                    link2: "Privacy Policy",
                    link3: "Information Security Policy",
                    link4: "Cookie Policy"
                },
                

            ]
        }

        
    };

    render(){
        return(
            <div className="footer-wrap">
                <div className="footer-container">
                    <div className="footer-logo">
                        <img src={kudaLogo} alt="" />
                    </div>
                    <div className="link-grid">
                        
                        {
                            this.state.FooterLinks.map(({heading, ...otherLinkProps}) => (
                                <LinkList heading={heading} {...otherLinkProps}/>
                            ))
                        }
                    </div>                
                </div>
                <div className="store-icons">
                    <img src={appStore} alt="" />
                    <img src={playStore} alt="" />
                    <img src={kudaWeb} alt="" />
                </div>
            </div>
            
        )
    }

};

export default LinkGrid;