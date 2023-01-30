import "./GamingLibrary.css";
import {
  GamingLibraryCard,
  SectionHeader,
  SectionWrapper,
} from "../../components/index.js";
import gamingLibraryData from "../../Data/GamingLibraryData.js";

const GamingLibrary = () => {
  const cards = gamingLibraryData.map((card) => {
    return (
      <GamingLibraryCard
        key={card.id}
        image={card.image}
        title={card.title}
        category={card.category}
        date_added={card.data_added}
        downloaded={card.downloaded}
      />
    );
  });
  return (
    <>
      <SectionWrapper>
        <SectionHeader>Gaming Library</SectionHeader>
        <div className="gaming-library-cards">{cards}</div>
      </SectionWrapper>
      ;
    </>
  );
};

export default GamingLibrary;
