import styled from "styled-components";

export const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  padding: 20px;
`;

export const ResultCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  max-width: 300px;
  width: 100%;
  border: 2px solid #34a0a4;
  border-radius: 20px;
  padding: 5px;
  background-color: #efefef;
  cursor: pointer;
`;

export const ResultImage = styled.img`
  max-width: 300px;
  width: 100%;
  border-radius: 20px 20px 0px 0px;
`;

export const ResultName = styled.span`
  max-width: 250px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;

export const ResultInfo = styled.div``;

export const ResultEnergy= styled.p``;

export const ResultIngredients = styled.p``;


