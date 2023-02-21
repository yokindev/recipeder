import { useNavigate } from "react-router-dom";
import {
  ResultCard,
  ResultImage,
  ResultInfo,
  ResultName,
  ResultsContainer,
  ResultSubName,
  ResultData,
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
              window.scrollTo({ top: 0 });
            }}
          >
            <ResultImage src={option.recipe.image} alt="ImageRecipe" />
            <ResultName>{option.recipe.label}</ResultName>
            <ResultInfo>
              <ResultSubName>
                <ResultData>
                  {Math.round(option.recipe.totalNutrients.ENERC_KCAL.quantity)}
                </ResultData>{" "}
                CALORIES
              </ResultSubName>
              <ResultSubName>
                <ResultData>{option.recipe.ingredientLines.length}</ResultData>{" "}
                INGREDIENTS
              </ResultSubName>
            </ResultInfo>
          </ResultCard>
        ))}
      </ResultsContainer>
    );
  }
};
