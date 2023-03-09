import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Results } from "./Results/Results";

export const Type = () => {
  const { state } = useLocation();
  const { link } = state;

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&cuisineType=${link}`
        );
        const json = await res.json();
        setData(json.hits);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [link]);

  return <Results data={data} />;
};
