import styled from "styled-components";
import { ReactComponent as IconLogout } from "../../../assets/svg/power.svg";
import { ReactComponent as IconSearch } from "../../../assets/svg/search.svg";
import { ReactComponent as IconMenu } from "../../../assets/svg/menu-burger.svg";

export const NavBarContainer = styled.div`
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
  max-width: 600px;
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
  width: 25px;
  height: 25px;
  fill: #34a0a4;
  cursor: pointer;

  :hover {
    fill: #168aad;
  }
`;

export const NavBarDropdown = styled.div`
  position: relative;
`;

export const NavBarButtonMenu = styled(IconMenu)`
  width: 30px;
  height: 30px;
  fill: #ffffff;
  cursor: pointer;

  :hover {
    fill: #34a0a4;
  }
`;

export const NavBarLinks = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  background: #168aad;
`;

export const NavBarLink = styled.li`
  padding: 14px 14px 14px 10px;
  color: white;
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
