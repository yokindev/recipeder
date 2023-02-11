import {
  SearchBarButton,
  SearchBarContainer,
  SearchBarIcon,
  SearchBarInput,
  SearchBarForm,
} from "./SearchBar.styles";
import IconSearch from "../../../assets/svg/search.svg";
import { useNavigate } from "react-router-dom";

export const SearchBar = ({ target, setTarget }) => {
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();

    if (target) {
      navigate("/results");
    }
  };

  return (
    <SearchBarContainer>
      <SearchBarForm onSubmit={search}>
        <SearchBarInput
          type="text"
          placeholder="Let's find out"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />
        <SearchBarButton type="submit">
          <SearchBarIcon src={IconSearch} />
        </SearchBarButton>
      </SearchBarForm>
    </SearchBarContainer>
  );
};
