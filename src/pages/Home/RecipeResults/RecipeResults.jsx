import useFetch from "../../../hooks/useFetch";
import { RecipeCard, RecipeImage, RecipeName, RecipesContainer } from "../../../styles/Recipes.styles";

export const RecipeResults = () => {
  const target = localStorage.getItem("Target");

  const recipes = useFetch(
    `${process.env.REACT_APP_API_URL}?type=public&q=${target}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&random=true`
  );
  
  const { result } = recipes;

  if (result) {
    const { hits } = result;
    console.log(hits)
    return (
        <RecipesContainer>
            {hits.map((option, index) => (
                <RecipeCard key={index}>
                    <RecipeImage src={option.recipe.image} alt="image"/>
                    <RecipeName>{option.recipe.label}</RecipeName>
                </RecipeCard>
            ))}
        </RecipesContainer>
    ) 
    
    
  }
};
