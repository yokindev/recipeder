import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0px 20px 0px 20px;
  border-bottom: 1px solid #34a0a4;
  background: white;
`;

export const SearchBarForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  border: 3px solid #34a0a4;
  border-radius: 20px;
  padding: 10px 20px 10px 20px;
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
