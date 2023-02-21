import {
  SearchBarButton,
  SearchBarContainer,
  SearchBarIcon,
  SearchBarInput,
  SearchBarForm,
} from "./SearchBar.styles";
import IconSearch from "../../../assets/svg/search.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = ({ setData }) => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const searchRecipe = async (e) => {
    e.preventDefault();
    if (query) {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}?type=public&q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
        );
        const json = await res.json();
        setData(json.hits);
      } catch (error) {
        console.log(error);
      }

      navigate("/home");
      setQuery("");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <SearchBarContainer>
      <SearchBarForm onSubmit={searchRecipe}>
        <SearchBarInput
          type="text"
          placeholder="Let's find out"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchBarButton type="submit">
          <SearchBarIcon src={IconSearch} alt="IconSearch" />
        </SearchBarButton>
      </SearchBarForm>
    </SearchBarContainer>
  );
};
