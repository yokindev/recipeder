import { HomeBadge, HomeFooter, HomeTopBar } from "./Home.styles";
import Badge from "../../assets/svg/badge.svg";
import { NavBar } from "./NavBar/NavBar";
import { Results } from "./Results/Results";
import { Recipe } from "./Recipe/Recipe";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Home = () => {
  const [data, setData] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&cuisineType=indian&random=true`
        );
        const json = await res.json();
        setData(json.hits);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <HomeTopBar>
          <NavBar setData={setData} />
        </HomeTopBar>

        <Routes>
          <Route path="/" element={<Results data={data} setId={setId} />} />
          <Route path="/home" element={<Results data={data} setId={setId} />} />
          <Route path="/recipe" element={<Recipe id={id} />} />
        </Routes>

        <HomeFooter>
          <HomeBadge src={Badge} />
        </HomeFooter>
      </BrowserRouter>
    </>
  );
};
