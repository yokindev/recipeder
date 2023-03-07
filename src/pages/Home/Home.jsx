import { HomeBadge, HomeFooter, HomeTopBar } from "./Home.styles";
import { NavBar } from "./NavBar/NavBar";
import { Results } from "./Results/Results";
import { getAuth } from "firebase/auth";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

export const Home = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const [data, setData] = useState(null);

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

  if (user) {
    return (
      <>
        <HomeTopBar>
          <NavBar user={user} />
        </HomeTopBar>

        <Routes>
          <Route path="/" element={<Results data={data} />} />
        </Routes>

        <HomeFooter>
          <HomeBadge />
        </HomeFooter>
      </>
    );
  }
};
