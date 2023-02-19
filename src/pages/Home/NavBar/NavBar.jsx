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
import { useEffect, useState } from "react";

export const NavBar = ({ setData }) => {
  const [url, setUrl] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();

  const links = ["American", "Asian", "Italian", "Mediterranean", "Mexican"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json.hits);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);

  return (
    <NavBarContainer>
      <NavBarLogo onClick={() => navigate("/")}>
        <NavBarLogoImage src={ImageLogo} />
      </NavBarLogo>
      <NavBarLinks>
        {links.map((link, index) => (
          <NavBarLink
            key={index}
            onClick={() =>
              setUrl(
                `${process.env.REACT_APP_API_URL}?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&cuisineType=${link}`
              )
            }
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
