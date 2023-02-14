import { useState } from "react";
import {
  RecipeCard,
  RecipeImage,
  RecipeName,
  RecipesContainer,
} from "../../../styles/Recipes.styles";

export const Default = () => {
  const [data, setData] = useState(null);
  const url = `${process.env.REACT_APP_API_URL}?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&diet=balanced&random=true`;

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      setData(json.hits);
      // setLoading(false);
    } catch (error) {
      // setLoading(false);
      console.log(error);
    }
    return { data };
  };

  if (data) {
    fetchData();
    console.log(data);

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
