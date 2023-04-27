import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const StyledFaStar = styled(FaStar)`
  color: #ffc319;
  margin-top: ${(props) => props.margintop}px;
`;
const StyledP = styled.p`
  color: #9c9c9c;
  margin-left: 4px;
  font-size: 14px;
  margin-top: ${(props) => props.margintop}px;
`;
const StyledDiv = styled.div`
  display: flex;
`;

const MovieRating = (props) => {
  return (
    <StyledDiv>
      <StyledFaStar margintop={props.margintop} />
      <StyledP margintop={props.margintop}>9.1/10 IMDb</StyledP>
    </StyledDiv>
  );
};

export default MovieRating;

