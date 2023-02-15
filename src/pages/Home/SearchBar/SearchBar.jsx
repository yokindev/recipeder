import {
  SearchBarButton,
  SearchBarContainer,
  SearchBarIcon,
  SearchBarInput,
  SearchBarForm,
} from "./SearchBar.styles";
import IconSearch from "../../../assets/svg/search.svg";

import { useState } from "react";

export const SearchBar = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);
  const url = `${process.env.REACT_APP_API_URL}?type=public&q=${name}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`;

  const search = async () => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      setData(json.hits);
      // setLoading(false);
    } catch (error) {
      // setLoading(false);
      console.log(error);
    }
    return { data };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      search();
      setName('')
    }
  };

  console.log(data);

  return (
    <SearchBarContainer>
      <SearchBarForm onSubmit={handleSubmit}>
        <SearchBarInput
          type="text"
          placeholder="Let's find out"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <SearchBarButton type="submit">
          <SearchBarIcon src={IconSearch} />
        </SearchBarButton>
      </SearchBarForm>
    </SearchBarContainer>
  );
};
