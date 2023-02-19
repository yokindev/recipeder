import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeTopBar } from "./Home.styles";
import { NavBar } from "./NavBar/NavBar";
import { SearchBar } from "./SearchBar/SearchBar";
import { Results } from "./Results/Results";
import { useState } from "react";
import { Recipe } from "./Recipe/Recipe";

export const Home = () => {
  const [url, setUrl] = useState(
    `${process.env.REACT_APP_API_URL}?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&diet=balanced`
  );

  const [id, setId] = useState("");

  return (
    <>
      <BrowserRouter>
        <HomeTopBar>
          <NavBar setUrl={setUrl} />
          <SearchBar setUrl={setUrl} />
        </HomeTopBar>

        <Routes>
          <Route path="/" element={<Results url={url} setId={setId} />} />
          <Route path="/home" element={<Results url={url} setId={setId} />} />
          <Route path="/recipe" element={<Recipe id={id} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
