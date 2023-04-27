import styled from "styled-components";

const StyledHeading = styled((props) => props.as)`
  font-size: ${(props) => props.size}px;
  grid-column-start: 2;
  justify-self: center;
  margin-bottom: ${(props) => props.marginBottom}px;
  width: ${(props) => props.width}px;
  font-weight: ${(props) => props.fontWeight};
`;

const Heading = (props) => {
  return (
    <StyledHeading
      size={props.size}
      marginBottom={props.marginBottom}
      as={props.as}
      width={props.width}
      fontWeight={props.fontWeight}
    >
      {props.title}
    </StyledHeading>
  );
};

export default Heading;
