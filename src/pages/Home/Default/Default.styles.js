import styled from "styled-components";

export const DefaultContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  padding: 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  max-width: 300px;
  width: 100%;
`;

export const Image = styled.img`
  border-radius: 10px;
`;

export const Name = styled.span`
  max-width: 250px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;
