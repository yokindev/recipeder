import {
  NavBarContainer,
  NavBarLogo,
  NavBarLogoImage,
  NavBarLinks,
  NavBarLink,
  NavBarButtonLogout,
  NavBarForm,
  NavBarInput,
  NavBarButtonSearch,
} from "./NavBar.styles";

import ImageLogo from "../../../assets/images/chef-hat.png";
import { getAuth } from "firebase/auth";
import { useState } from "react";

export const NavBar = ({ setData, setId }) => {
  const auth = getAuth();

  const [query, setQuery] = useState("");
  const links = ["American", "Asian", "Italian", "Mediterranean", "Mexican"];

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

  const searchType = async (link) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&cuisineType=${link}&random=true`
      );
      const json = await res.json();
      setData(json.hits);
      setId(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NavBarContainer>
      <NavBarLogo>
        <NavBarLogoImage src={ImageLogo} />
      </NavBarLogo>
      <NavBarForm onSubmit={searchRecipe}>
        <NavBarInput
          type="text"
          placeholder="Let's find out"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <NavBarButtonSearch type="submit" alt="IconSearch" />
      </NavBarForm>
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
      <NavBarButtonLogout
        onClick={() => {
          auth.signOut();
        }}
      />
    </NavBarContainer>
  );
};
