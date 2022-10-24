import React from "react";

import "./comparison.styles.scss";

import check from "../../images/check.svg";
import kudaLogo from "../../images/kuda-bank.JPG";
import nullSign from "../../images/svgexport-28.svg";



const ComparisonGrid = () => {
    return(
        <div className="comparison-grid">
            <div class="comparison-wrapper">
                <div></div>
                <h3>Other Banks</h3>
                <img className="column-logo" src={kudaLogo} alt="" />
            </div>
            <div class="wrappers">
                <div>Transfer Fee</div>
                <div class="icon-wrapper">
                    <div class="icon"><img src={nullSign} alt="" /></div>
                    <div>Up to #50 plus V.A.T</div>
                </div>
                <div class="icon-wrapper">
                    <div class="icon"><img src={check} alt="" /></div>
                    <div>25 free transfers every month</div>
                </div>
            </div>
            <div class="wrappers">
                <div>Debit Card</div>
                <div class="icon-wrapper">
                    <div class="icon"><img src={nullSign} alt="" /></div>
                    <div>#1,000 plus V.A.T</div>
                </div>
                <div class="icon-wrapper">
                    <div class="icon"><img src={check} alt="" /></div>
                    <div>Free</div>
                </div>
            </div>
            <div class="wrappers">
                <div>Card Delivery</div>
                <div class="icon-wrapper">
                    <div class="icon"><img src={nullSign} alt="" /></div>
                    <div>🤨</div>
                </div>
                <div class="icon-wrapper">
                    <div class="icon"><img src={check} alt="" /></div>
                    <div>Free</div>
                </div>
            </div>
            <div class="wrappers">
                <div>Card Maintenance Fee</div>
                    <div class="icon-wrapper">
                    <div class="icon"><img src={nullSign} alt="" /></div>
                    <div>Up to #50 per quarter</div>
                </div>
                <div class="icon-wrapper">
                    <div class="icon"><img src={check} alt="" /></div>
                    <div>Never</div>
                </div>
            </div>
            <div class="wrappers">
                <div>Alerts</div>
                <div class="icon-wrapper">
                    <div class="icon"><img src={nullSign} alt="" /></div>
                    <div>Charge for SMS alerts</div>
                </div>
                <div class="icon-wrapper">
                    <div class="icon"><img src={check} alt="" /></div>
                    <div>Free instant notifications</div>
                </div>
            </div>
            <div class="wrappers">
                <div>Annual Interest</div>
                <div class="icon-wrapper">
                    <div class="icon"><img src={nullSign} alt="" /></div>
                    <div>4%</div>
                </div>
                <div class="icon-wrapper">
                    <div class="icon"><img src={check} alt="" /></div>
                    <div>Up to 15%</div>
                </div>
            </div>
            <div class="wrappers">
                <div>Bill Payment Fee</div>
                <div class="icon-wrapper">
                    <div class="icon"><img src={nullSign} alt="" /></div>
                    <div>Up to #100 per bill</div>
                </div>
                <div class="icon-wrapper">
                    <div class="icon"><img src={check} alt="" /></div>
                    <div>NO</div>
                </div>
            </div>
            <div class="wrappers">
                <div>Instant Reversals</div>
                <div class="icon-wrapper">
                    <div class="icon"><img src={nullSign} alt="" /></div>
                    <div>😒</div>
                </div>
                <div class="icon-wrapper">
                    <div class="icon"><img src={check} alt="" /></div>
                    <div>Yes</div>
                </div>
            </div>
            <div class="wrappers">
                <div>Account Maintenance Fee</div>
                <div class="icon-wrapper">
                    <div class="icon"><img src={nullSign} alt="" /></div>
                    <div>Yes</div>
                </div>
                <div class="icon-wrapper">
                    <div class="icon" ><img src={check} alt="" /></div>
                    <div>Never</div>
                </div>
            </div>
        </div>
    )
};

export default ComparisonGrid;