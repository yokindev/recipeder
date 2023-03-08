import {
  NavBarContainer,
  NavBarLogo,
  NavBarLinks,
  NavBarLink,
  NavBarForm,
  NavBarInput,
  NavBarButtonSearch,
  NavBarDropdown,
  NavBarButtonSingOut,
  NavBarDiv,
  NavBarProfile,
  NavBarProfileName,
  NavBarProfilePhoto,
  NavBarSignOut,
  NavBarSignOutName,
} from "./NavBar.styles";

import ImageLogo from "../../../assets/images/chef-hat.png";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

export const NavBar = ({ user, setData, setId }) => {
  const auth = getAuth();
  const navigate = useNavigate();

  // Dropdown Menu

  const [openMenu, setOpenMenu] = useState(false);

  const menu = useRef(null);

  const closeMenu = (e) => {
    if (menu.current && openMenu && !menu.current.contains(e.target)) {
      setOpenMenu(false);
    }
  };

  document.addEventListener("mousedown", closeMenu);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  // Dropdown Profile

  const [openProfile, setOpenProfile] = useState(false);

  const profile = useRef(null);

  const closeProfile = (e) => {
    if (profile.current && openProfile && !profile.current.contains(e.target)) {
      setOpenProfile(false);
    }
  };

  document.addEventListener("mousedown", closeProfile);

  const handleOpenProfile = () => {
    setOpenProfile(!openProfile);
  };

  // Functions

  const [query, setQuery] = useState("");

  const handleOnChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("search", {state: {query}});
    setQuery("");
  };

  const links = ["American", "Asian", "Italian", "Mediterranean", "Mexican"];

  const searchType = async (link) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&cuisineType=${link}&random=true`
      );
      const json = await res.json();
      setData(json.hits);
      setOpenMenu(false);
      setId(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NavBarContainer>
      <NavBarDiv>
        <NavBarDropdown ref={menu}>
          <NavBarLogo src={ImageLogo} onClick={() => handleOpenMenu()} />
          {openMenu ? (
            <NavBarLinks>
              {links.map((link, index) => (
                <NavBarLink
                  key={index}
                  onClick={() => {
                    searchType(link);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {link}
                </NavBarLink>
              ))}
            </NavBarLinks>
          ) : null}
        </NavBarDropdown>

        <NavBarForm onSubmit={handleSubmit}>
          <NavBarInput
            type="text"
            placeholder="Search ..."
            value={query}
            onChange={handleOnChange}
          />
          <NavBarButtonSearch type="submit" alt="IconSearch" />
        </NavBarForm>
      </NavBarDiv>

      <NavBarDiv>
        <NavBarDropdown ref={profile}>
          <NavBarProfile onClick={() => handleOpenProfile()}>
            <NavBarProfileName>{user.displayName}</NavBarProfileName>
            <NavBarProfilePhoto src={user.photoURL} />
          </NavBarProfile>
          {openProfile ? (
            <NavBarSignOut
              onClick={() => {
                auth.signOut();
                navigate("/");
              }}
            >
              <NavBarSignOutName>Sign out</NavBarSignOutName>
              <NavBarButtonSingOut />
            </NavBarSignOut>
          ) : null}
        </NavBarDropdown>
      </NavBarDiv>
    </NavBarContainer>
  );
};
