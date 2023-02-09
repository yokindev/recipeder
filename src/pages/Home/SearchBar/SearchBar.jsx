import {
  SearchBarButton,
  SearchBarContainer,
  SearchBarIcon,
  SearchBarInput,
  SearchBarWrapper,
} from "./SearchBar.styles";
import IconSearch from "../../../assets/icons/search.svg";

export const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchBarWrapper>
        <SearchBarInput type="text" placeholder="Let's find out" />
        <SearchBarButton>
          <SearchBarIcon src={IconSearch} />
        </SearchBarButton>
      </SearchBarWrapper>
    </SearchBarContainer>
  );
};
