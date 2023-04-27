import styled from "styled-components";
import { FaFilm, FaTicketAlt, FaRegBookmark } from "react-icons/fa";

const StyledNav = styled.nav`
  height: 60px;
  display: flex;
  gap: 101px;
  font-size: 24px;
  color: ${(props) => props.color};
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
  width: 100vw;
`;

const Navigation = () => {
  return (
    <StyledNav>
      <FaFilm color="#DBE3FF" />
      <FaTicketAlt color="BCBCCD" />
      <FaRegBookmark color="BCBCCD" />
    </StyledNav>
  );
};

export default Navigation;
