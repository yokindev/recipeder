import { useNavigate } from "react-router-dom";
import {
  ResultCard,
  ResultEnergy,
  ResultImage,
  ResultInfo,
  ResultIngredients,
  ResultName,
  ResultsContainer,
} from "./Results.styles";

export const Results = ({ data, setId }) => {
  const navigate = useNavigate();

  if (data) {
    console.log(data);
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
            <ResultInfo>
              <ResultEnergy>{option.recipe.totalNutrients.ENERC_KCAL.quantity}</ResultEnergy>
              <ResultIngredients>{(option.recipe.ingredientLines).length}</ResultIngredients>
            </ResultInfo>
          </ResultCard>
        ))}
      </ResultsContainer>
    );
  }
};
