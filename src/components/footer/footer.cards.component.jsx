import React from "react";
import { Link } from "react-router-dom";

import "./footer.styles.scss";

import socialIcon1 from "../../images/svgexport-33.svg";
import socialIcon2 from "../../images/svgexport-34.svg";
import socialIcon3 from "../../images/svgexport-35.svg";
import socialIcon4 from "../../images/svgexport-36.svg";
import socialIcon5 from "../../images/svgexport-37.svg";
import socialIcon6 from "../../images/svgexport-38.svg";

const FooterCards = () => {
    return(
        <div className="footer-cards">
            <p>Products may vary by country or market.</p>
            <div className="info-cards">
                <div className="info-card">
                    <h3>Contact</h3>
                    <Link>help@kuda.com</Link>
                    <div className="social-icons">
                        <img src={socialIcon1} alt="" />
                        <img src={socialIcon2} alt="" />
                        <img src={socialIcon3} alt="" />
                        <img src={socialIcon4} alt="" />
                        <img src={socialIcon5} alt="" />
                        <img src={socialIcon6} alt="" />
                    </div>
                </div>
                <div className="info-card">
                    <h3>Lagos</h3>
                    <p>151 Herbert Macaulay Way, Yaba, Lagos,</p>
                    <p>Nigeria</p>
                </div>
                <div className="info-card">
                    <h3>London</h3>
                    <p>91 Wimpole Street, London W1G 0EF</p>
                    <p>UK</p>
                </div>
            </div>
        </div>
    )
};

export default FooterCards;