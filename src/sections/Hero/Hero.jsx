import PrimaryButton from "../../components/Buttons/PrimaryButton";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-text">
        <h6 className="hero-subtitle">Welcome to Cyborg</h6>
        <h4 className="hero-title">
          <em>Browse</em> Our Popular Games now.
        </h4>
        <PrimaryButton>Browse Now</PrimaryButton>
      </div>
    </div>
  );
};

export default Hero;
