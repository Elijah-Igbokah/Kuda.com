import React from "react";

import "./Header-hero.styles.scss";


import phone from "../../images/img_0 (1).svg";
import atmCard from "../../images/img_1 (2).svg";

import outerIcon from "../../images/svgexport-4.svg";
import outerIcon2 from "../../images/svgexport-3.svg";
import outerIcon3 from "../../images/svgexport-20.svg";
import middleIcon1 from "../../images/svgexport-5.svg";
import middleIcon2 from "../../images/svgexport-6.svg";
import license1 from "../../images/license1.svg";
import license2 from "../../images/license2.svg";
import playStore from "../../images/google-play-61cb4b62e2b04e3c1c5e6908b4cc7f6a.svg";
import appStore from "../../images/app-store-9df3d746121bcf93fcdce6bff77758b5.svg";
import kudaWeb from "../../images/kuda-web-77bc3dc525d8fc20bddde7f8195a4c17.svg"


import "../button.components/get-kuda-btn.component";
import GetKudaButton from "../button.components/get-kuda-btn.component";

const Hero = () =>{
    return(
        <div className="hero">
            <div className="hero-text">
                <h1>We’re the bank of the free</h1>
                <h3>We’re here to help you get the best out of your money, no strings attached.</h3>
                <h3>Welcome to your freedom!</h3>
                <div className="store-icons">
                    <img className="store-icon" src={appStore} alt="" />
                    <img src={playStore} alt="" />
                    <img src={kudaWeb} alt="" />
                </div>
                <div className="license">
                    <img src={license1} alt="" />
                    <img src={license2} alt="" />
                </div>
                
                <div className="get-kuda-btn">
                    <GetKudaButton/>
                </div>
            </div>
            <div className="hero-image">
                <div id="circle-orbit-container">

                    {/* <!-- Circles closest to the central point --> */}
                    <div id="inner-orbit"></div>


                    {/* <!-- Circles second closest to the central point --> */}
                    <div id="middle-orbit">
                        <img className="middle-orbit-icon" src={middleIcon1} alt="" />
                    </div>
                    <div id="middle-orbit-reverse">
                        <img className="middle-orbit-icon" src={middleIcon2} alt="" />
                    </div>

                    {/* <!-- Circles furthest away to the central point --> */}
                    <div id="outer-orbit">
                        <img className="outer-orbit-icon" src={outerIcon} alt="" />
                    </div>
                    <div id="outer-orbit2">
                        <img className="outer-orbit-icon" src={outerIcon3} alt="" />
                    </div>
                    <div id="outer-orbit-reverse">
                        <img className="outer-orbit-icon" src={outerIcon2} alt="" />
                    </div>

                </div>
                <div className="atm-card">
                    <img src={atmCard} alt="" />
                </div>
                <div className="phone">
                    <img src={phone} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;