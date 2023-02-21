import {
  RecipeButton,
  RecipeCard,
  RecipeContainer,
  RecipeDiv,
  RecipeImage,
  RecipeInfo,
  RecipeInfoData,
  RecipeInfoIcon,
  RecipeInfoName,
  RecipeInfoSection,
  RecipeIngredient,
  RecipeList,
  RecipeName,
  RecipeNutrient,
  RecipeSubName,
  RecipeWrapper,
} from "./Recipe.styles";
import IconServings from "../../../assets/svg/servings.svg";
import IconCalories from "../../../assets/svg/calories.svg";
import IconExclamation from "../../../assets/svg/exclamation.svg";
import { useNavigate } from "react-router-dom";

export const Recipe = ({ id }) => {
  const navigate = useNavigate();

  const { recipe } = id;
  const { ingredients, totalNutrients } = recipe;

  return (
    <RecipeContainer>
      <RecipeCard>
        <RecipeWrapper>
          <RecipeImage src={recipe.image} alt="ImageRecipe" />
          <RecipeDiv>
            <RecipeName>{recipe.label}</RecipeName>
            <RecipeInfo>
              <RecipeInfoSection>
                <RecipeInfoIcon src={IconServings} />
                <RecipeInfoData>{recipe.yield}</RecipeInfoData>
                <RecipeInfoName>Servings</RecipeInfoName>
              </RecipeInfoSection>
              <RecipeInfoSection>
                <RecipeInfoIcon src={IconCalories} />
                <RecipeInfoData>
                  {Math.round(recipe.calories / recipe.yield)}
                </RecipeInfoData>
                <RecipeInfoName>Calories per serve</RecipeInfoName>
              </RecipeInfoSection>
              <RecipeInfoSection>
                <RecipeInfoIcon src={IconExclamation} />
                <RecipeInfoData>Health labels:</RecipeInfoData>
                <RecipeInfoName>
                  {recipe.healthLabels.join(", ")}
                </RecipeInfoName>
              </RecipeInfoSection>
            </RecipeInfo>
          </RecipeDiv>
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

        <RecipeButton onClick={() => navigate("/")}>Back</RecipeButton>
      </RecipeCard>
    </RecipeContainer>
  );
};
