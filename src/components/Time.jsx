import styled from "styled-components";
import { FaRegClock } from "react-icons/fa";

const StyledP = styled.p`
  display: flex;
  align-items: center;
  gap: 2px;
  font-weight: 100;
  margin-top: 12px;
  font-size: 12px;
`;

const Time = () => {
  return (
    <StyledP>
      <FaRegClock />
      1h 47m
    </StyledP>
  );
};

export default Time;
