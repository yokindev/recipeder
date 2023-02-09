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
import IconLogout from '../../../assets/icons/power.svg'

export const NavBar = () => {
  const auth = getAuth();

  return (
    <NavBarContainer>
      <NavBarWrapper>
        <NavBarLogo>
          <NavBarLogoImage src={ImageLogo} />
          <NavBarLogoTitle>RECIPIDER</NavBarLogoTitle>
        </NavBarLogo>
        <NavBarButton onClick={() => auth.signOut()}>
          <NavBarButtonIcon src={IconLogout}/>
        </NavBarButton>
      </NavBarWrapper>
    </NavBarContainer>
  );
};
