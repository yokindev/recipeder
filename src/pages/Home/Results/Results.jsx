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

export const Results = ({ data, setId }) => {
  if (data) {
    return (
      <ResultsDiv>
        <ResultsContainer>
          {data.map((option, index) => (
            <ResultCard
              key={index}
              onClick={() => {
                setId(option);
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
