import styled from "styled-components";
import { ReactComponent as IconServings } from "../../../assets/svg/servings.svg";
import { ReactComponent as IconCalories } from "../../../assets/svg/calories.svg";
import { ReactComponent as IconExclamation } from "../../../assets/svg/exclamation.svg";
import { ReactComponent as IconUp } from "../../../assets/svg/up.svg";

export const RecipeContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 20px 50px 20px;
`;

export const RecipeCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  // width: 100%;
  max-width: 1000px;
  border: 2px solid #34a0a4;
  border-radius: 20px;
  padding: 40px;
  background-color: #f0f0f0;
`;

export const RecipeWrapper = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const RecipeImage = styled.img`
  max-width: 500px;
  width: 100%;
  border-radius: 20px;
`;

export const RecipeMainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 30px;
  max-width: 500px;
  width: 100%;
`;

export const RecipeDiv = styled.div`
  display: flex;
  gap: 25px;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
`;

export const RecipeName = styled.h1`
  margin: 0;
  font-size: 35px;
  font-weight: bold;
`;

export const RecipeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RecipeInfoSection = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
`;

export const RecipeIconServings = styled(IconServings)`
  width: 20px;
  height: 20px;
  fill: #76c893;
`;

export const RecipeIconCalories = styled(IconCalories)`
  width: 20px;
  height: 20px;
  fill: #76c893;
`;

export const RecipeIconExclamation = styled(IconExclamation)`
  width: 20px;
  height: 20px;
  fill: #76c893;
`;

export const RecipeInfoData = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const RecipeInfoText = styled.p`
  margin: 0;
  line-height: 25px;
`;

export const RecipeSubName = styled.h3`
  margin: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #34a0a4;
`;

export const RecipeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const RecipeIngredient = styled.li`
  margin: 0;
  margin-left: 20px;
  margin-bottom: 20px;
  text-indent: -20px;
  ::before {
    content: "• ";
    font-size: 25px;
    font-weight: bold;
    color: #76c893;
  }
`;

export const RecipeNutrient = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const RecipeButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const RecipeButton = styled.a`
  width: 100%;
  max-width: 150px;
  padding: 10px;
  border: none;
  border-radius: 15px;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  background: #76c893;
  color: white;
  cursor: pointer;

  &:hover {
    background: #168aad;
  }
`;

export const RecipeButton2 = styled.a`
  width: 100%;
  max-width: 150px;
  padding: 10px;
  border: none;
  border-radius: 15px;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  background: #34a0a4;
  color: white;
  cursor: pointer;

  &:hover {
    background: #168aad;
  }
`;



export const RecipeIcon = styled(IconUp)`
  width: 40px;
  height: 40px;
  fill: #34a0a4;
  align-self: center;
  cursor: pointer;

  &:hover {
    fill: #168aad;
  }
`;
