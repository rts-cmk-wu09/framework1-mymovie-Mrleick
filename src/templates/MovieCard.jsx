import styled from "styled-components";
import Image from "../components/Image";
import Heading from "../components/Heading";
import MovieRating from "../components/MovieRating";

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
        title="Movie Title"
        size="14px"
        weight="bold"
        color="000"
        justify-self="center"
      />
      <MovieRating />
    </StyledArticle>
  );
};

export default MovieCard;
