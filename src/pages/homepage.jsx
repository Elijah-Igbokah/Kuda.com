import React from 'react';
import './homepage.scss';

import Hero from '../components/Header-hero/Header-hero.component';
import HeaderCardContainer from '../components/header-cards/card-container.component';
import Section from '../components/section/section.component';
import FlexContainer from '../components/flex-container/flex.component';
import FlexReverse from '../components/flex-container/flex-reverse.component'
import SectText from '../components/sect-flex.components/sect.text.component';
import SectImage from '../components/sect-flex.components/sect-pic.component';
import SectionHeading from '../components/section/section-heading.component';
import PartnerIcon from '../components/partner-icons.components/partner-icons.component';
import ReversePartnerIcon from '../components/partner-icons.components/reversepartner-icon.component';
// import LinkGrid from '../components/footer-links/link-grid.component';
import Footer from '../components/footer/footer.component';

import image from "../images/svgexport-22.svg";
import image2 from "../images/svgexport-24.svg";
import image4 from "../images/svgexport-26.svg";
import image1 from "../images/svgexport-23.svg";
import image5 from "../images/svgexport-27.svg";
import image6 from "../images/svgexport-25.svg";

// Partner Icons
import icon1 from "../images/8tSpS5jObpKi1.svg";
import icon2 from "../images/pl8SRmnMln5rI.svg";
import icon3 from "../images/fintech-ec1648aceaa2b42b4a89dfe3e55ed3c9.svg";
import icon4 from "../images/25S2IkeWJ37ys.svg";
import icon5 from "../images/cnbc-be76bb741fde3ea7788f7cc052170dd2.svg";
import icon6 from "../images/euromoney-3e2535f16ce2f9fc624ac8efdd98cace.svg";
import icon7 from "../images/b8Hh4NfSEUZNS.svg";
import icon8 from "../images/entreeCapital-1f5acde36a3d9fede8e7fbdeae30c84e.svg";
import icon9 from "../images/sbiHoldings-3d3497dcee6e06e2866d4c460eb03d53.svg";
import icon10 from "../images/targetGlobal-6669849355e79f6edc1aaa443cd9386e.svg";
import icon11 from "../images/mzzvvFER8GbAj.svg";
import ComparisonGrid from '../components/comparison-grid.components/comparison-grid.component';
import NavBar from '../components/nav-bar.components/nav-bar.component';

function Homepage() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <HeaderCardContainer />
      <Section>
        <FlexContainer>
          <SectText width="60%" heading="Your phone + our app + a debit card = a simpler life." desc="We designed a banking app for your busy lifestyle, and we’ll give you a free debit card to go with it. That’s all you need to make the right moves with your money, no sweat." link="Open An Account in Minutes" />
          <SectImage flexPosition="flex-end" image= {image} />
        </FlexContainer>
      </Section>
      <Section>
        <FlexReverse>
          <SectText width="100%" heading="It’s your money, we just help you manage it." desc="Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that." link="Get Help" />
          <SectImage flexPosition="flex-start" image= {image1} />
        </FlexReverse>
      </Section>
      <Section>
        <FlexContainer>
          <SectText width="100%" heading="Save money as you spend it, seriously." desc="You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow." link="See all our Savings" />
          <SectImage flexPosition="flex-end" image= {image2} />
        </FlexContainer>
      </Section>
      <Section>
        <FlexContainer>
          <SectImage flexPosition="flex-start" image= {image6} />
          <SectText width="100%" heading="Turn off access, turn on safety." desc="Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try." link="Learn more about Cards" />
        </FlexContainer>
      </Section>
      <Section>
        <FlexContainer>
          <SectText width="100%" heading="We’re always happy to help you." desc="You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy." link="Get Help" />
          <SectImage flexPosition="flex-end" image= {image4} />
        </FlexContainer>
      </Section>
      <Section>
        <FlexContainer>
          <SectImage flexPosition="flex-start" image= {image5} />
          <SectText width="100%" heading="Fees as clear as glass." desc="We’re serious about free banking, and we will never, ever charge you for anything without your consent." link="See all our fees" />
        </FlexContainer>
      </Section>
      <div style={{margin: "120px"}}></div>
      <SectionHeading text="Don’t just take our word for it" />
      <PartnerIcon>
        <img src={icon1} alt="" />
        <img src={icon2} alt="" />
        <img src={icon3} alt="" />
        <img src={icon4} alt="" />
        <img src={icon5} alt="" />
        <img src={icon6} alt="" />
      </PartnerIcon>
      <SectionHeading text="Our Partners" />
      <ReversePartnerIcon>
        <img src={icon7} alt="" />
        <img src={icon8} alt="" />
        <img src={icon9} alt="" />
        <img src={icon10} alt="" />
        <img src={icon11} alt="" />
      </ReversePartnerIcon>
      <hr />
      <Section>
        <SectionHeading text="Choose the freedom you need." />
        <ComparisonGrid/>
      </Section>
      <Footer/>

    </div>
  );
}

export default Homepage;
