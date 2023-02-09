import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar/NavBar";
import { SearchBar } from "./SearchBar/SearchBar";
import { Default } from "./Default/Default";
import { TopBar } from "./Home.styles";
import { RecipeResults } from "./RecipeResults/RecipeResults";

export const Home = () => {
  return (
    <>
      <BrowserRouter>
        <TopBar>
          <NavBar />
          <SearchBar />
        </TopBar>

        <Routes>
          <Route path="/" element={<Default />} />
          <Route path="/home" element={<Default />} />
          <Route path="/results" element={<RecipeResults />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
