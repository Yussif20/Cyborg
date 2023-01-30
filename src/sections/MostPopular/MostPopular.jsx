import "./MostPopular.css";
import mostPopularData from "../../Data/MostPopularData";

import { Card, SectionHeader, SectionWrapper } from "../../components/index.js";
const MostPopular = () => {
  const cards = mostPopularData.map((card) => {
    return (
      <Card
        key={card.id}
        image={card.image}
        title={card.title}
        category={card.category}
        rate={card.rate}
        download={card.download}
      />
    );
  });
  return (
    <>
      <SectionWrapper>
        <SectionHeader first="Most" second="Popular" />
        <div className="most-popular-items">{cards}</div>
      </SectionWrapper>
      ;
    </>
  );
};

export default MostPopular;
