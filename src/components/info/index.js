import { InfoContainer, TitleAlt, Input } from "./styles";

const Info = ({ term, setTerm }) => {
  return (
    <>
      <InfoContainer>
        <TitleAlt>What are you looking for?</TitleAlt>
        <Input
          type="text"
          placeholder="Search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </InfoContainer>
    </>
  );
};

export default Info;
