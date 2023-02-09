import { NavBar } from "./NavBar/NavBar";
import { SearchBar } from "./SearchBar/SearchBar";

export const Home = ({ recipes }) => {
  // const { result } = recipes;

  // if (result) {
  //   const { hits } = result;
  //   console.log(hits);

  return (
    <>
      <NavBar />
      <SearchBar />
    </>
  );
};
