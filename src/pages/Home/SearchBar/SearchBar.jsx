import {
  SearchBarButton,
  SearchBarContainer,
  SearchBarIcon,
  SearchBarInput,
  SearchBarForm,
} from "./SearchBar.styles";
import IconSearch from "../../../assets/svg/search.svg";
import { useState } from "react";

export const SearchBar = ({setData}) => {
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
      } catch (error) {
        console.log(error);
      }

      setQuery("");
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
