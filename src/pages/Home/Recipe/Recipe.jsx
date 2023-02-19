import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  RecipeButton,
  RecipeContainer,
  RecipeImage,
  RecipeInfo,
  RecipeIngredient,
  RecipeIngredientsList,
  RecipeName,
} from "./Recipe.styles";

export const Recipe = ({ id }) => {
  const [data, setData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(id);
        const json = await res.json();
        setData(json.recipe);
      } catch (error) {
        console.log(error);
      }

      return { data };
    };
    fetchData();
  }, [id]);

  if (data) {
    const { ingredients } = data;
    console.log(ingredients);
    return (
      <RecipeContainer>
        <RecipeName>{data.label}</RecipeName>
        <RecipeImage src={data.image} alt="ImageRecipe" />
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
  }
};
