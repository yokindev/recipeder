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
import { getAuth } from "firebase/auth";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const NavBar = ({ user, setData, setId }) => {
  const navigate = useNavigate();
  const auth = getAuth();

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

  // Fetchs

  const [query, setQuery] = useState("");

  const searchRecipe = async (e) => {
    e.preventDefault();
    if (query) {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}?type=public&q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
        );
        const json = await res.json();
        setData(json.hits);
        setId(null);
      } catch (error) {
        console.log(error);
      }

      setQuery("");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
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

        <NavBarForm onSubmit={searchRecipe}>
          <NavBarInput
            type="text"
            placeholder="Search ..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <NavBarButtonSearch onClick={searchRecipe} alt="IconSearch" />
        </NavBarForm>
      </NavBarDiv>

      <NavBarDiv>
        <NavBarDropdown ref={profile}>
          <NavBarProfile onClick={() => handleOpenProfile()}>
            <NavBarProfileName>{user.displayName}</NavBarProfileName>
            <NavBarProfilePhoto src={user.photoURL} />
          </NavBarProfile>
          {openProfile ? (
            <NavBarSignOut>
              <NavBarSignOutName>Sign out</NavBarSignOutName>
              <NavBarButtonSingOut
                onClick={() => {
                  auth.signOut();
                  navigate("/");
                }}
              />
            </NavBarSignOut>
          ) : null}
        </NavBarDropdown>
      </NavBarDiv>
    </NavBarContainer>
  );
};
