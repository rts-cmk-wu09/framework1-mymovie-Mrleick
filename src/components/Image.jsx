import styled from "styled-components";
import coverimage from "../assets/moviecover.png";

const StyledImg = styled.img`
  box-shadow: 0px 5px 10px rgb(0 0 0 / 0.5);
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`;

const Image = (props) => {
  return (
    <StyledImg
      src={coverimage}
      alt="blablabla"
      height={props.height}
      width={props.width}
    />
  );
};

export default Image;
