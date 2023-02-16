import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ResultCard,
  ResultImage,
  ResultName,
  ResultsContainer,
} from "./Results.styles";

export const Results = ({ url, setId }) => {
  const [data, setData] = useState(null);

  const navigate = useNavigate();

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
          <ResultCard
            key={index}
            onClick={() => {
              setId(option._links.self.href);
              navigate("/recipe");
            }}
          >
            <ResultImage src={option.recipe.image} alt="ImageRecipe" />
            <ResultName>{option.recipe.label}</ResultName>
          </ResultCard>
        ))}
      </ResultsContainer>
    );
  }
};
