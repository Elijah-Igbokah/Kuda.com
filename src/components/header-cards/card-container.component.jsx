import React from "react";

import HeaderCard from "./card.component";

import "./card.styles.scss"

import icon1 from "../../images/icon1.JPG";
import icon2 from "../../images/icon2.JPG";
import icon3 from "../../images/icon3.JPG";
import icon4 from "../../images/icon4.JPG";
import icon5 from "../../images/icon5.JPG";



class HeaderCardContainer extends React.Component {

    constructor(){
        super();


        this.state = {
            Elements: [
                {
                    icon: `${icon3}`,
                    text: "We’ll give you a free debit card. Order it right in the app."
                },
                {
                    icon: `${icon4}`,
                    text: "Create smart budgets to help you take control of your spending."
                },
                {
                    icon: `${icon5}`,
                    text: "See where your money goes without solving equations."
                },
                {
                    icon: `${icon2}`,
                    text: "Pay absolutely nothing for sending money."
                },
                {
                    icon: `${icon1}`,
                    text: "Save automatically and we’ll pay you up to 15% interest every year."
                },

            ]
        }

        
    };

    render(){
        return(
            <div className="card-container">
                {
                    this.state.Elements.map(({icon, text}) => (
                        <HeaderCard icon={icon} text={text} />
                    ))
                }
            </div>
        )
    }

};

export default HeaderCardContainer;