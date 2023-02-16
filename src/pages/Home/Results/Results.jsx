import { useEffect } from "react";
import { useState } from "react";
import {
  ResultCard,
  ResultImage,
  ResultName,
  ResultsContainer,
} from "./Results.styles";

export const Results = ({ url }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json.hits);
      } catch (error) {
        console.log(error);
      }

      return { data };
    };
    fetchData();
  }, [url]);

  console.log(data);

  if (data) {
    return (
      <ResultsContainer>
        {data.map((option, index) => (
          <ResultCard key={index}>
            <ResultImage src={option.recipe.image} alt="ImageRecipe" />
            <ResultName>{option.recipe.label}</ResultName>
          </ResultCard>
        ))}
      </ResultsContainer>
    );
  }
};
