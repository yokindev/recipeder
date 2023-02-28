import styled from "styled-components";
import { ReactComponent as IconLogout } from "../../../assets/svg/power.svg";
import { ReactComponent as IconSearch } from "../../../assets/svg/search.svg";

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const NavBarDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavBarLogo = styled.img`
  width: 50px;
  margin-right: 20px;
  cursor: pointer;
`;

export const NavBarDropdown = styled.div``;

export const NavBarLinks = styled.ul`
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin-top: 20px;
  padding: 0;
  background: #168aad;
`;

export const NavBarLink = styled.li`
  padding: 20px;
  color: white;
  text-decoration: none;
  font-size: 20px;
  font-weight: 800;
  cursor: pointer;

  :hover {
    background: #34a0a4;
  }
`;

export const NavBarForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  border: none;
  border-radius: 20px;
  margin-right: 20px;
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
  fill: #52b69a;
  cursor: pointer;

  :hover {
    fill: #168aad;
  }
`;

export const NavBarProfile = styled.div`
  display: flex;
  align-items: center;
`;

export const NavBarProfileName = styled.h3`
  color: white;
  margin: 0;
  margin-right: 10px;
  cursor: pointer;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const NavBarProfilePhoto = styled.img`
  width: 40px;
  border-radius: 30px;
  cursor: pointer;
`;

export const NavBarSignOut = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  margin-top: 25px;
  padding: 20px 30px 20px 30px;
  background: #168aad;
  cursor: pointer;

  :hover {
    background: #34a0a4;
  }
`;

export const NavBarSignOutName = styled.p`
  font-size: 18px;
  color: white;
  margin: 0;
  margin-right: 10px;
  
`;

export const NavBarButtonSingOut = styled(IconLogout)`
  width: 20px;
  height: 20px;
  fill: #ffffff;
`;
