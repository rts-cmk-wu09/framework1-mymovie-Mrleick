import styled from "styled-components";

const StyledHeading = styled.h1`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  grid-column-start: 2;
  color: ${(props) => props.color};
  justify-self: center;
`;

const Heading = (props) => {
  return <StyledHeading {...props}>{props.title}</StyledHeading>;
};

export default Heading;
