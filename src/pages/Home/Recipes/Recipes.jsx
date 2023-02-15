import { useEffect } from "react";
import { useState } from "react";
import {
  RecipeCard,
  RecipeImage,
  RecipeName,
  RecipesContainer,
} from "./Recipes.styles";

export const Recipes = ({ url }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json.hits);
      } catch (error) {
        console.log(error);
      }

      return { data };
    };
    fetchData();
  }, [url]);

  console.log(data);

  if (data) {
    return (
      <RecipesContainer>
        {data.map((option, index) => (
          <RecipeCard key={index}>
            <RecipeImage src={option.recipe.image} alt="image" />
            <RecipeName>{option.recipe.label}</RecipeName>
          </RecipeCard>
        ))}
      </RecipesContainer>
    );
  }
};
