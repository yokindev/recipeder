import { useFetch } from "../../../hooks/useFetch";
import {
  RecipeCard,
  RecipeImage,
  RecipeName,
  RecipesContainer,
} from "../../../styles/Recipes.styles";

export const Default = () => {
  const recipes = useFetch(
    `${process.env.REACT_APP_API_URL}?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&diet=balanced&random=true`
  );

  const { data } = recipes;

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
