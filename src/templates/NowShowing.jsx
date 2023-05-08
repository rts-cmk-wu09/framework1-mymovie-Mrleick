import styled from "styled-components";
import Image from "../components/Image";
import Rating from "../components/Rating";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { Link, useLoaderData } from "react-router-dom";

const StyledArticle = styled.article`
  height: 283px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NowShowing = () => {
  const movieCardData = useLoaderData();
  return (
    <div className="flexContainer movieCardContainerLayout">
      {movieCardData.results.map((data) => (
        <Link to="details/" key={data.id}>
          <StyledArticle>
            <figure>
              <Image
                width="143"
                shadow={true}
                src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
                alt="Cover Image"
              />
            </figure>
            <Heading
              title={
                data.title.length > 25
                  ? data.title.substring(0, 25) + "..."
                  : data.title
              }
              size="14"
              as="h3"
            />
            <Rating voteAverage={data.vote_average} />
          </StyledArticle>
        </Link>
      ))}
    </div>
  );
};

export async function loader() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing/?api_key=74800f373e5a296266dcd67ef1c52da6"
  );
  const data = await res.json();
  return data;
}

export default NowShowing;
