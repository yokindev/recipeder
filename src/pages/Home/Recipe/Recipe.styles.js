import styled from "styled-components";

export const RecipeContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 20px 50px 20px;
`;

export const RecipeCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  max-width: 1000px;
  border: 2px solid #34a0a4;
  border-radius: 20px;
  padding: 10px;
  background-color: #f0f0f0;
`;

export const RecipeContent = styled.div`
  display: flex;
  gap: 50px;
`;

export const RecipeInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RecipeName = styled.h1`
  margin: 0;
  font-size: 45px;
  font-weight: bold;
`;

export const RecipeImage = styled.img`
  max-width: 500px;
  width: 100%;
  border-radius: 20px;
`;

export const RecipeSubName = styled.h3`
  margin: 0;
  margin-left: 20px;
  margin-bottom: 20px;
`;

export const RecipeIngredientsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const RecipeIngredient = styled.li`
  margin-left: 20px;
  margin-bottom: 20px;
  text-indent: -0.7em;
  ::before {
    content: "• ";
    font-size: 25px;
    font-weight: bold;
    color: #76c893;
  }
`;

export const RecipeButton = styled.button`
  width: 100%;
  max-width: 100px;
  padding: 10px;
  border: none;
  border-radius: 15px;
  font-weight: bold;
  font-size: 20px;
  background: #76c893;
  color: white;
  cursor: pointer;
`;
