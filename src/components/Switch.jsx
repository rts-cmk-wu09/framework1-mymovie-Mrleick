import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import ReactSwitch from "react-switch";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.checked ? "#000000;" : "#FFFFFF")};
    
  }
  h1, h2, h3 {
    color: ${(props) => (props.checked ? "#DBE3FF" : "#000000")};
  }
`;

const StyledSwitch = styled(ReactSwitch)`
  grid-column-start: 3;
  justify-self: end;
`;

const Switch = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <>
      <GlobalStyle checked={checked} />
      <StyledSwitch
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
    </>
  );
};

export default Switch;
