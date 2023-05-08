import React from "react";
import "./App.css";
import styled from "styled-components";
import detailCover from "./assets/detailcover.png";
import Switch from "./components/Switch";
import { FiArrowLeft } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

const StyledHeader = styled.header`
  height: 300px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  width: 375px;
  background-image: url(${detailCover});
`;

const StyledFiArrowLeft = styled(FiArrowLeft)`
  color: #ffffff;
`;
const StyledFaPlay = styled(FaPlay)`
  color: #110E47;;
`;

const DetailIcons = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  color: white;
  justify-self: center;
  font-size: 24px;
  gap: 266px;
  margin-top: 45px;
`;

const Playbutton = styled.div`
  height: 45px;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 50px;
  justify-self: center;
  margin-top: 24px;
  position: relative;

  &::after {
    content: "Play Trailer";
    color: #ffffff;
    top: 55px;
    font-size: 12px;
    position: absolute;
    width: 68px;
  }
`;

const Detail = () => {
  return (
    <div className="Detail">
      <StyledHeader>
        <DetailIcons>
          <StyledFiArrowLeft />
          <Switch />
        </DetailIcons>
        <Playbutton>
          <StyledFaPlay />
        </Playbutton>
      </StyledHeader>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default Detail;
