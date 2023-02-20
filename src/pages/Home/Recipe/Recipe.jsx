import {
  RecipeButton,
  RecipeCard,
  RecipeContainer,
  RecipeContent,
  RecipeImage,
  RecipeInfo,
  RecipeIngredient,
  RecipeIngredientsList,
  RecipeName,
  RecipeSubName,
} from "./Recipe.styles";
import { useNavigate } from "react-router-dom";

export const Recipe = ({ id }) => {
  const navigate = useNavigate();

  const { recipe } = id;
  const { ingredients } = recipe;

  return (
    <RecipeContainer>
      <RecipeCard>
        <RecipeContent>
          <RecipeImage src={recipe.image} alt="ImageRecipe" />
          <RecipeInfo>
            <RecipeName>{recipe.label}</RecipeName>
          </RecipeInfo>
        </RecipeContent>
        <RecipeInfo>
          <RecipeSubName>INGREDIENTS: </RecipeSubName>
          <RecipeIngredientsList>
            {ingredients.map((ingredient, index) => (
              <RecipeIngredient key={index}>{ingredient.text}</RecipeIngredient>
            ))}
          </RecipeIngredientsList>
        </RecipeInfo>

        <RecipeButton onClick={() => navigate("/")}>Back</RecipeButton>
      </RecipeCard>
    </RecipeContainer>
  );
};
