import styled from "styled-components";
import { useState } from "react";
import ReactSwitch from "react-switch";

const StyledSwitch = styled(ReactSwitch)`
  grid-column-start: 3;
<<<<<<< HEAD
  grid-row-start: 1;
  justify-self: ${(props) => props.justify};
  align-self: ${(props) => props.align};
`;

const Switch = (props) => {
  let [checked, setChecked] = useState(false);
=======
  justify-self: end;
`;

const Switch = () => {
  const [checked, setChecked] = useState(false);
>>>>>>> e2c6a6eec0e1aeb9c06777af17f982364897f673
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <StyledSwitch
<<<<<<< HEAD
      {...props}
=======
>>>>>>> e2c6a6eec0e1aeb9c06777af17f982364897f673
      height={21}
      width={38}
      offColor="#AAA9B1"
      onColor="#AAA9B1"
      onHandleColor="#000000"
      uncheckedIcon={false}
      checkedIcon={false}
      checked={checked}
      onChange={handleChange}
    />
  );
};

export default Switch;
