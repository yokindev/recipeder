import styled from "styled-components";

export const NavBarContainer = styled.div`
  background-color: #52b69a;
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
    color: #168aad;
  }
`;

export const NavBarButton = styled.img`
  width: 30px;
  cursor: pointer;

  &: hover;
`;

