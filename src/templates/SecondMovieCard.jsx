import styled from "styled-components";
import Image from "../components/Image";
import Heading from "../components/Heading";
import MovieRating from "../components/MovieRating";
import StyledLabel from "../components/Label";
const StyledArticle = styled.article`
  height: 120px;
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const SecondMovieCard = () => {
  return (
    <StyledArticle>
      <Image width="85" />
      <div>
        <Heading
          title="Venom Let There Be Carnage"
          size="14"
          weight="700"
          as="h3"
          width="117"
        />
        <MovieRating margintop="10" />
        <div className="LabelContainer">
        <StyledLabel />
        <StyledLabel />
        <StyledLabel />
        </div>
      </div>
    </StyledArticle>
  );
};

export default SecondMovieCard;
