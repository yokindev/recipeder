import styled from "styled-components";

export const NavBarContainer = styled.div`
  width: 100%;
  background-color: #52B69A;
`;

export const NavBarWrapper = styled.nav`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavBarLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const NavBarLogoImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const NavBarLogoTitle = styled.h1`
  margin: 0;
  font-weight: 900;
  color: white;
`;

export const NavBarButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const NavBarButtonIcon = styled.img`
  width: 25px;
`;
