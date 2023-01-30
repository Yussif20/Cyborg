import "./SectionHeader.css";

const SectionHeader = (props) => {
  return (
    <div className="section-header">
      <h4>
        {props.first}
        <span>{props.second}</span>
      </h4>
    </div>
  );
};

export default SectionHeader;
