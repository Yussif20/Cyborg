import "./MostPopular.css";
import imgOne from "../../assets/Images/popular-01.jpg";
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
            image={imgOne}
            title="Pubg"
            category="Legendry"
            rate="4.8"
            download="3.5M"
          />
          <Card
            image={imgOne}
            title="CS-Go"
            category="Stream-X"
            rate="4.5"
            download="1.2M"
          />
          <Card
            image={imgOne}
            title="Witcher"
            category="Legendry"
            rate="4"
            download="3.4M"
          />
          <Card
            image={imgOne}
            title="Fortnight"
            category="Sandbox"
            rate=""
            download=""
          />
          <Card
            image={imgOne}
            title="Pubg"
            category="Legendry"
            rate=""
            download=""
          />
          <Card
            image={imgOne}
            title="CS-Go"
            category="Sandbox"
            rate=""
            download=""
          />
          <Card
            image={imgOne}
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
