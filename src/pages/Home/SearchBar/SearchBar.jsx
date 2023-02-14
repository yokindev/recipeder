import {
  SearchBarButton,
  SearchBarContainer,
  SearchBarIcon,
  SearchBarInput,
  SearchBarForm,
} from "./SearchBar.styles";
import IconSearch from "../../../assets/svg/search.svg";

import { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";

export const SearchBar = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      search();
    }
  };

  const search = useFetch(
    `${process.env.REACT_APP_API_URL}?type=public&q=${name}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
  );

  return (
    <SearchBarContainer>
      <SearchBarForm onSubmit={handleSubmit}>
        <SearchBarInput
          type="text"
          placeholder="Let's find out"
          onChange={(e) => setName(e.target.value)}
        />
        <SearchBarButton type="submit">
          <SearchBarIcon src={IconSearch} />
        </SearchBarButton>
      </SearchBarForm>
    </SearchBarContainer>
  );
};
