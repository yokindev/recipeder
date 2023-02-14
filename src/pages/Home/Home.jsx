import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeTopBar } from "./Home.styles";
import { NavBar } from "./NavBar/NavBar";
import { SearchBar } from "./SearchBar/SearchBar";
import { Default } from "./Default/Default";
import { RecipeResults } from "./RecipeResults/RecipeResults";


export const Home = () => {
  

  return (
    <>
      <BrowserRouter>
        <HomeTopBar>
          <NavBar />
          <SearchBar />
        </HomeTopBar>

        <Routes>
          <Route path="/" element={<Default />} />
          <Route path="/home" element={<Default />} />
          <Route path="/results" element={<RecipeResults />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
