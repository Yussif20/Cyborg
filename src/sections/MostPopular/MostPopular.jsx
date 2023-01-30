import "./MostPopular.css";
import imgOne from "../../assets/Images/popular-01.jpg";
import imgTwo from "../../assets/Images/popular-02.jpg";
import imgThree from "../../assets/Images/popular-03.jpg";
import imgFour from "../../assets/Images/popular-04.jpg";
import imgFive from "../../assets/Images/popular-05.jpg";
import imgSix from "../../assets/Images/popular-06.jpg";
import imgSeven from "../../assets/Images/popular-07.jpg";
import imgEight from "../../assets/Images/popular-08.jpg";
import Card from "../../components/Card/Card";

const MostPopular = () => {
  return (
    <>
      <div className="section-wrapper">
        <div className="section-header">
          <h4>Most Popular</h4>
        </div>
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
            rate=""
            download=""
          />
          <Card
            image={imgSix}
            title="Pubg"
            category="Legendry"
            rate=""
            download=""
          />
          <Card
            image={imgSeven}
            title="CS-Go"
            category="Sandbox"
            rate=""
            download=""
          />
          <Card
            image={imgEight}
            title="Witcher"
            category="Legendry"
            rate=""
            download=""
          />
        </div>
      </div>
      ;
    </>
  );
};

export default MostPopular;
