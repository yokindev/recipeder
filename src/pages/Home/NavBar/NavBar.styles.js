import styled from "styled-components";

export const NavBarContainer = styled.div`
  background-color: #168aad;
  padding: 15px;
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

export const NavBarLinks = styled.ul`
  display: flex;
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
    background-color: #34a0a4;
  }
`;

export const NavBarButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const NavBarButtonIcon = styled.img`
  width: 25px;
`;
