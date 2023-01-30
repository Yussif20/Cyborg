import "./MostPopular.css";
import imgOne from "../../assets/Images/popular-01.jpg";
import imgTwo from "../../assets/Images/popular-02.jpg";
import imgThree from "../../assets/Images/popular-03.jpg";
import imgFour from "../../assets/Images/popular-04.jpg";
import imgFive from "../../assets/Images/popular-05.jpg";
import imgSix from "../../assets/Images/popular-06.jpg";
import imgSeven from "../../assets/Images/popular-07.jpg";
import imgEight from "../../assets/Images/popular-08.jpg";
import { Card, SectionHeader, SectionWrapper } from "../../components/index.js";
const MostPopular = () => {
  return (
    <>
      <SectionWrapper>
        <SectionHeader>Most popular</SectionHeader>
        <div className="most-popular-items">
          <Card
            image={imgOne}
            title="Fortnight"
            category="Sandbox"
            rate="4.2"
            download="2.2M"
          />
          <Card
            image={imgTwo}
            title="Pubg"
            category="Legendry"
            rate="4.8"
            download="3.5M"
          />
          <Card
            image={imgThree}
            title="CS-Go"
            category="Stream-X"
            rate="4.5"
            download="1.2M"
          />
          <Card
            image={imgFour}
            title="Witcher"
            category="Legendry"
            rate="4"
            download="3.4M"
          />
          <Card
            image={imgFive}
            title="Fortnight"
            category="Sandbox"
            rate="4.1"
            download="1.6M"
          />
          <Card
            image={imgSix}
            title="Pubg"
            category="Legendry"
            rate="3.5"
            download="1M"
          />
          <Card
            image={imgSeven}
            title="CS-Go"
            category="Sandbox"
            rate="4.1"
            download="1.2M"
          />
          <Card
            image={imgEight}
            title="Witcher"
            category="Legendry"
            rate="3.9"
            download="5.6M"
          />
        </div>
      </SectionWrapper>
      ;
    </>
  );
};

export default MostPopular;
