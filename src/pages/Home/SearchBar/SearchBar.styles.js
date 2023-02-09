import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 20px;
  background-color: white;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border: 3px solid #34a0a4;
  border-radius: 50px;
  padding: 15px;
`;

export const SearchBarInput = styled.input`
  width: 100%;
  border: none;
  font-weight: 900;
  font-size: 20px;
  outline: none;
`;

export const SearchBarButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const SearchBarIcon = styled.img`
  width: 25px;
`;
