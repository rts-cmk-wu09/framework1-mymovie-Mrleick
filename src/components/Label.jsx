import styled from "styled-components";

const StyledLabel = styled.label`
  width: 61px;
  background: #dbe3ff;
  border-radius: 25px;
  text-transform: uppercase;
  font-size: 8px;
  font-weight: 700px;
  text-align: center;
  padding: 4px;
  margin-top: 8px;
  color: #88a4e8;
`;

const Label = () => {
  return <StyledLabel title="Horror">Horror</StyledLabel>;
};

export default Label;
