import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeTopBar } from "./Home.styles";
import { NavBar } from "./NavBar/NavBar";
import { SearchBar } from "./SearchBar/SearchBar";
import { Results } from "./Results/Results";
import { useEffect, useState } from "react";
import { Recipe } from "./Recipe/Recipe";

export const Home = () => {
  const [data, setData] = useState(null);
  const [id, setId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&diet=balanced`
        );
        const json = await res.json();
        setData(json.hits);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <BrowserRouter>
        <HomeTopBar>
          <NavBar setData={setData} />
          <SearchBar setData={setData} />
        </HomeTopBar>

        <Routes>
          <Route path="/" element={<Results data={data} setId={setId} />} />
          <Route path="/home" element={<Results data={data} setId={setId} />} />
          <Route path="/recipe" element={<Recipe id={id} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
