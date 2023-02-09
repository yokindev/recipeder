import useFetch from "../../../hooks/useFetch";
import { Card, DefaultContainer, Image, Name } from "./Default.styles";

export const Default = () => {
  const defaultRecipes = useFetch(
    `${process.env.REACT_APP_API_URL}?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&diet=balanced&random=true`
  );

  const { result } = defaultRecipes;

  if (result) {
    const { hits } = result;
    console.log(hits)
    return (
        <DefaultContainer>
            {hits.map((option, index) => (
                <Card key={index}>
                    <Image src={option.recipe.image} alt="image"/>
                    <Name>{option.recipe.label}</Name>
                </Card>
            ))}
        </DefaultContainer>
    ) 
    
    
  }
};
