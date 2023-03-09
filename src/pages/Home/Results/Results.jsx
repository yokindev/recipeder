import { useNavigate } from "react-router-dom";
import {
  ResultCard,
  ResultImage,
  ResultInfo,
  ResultName,
  ResultsContainer,
  ResultSubName,
  ResultData,
  ResultsDiv,
  ResultIcon,
} from "./Results.styles";

export const Results = ({ data }) => {
  const navigate = useNavigate();

  if (data) {
    return (
      <ResultsDiv>
        <ResultsContainer>
          {data.map((option, index) => (
            <ResultCard
              key={index}
              onClick={() => {
                console.log(option);
                navigate(`${option.recipe.label}`, {
                  state: { option },
                });
                window.scrollTo({ top: 0 });
              }}
            >
              <ResultImage src={option.recipe.image} alt="ImageRecipe" />
              <ResultName>{option.recipe.label}</ResultName>
              <ResultInfo>
                <ResultSubName>
                  <ResultData>
                    {Math.round(
                      option.recipe.totalNutrients.ENERC_KCAL.quantity
                    )}
                  </ResultData>{" "}
                  CALORIES
                </ResultSubName>
                <ResultSubName>
                  <ResultData>
                    {option.recipe.ingredientLines.length}
                  </ResultData>{" "}
                  INGREDIENTS
                </ResultSubName>
              </ResultInfo>
            </ResultCard>
          ))}
        </ResultsContainer>
        <ResultIcon
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </ResultsDiv>
    );
  }
};
