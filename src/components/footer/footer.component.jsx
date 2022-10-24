import React from "react";
import LinkGrid from "../footer-links/link-grid.component";
import FooterCards from "./footer.cards.component";

import "./footer.styles.scss";

const Footer = () => {
    return(
        <div className="footer">
            <LinkGrid />
            <FooterCards />
            <div className="footer-bottom-texts">
                <div className="footer-bottom-text">
                    <p>*Kuda Customers get 25 free transfer to other banks every month. Extra transfers to other banks cost ₦10 each.</p>
                    <p>**Kuda account holders can deposit money in over 10,000 branches across Nigeria for free.</p>
                </div>
                <div className="footer-bottom-text">
                    <p>© 2022 Kuda Microfinance Bank (RC796975). All rights reserved. All deposits are insured by the Nigerian Deposit Insurance Corporation (NDIC). Kuda Microfinance Bank is licensed by the Central Bank of Nigeria. “Kuda” and “Kudabank” are trademarks of Kuda Technologies Ltd Lagos: 151 Herbert Macaulay Way, Yaba, Lagos. London: 91 Wimpole Street, London W1G 0EF, UK</p>
                </div>
                <div className="footer-bottom-text">
                    <p>Kuda Current Account is provided through Kuda Microfinance Bank. All text, graphics, audio files, code, downloadable material, and other works on this website are the copyrighted works of Kuda Microfinance Bank. All Rights Reserved. Any unauthorized redistribution or reproduction of any copyrighted materials on this website is strictly prohibited. Other product and company names are trademarks of their respective owners. This website contains simulated images; actual appearance may vary.</p>
                </div>

            </div>
        </div>
    )
};

export default Footer;