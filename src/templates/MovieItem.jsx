import React from "react";
import styled from "styled-components";
import Heading from "../components/Heading";
import Rating from "../components/Rating";
import Image from "../components/Image";
import Label from "../components/Label";
import Time from "../components/Time";
import { Link, useLoaderData } from "react-router-dom";

const StyledArticle = styled.article`
  display: flex;
  gap: 1rem;
`;
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledDiv = styled.div`
  display: flex;
  gap: 8px;
`;
const MovieItem = () => {
  const movieItemData = useLoaderData();
  console.log(movieItemData);

  return (
    <>
      {movieItemData.results.map((data) => (
        <Link to={`details/${data.id}`} key={data.id}>
          <StyledArticle key={data.id}>
            <Image
              src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
              width="85"
              height="120"
            />
            <StyledSection>
              <Heading title={data.title} size="14" as="h3" />
              <Rating voteAverage={data.vote_average} />
              <StyledDiv>
                <Label title="horror" />
                <Label title="thriller" />
                <Label title="documentary" />
              </StyledDiv>
              <Time />
            </StyledSection>
          </StyledArticle>
        </Link>
      ))}
    </>
  );
};

export async function loader() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=74800f373e5a296266dcd67ef1c52da6"
  );
  const data = await res.json();
  return data;
}

export default MovieItem;
