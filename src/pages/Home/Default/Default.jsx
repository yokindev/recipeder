import useFetch from "../../../hooks/useFetch";

export const Default = () => {
  const defaultRecipes = useFetch(
    `${process.env.REACT_APP_API_URL}?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&diet=balanced&random=true`
  );

  const { result } = defaultRecipes;

  if (result) {
    const { hits } = result;
    return hits.map((option, index) => console.log(option.recipe.label));
  }
};
