import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeTopBar } from "./Home.styles";
import { NavBar } from "./NavBar/NavBar";
import { SearchBar } from "./SearchBar/SearchBar";
import { Recipes } from "./Recipes/Recipes";
import { useState } from "react";

export const Home = () => {
  const [url, setUrl] = useState(
    `${process.env.REACT_APP_API_URL}?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&diet=balanced&random=true`
  );
  return (
    <>
      <BrowserRouter>
        <HomeTopBar>
          <NavBar setUrl={setUrl}/>
          <SearchBar setUrl={setUrl}/>
        </HomeTopBar>

        <Routes>
          <Route path="/" element={<Recipes url={url}/>} />
          <Route path="/home" element={<Recipes url={url}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
