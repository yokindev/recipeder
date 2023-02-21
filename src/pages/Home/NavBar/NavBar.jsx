import {
  NavBarContainer,
  NavBarLogo,
  NavBarLogoImage,
  NavBarButton,
  NavBarButtonIcon,
  NavBarLinks,
  NavBarLink,
} from "./NavBar.styles";
import ImageLogo from "../../../assets/images/chef-hat.png";
import IconLogout from "../../../assets/svg/power.svg";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const NavBar = ({ setData }) => {
  const navigate = useNavigate();
  const auth = getAuth();

  const links = ["American", "Asian", "Italian", "Mediterranean", "Mexican"];

  const searchType = async (link) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&cuisineType=${link}&random=true`
      );
      const json = await res.json();
      setData(json.hits);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NavBarContainer>
      <NavBarLogo onClick={() => navigate("/home")}>
        <NavBarLogoImage src={ImageLogo} />
      </NavBarLogo>
      <NavBarLinks>
        {links.map((link, index) => (
          <NavBarLink
            key={index}
            onClick={() => {
              searchType(link);
              navigate("/");
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {link}
          </NavBarLink>
        ))}
      </NavBarLinks>
      <NavBarButton onClick={() => auth.signOut()}>
        <NavBarButtonIcon src={IconLogout} alt="IconLogout" />
      </NavBarButton>
    </NavBarContainer>
  );
};
