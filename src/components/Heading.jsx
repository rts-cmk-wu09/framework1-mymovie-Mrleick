<<<<<<< HEAD
import styled, { css } from "styled-components";

const StyledHeading = styled((props) => props.as)`
  font-size: ${(props) => props.size}px;
  ${(props) =>
    props.as === "h1" &&
    css`
      grid-column-start: 2;
      justify-self: center;
      align-self: center;
    `}
=======
import styled from "styled-components";

const StyledHeading = styled.h1`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  grid-column-start: 2;
  color: ${(props) => props.color};
  justify-self: center;
>>>>>>> e2c6a6eec0e1aeb9c06777af17f982364897f673
`;

const Heading = (props) => {
  return <StyledHeading {...props}>{props.title}</StyledHeading>;
};

export default Heading;
