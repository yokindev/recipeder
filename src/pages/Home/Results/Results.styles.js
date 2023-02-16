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
  cursor: pointer;
`;

export const ResultImage = styled.img`
  border-radius: 20px;
`;

export const ResultName = styled.span`
  max-width: 250px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;