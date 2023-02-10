import { getAuth } from "firebase/auth";
import {
  NavBarContainer,
  NavBarWrapper,
  NavBarLogo,
  NavBarLogoImage,
  NavBarLogoTitle,
  NavBarButton,
  NavBarButtonIcon,
} from "./NavBar.styles";
import ImageLogo from "../../../assets/images/chef-hat.png";
import IconLogout from "../../../assets/svg/power.svg";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  return (
    <NavBarContainer>
      <NavBarWrapper>
        <NavBarLogo onClick={() => navigate('/')}>
          <NavBarLogoImage src={ImageLogo} />
          <NavBarLogoTitle>RECIPIDER</NavBarLogoTitle>
        </NavBarLogo>
        <NavBarButton onClick={() => auth.signOut()}>
          <NavBarButtonIcon src={IconLogout} />
        </NavBarButton>
      </NavBarWrapper>
    </NavBarContainer>
  );
};
