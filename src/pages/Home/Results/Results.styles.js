import styled from "styled-components";

export const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  padding: 50px 20px 50px 20px;
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
  background-color: #f0f0f0;
  cursor: pointer;
`;

export const ResultImage = styled.img`
  max-width: 300px;
  width: 100%;
  border-radius: 18px 18px 0px 0px;
`;

export const ResultName = styled.span`
  display: flex;
  align-items: flex-start;
  max-width: 250px;
  height: 50px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;

export const ResultInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 280px;
  width: 100%;
  border-top: 1px solid #34a0a4;
`;

export const ResultSubName = styled.p`
  font-size: 14px;
`;

export const ResultData = styled.span`
  font-weight: bold;
  color: #52b69a;
`;
