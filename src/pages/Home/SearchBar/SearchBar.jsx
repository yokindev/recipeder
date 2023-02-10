import {
  SearchBarButton,
  SearchBarContainer,
  SearchBarIcon,
  SearchBarInput,
  SearchBarWrapper,
} from "./SearchBar.styles";
import IconSearch from "../../../assets/svg/search.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const SearchBar = () => {
  const navigate = useNavigate();

  const [target, setTarget] = useState("");
  localStorage.setItem("Target", target);

  const handleKey = (e) => {
    if (e.key === "Enter" && target) {
      navigate("/results");
    }
  };

  const search = () => {
    if (target) {
      navigate("/results");
    }
  };

  return (
    <SearchBarContainer>
      <SearchBarWrapper>
        <SearchBarInput
          type="text"
          placeholder="Let's find out"
          onKeyDown={handleKey}
          onChange={(e) => setTarget(e.target.value)}
        />
        <SearchBarButton onClick={search}>
          <SearchBarIcon src={IconSearch} />
        </SearchBarButton>
      </SearchBarWrapper>
    </SearchBarContainer>
  );
};
