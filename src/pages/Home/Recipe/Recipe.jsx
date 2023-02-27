import {
  RecipeButton,
  RecipeCard,
  RecipeContainer,
  RecipeMainDiv,
  RecipeDiv,
  RecipeImage,
  RecipeInfo,
  RecipeInfoData,
  RecipeInfoSection,
  RecipeInfoText,
  RecipeIngredient,
  RecipeList,
  RecipeName,
  RecipeNutrient,
  RecipeSubName,
  RecipeWrapper,
  RecipeIcon,
  RecipeIconServings,
  RecipeIconCalories,
  RecipeIconExclamation,
  RecipeButtons,
  RecipeButton2,
} from "./Recipe.styles";

export const Recipe = ({ id, setId }) => {
  const { recipe } = id;
  const { ingredients, totalNutrients } = recipe;

  if (id) {
    console.log(id);
    return (
      <RecipeContainer>
        <RecipeCard>
          <RecipeWrapper>
            <RecipeImage src={recipe.image} alt="ImageRecipe" />
            <RecipeMainDiv>
              <RecipeName>{recipe.label}</RecipeName>
              <RecipeInfo>
                <RecipeInfoSection>
                  <RecipeIconServings />
                  <RecipeInfoData>{recipe.yield} Servings</RecipeInfoData>
                </RecipeInfoSection>
                <RecipeInfoSection>
                  <RecipeIconCalories />
                  <RecipeInfoData>
                    {Math.round(recipe.calories / recipe.yield)} Calories per
                    serve
                  </RecipeInfoData>
                </RecipeInfoSection>
                <RecipeInfoSection>
                  <RecipeIconExclamation />
                  <RecipeInfoData>Health labels:</RecipeInfoData>
                  <RecipeInfoText>
                    {recipe.healthLabels.join(", ")}
                  </RecipeInfoText>
                </RecipeInfoSection>
              </RecipeInfo>
              <RecipeButtons>
                <RecipeButton
                  href={recipe.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instructions
                </RecipeButton>
                <RecipeButton2 onClick={() => setId(null)}>Back</RecipeButton2>
              </RecipeButtons>
            </RecipeMainDiv>
          </RecipeWrapper>
          <RecipeWrapper>
            <RecipeDiv>
              <RecipeSubName>INGREDIENTS: </RecipeSubName>
              <RecipeList>
                {ingredients.map((ingredient, index) => (
                  <RecipeIngredient key={index}>
                    {ingredient.text}
                  </RecipeIngredient>
                ))}
              </RecipeList>
            </RecipeDiv>
            <RecipeDiv>
              <RecipeSubName>NUTRIENTS: </RecipeSubName>
              <RecipeList>
                {Object.entries(totalNutrients).map(([key, nutrient]) => (
                  <RecipeNutrient key={key}>
                    {nutrient.label}
                    <span>
                      {Math.round(nutrient.quantity)} {nutrient.unit}
                    </span>
                  </RecipeNutrient>
                ))}
              </RecipeList>
            </RecipeDiv>
          </RecipeWrapper>
          <RecipeIcon
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </RecipeCard>
      </RecipeContainer>
    );
  }
};
