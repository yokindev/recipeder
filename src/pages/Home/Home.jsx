import { HomeBadge, HomeFooter, HomeTopBar } from "./Home.styles";
import { NavBar } from "./NavBar/NavBar";
import { Results } from "./Results/Results";
import { Recipe } from "./Recipe/Recipe";
import { useState, useEffect } from "react";

export const Home = ({user}) => {
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
      <HomeTopBar>
        <NavBar user={user} setData={setData} setId={setId} />
      </HomeTopBar>

      {id ? (
        <Recipe id={id} setId={setId} />
      ) : (
        <Results data={data} setId={setId} />
      )}

      <HomeFooter>
        <HomeBadge />
      </HomeFooter>
    </>
  );
};
