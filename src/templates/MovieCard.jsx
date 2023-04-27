import styled from "styled-components";
import Image from "../components/Image";
import Heading from "../components/Heading";
import MovieRating from "../components/MovieRating";
import Time from "../components/Time";

const StyledArticle = styled.article`
  height: 283px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MovieCard = () => {
  return (
    <StyledArticle>
      <figure>
        <Image />
      </figure>
      <Heading
        title="Spiderman: No Way
        Home"
        size="14"
        weight="500"
        color="tomato"
        justify-self="center"
        as="h3"
      />
      <MovieRating />
    </StyledArticle>
  );
};

export default MovieCard;
