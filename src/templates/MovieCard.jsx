import styled from "styled-components";
import Image from "../components/Image";
<<<<<<< HEAD
import Rating from "../components/Rating";
import Heading from "../components/Heading";
import coverimage from "../assets/moviecover.png";
=======
import Heading from "../components/Heading";
import MovieRating from "../components/MovieRating";
>>>>>>> e2c6a6eec0e1aeb9c06777af17f982364897f673

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
        <Image shadow={true} src={coverimage} alt="Cover Image" />
      </figure>
<<<<<<< HEAD
      <Heading title="Venom Let There Be Carnage" size="14" as="h3" />
      <Rating />
=======
      <Heading
        title="Movie Title"
        size="14px"
        weight="bold"
        color="000"
        justify-self="center"
      />
      <MovieRating />
>>>>>>> e2c6a6eec0e1aeb9c06777af17f982364897f673
    </StyledArticle>
  );
};

export default MovieCard;
