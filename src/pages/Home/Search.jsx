import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Results } from "./Results/Results";

export const Search = () => {
  const { state } = useLocation();
  const { query } = state;

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}?type=public&q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
        );
        const json = await res.json();
        setData(json.hits);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [query]);

  return <Results data={data} />;
};
