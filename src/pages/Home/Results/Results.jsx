import { useNavigate } from "react-router-dom";
import {
  ResultCard,
  ResultImage,
  ResultName,
  ResultsContainer,
} from "./Results.styles";

export const Results = ({ data, setId }) => {
  const navigate = useNavigate();

  if (data) {
    return (
      <ResultsContainer>
        {data.map((option, index) => (
          <ResultCard
            key={index}
            onClick={() => {
              setId(option);
              console.log(option);
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
