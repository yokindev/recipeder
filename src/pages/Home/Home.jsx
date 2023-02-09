import { BrowserRouter, Route, Routes } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Default } from "./Default/Default";
import { NavBar } from "./NavBar/NavBar";
import { SearchBar } from "./SearchBar/SearchBar";

export const Home = ({ recipes }) => {
  const defaultRecipes = useFetch(
    `${process.env.REACT_APP_API_URL}?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&diet=balanced&random=true`
  );
  const { result } = defaultRecipes;

  if (result) {
    const { hits } = result;
    console.log(hits);

    return (
      <>
        <BrowserRouter>
          <NavBar />
          <SearchBar />
          <Routes>
            <Route path="/" element={<Default />} />
            <Route path="/home" element={<Default />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
};
