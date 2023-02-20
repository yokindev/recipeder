import {
  RecipeButton,
  RecipeContainer,
  RecipeImage,
  RecipeInfo,
  RecipeIngredient,
  RecipeIngredientsList,
  RecipeName,
} from "./Recipe.styles";
import { useNavigate } from "react-router-dom";

export const Recipe = ({ id }) => {
  const navigate = useNavigate();

  const { recipe } = id;
  const { ingredients } = recipe;

  return (
    <RecipeContainer>
      <RecipeName>{recipe.label}</RecipeName>
      <RecipeImage src={recipe.image} alt="ImageRecipe" />
      <RecipeInfo>
        <RecipeIngredientsList>
          {ingredients.map((ingredient, index) => (
            <RecipeIngredient key={index}>{ingredient.text}</RecipeIngredient>
          ))}
        </RecipeIngredientsList>
      </RecipeInfo>
      <RecipeButton onClick={() => navigate("/")}>Back</RecipeButton>
    </RecipeContainer>
  );
};
