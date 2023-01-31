import "./Buttons.css";

const SecondaryButton = (props) => {
  return (
    <div className="button secondary-btn">
      <a href="/#">{props.children}</a>
    </div>
  );
};
export default SecondaryButton;
