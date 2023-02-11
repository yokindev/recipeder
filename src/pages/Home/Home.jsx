import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeTopBar } from "./Home.styles";
import { NavBar } from "./NavBar/NavBar";
import { SearchBar } from "./SearchBar/SearchBar";
import { Default } from "./Default/Default";
import { RecipeResults } from "./RecipeResults/RecipeResults";
import { useState } from "react";

export const Home = () => {
  const [target, setTarget] = useState("");

  return (
    <>
      <BrowserRouter>
        <HomeTopBar>
          <NavBar />
          <SearchBar target={target} setTarget={setTarget} />
        </HomeTopBar>

        <Routes>
          <Route path="/" element={<Default />} />
          <Route path="/home" element={<Default />} />
          <Route path="/results" element={<RecipeResults target={target} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
