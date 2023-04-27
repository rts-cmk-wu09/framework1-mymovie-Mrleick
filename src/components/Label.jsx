import styled from "styled-components";

const StyledLabel = styled.label`
 width: 61px;
  height: 18px;
  background-color: #dbe3ff;
  border-radius: 100px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 700;
  font-size: 8px;
`;

const Label = () => {
  return <StyledLabel title="Horror">Horror</StyledLabel>;
};

export default Label;
