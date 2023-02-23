import styled from "styled-components";
import { ReactComponent as IconLogout } from "../../../assets/svg/power.svg";
import { ReactComponent as IconSearch } from "../../../assets/svg/search.svg";

export const NavBarContainer = styled.div`
  background: #168aad;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavBarLogo = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const NavBarLogoImage = styled.img`
  width: 50px;
`;

export const NavBarForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  border: none;
  border-radius: 20px;
  padding: 10px 20px 10px 20px;
  background: white;
`;

export const NavBarInput = styled.input`
  width: 100%;
  border: none;
  font-weight: 900;
  font-size: 20px;
  outline: none;
`;

export const NavBarButtonSearch = styled(IconSearch)`
  width: 30px;
  height: 30px;
  fill: #34a0a4;
  cursor: pointer;

  :hover {
    fill: #168aad;
  }
`;

export const NavBarLinks = styled.ul`
  display: flex;
  justify-content: space-evenly;
  max-width: 700px;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  list-style-type: none;
`;

export const NavBarLink = styled.li`
  padding: 14px 16px;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  font-weight: 800;
  cursor: pointer;

  :hover {
    color: #34a0a4;
  }
`;

export const NavBarButtonLogout = styled(IconLogout)`
  width: 30px;
  height: 30px;
  fill: #ffffff;
  cursor: pointer;

  :hover {
    fill: #34a0a4;
  }
`;
