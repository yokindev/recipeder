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

export const NavBar = ({ user, setQueryData, setTypeData }) => {
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

  const links = ["American", "Asian", "Italian", "Mediterranean", "Mexican"];
  const [query, setQuery] = useState("");

  const handleOnChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      fetchQuery(query);
      navigate(`search/${query}`);
      setQuery("");
    }
  };

  const fetchQuery = async (query) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}?type=public&q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
      );
      const json = await res.json();
      setQueryData(json.hits);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchType = async (link) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&cuisineType=${link}`
      );
      const json = await res.json();
      setTypeData(json.hits);
      navigate(`type/${link}`);
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
                    setOpenMenu(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    fetchType(link);
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
          <NavBarButtonSearch
            onClick={handleSubmit}
            type="submit"
            alt="IconSearch"
          />
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
