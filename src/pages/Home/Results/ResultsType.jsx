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

export const ResultsType = ({ typeData }) => {
  const navigate = useNavigate();

  if (typeData) {
    return (
      <ResultsDiv>
        <ResultsContainer>
          {typeData.map((option, index) => (
            <ResultCard
              key={index}
              onClick={() => {
                navigate(`../recipe/${option.recipe.label}`, {
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
