import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  

`

export const NewTransactionButton = styled.button`
  height: 50px;

  border: 0;
  border-radius: 6px;
  
  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["gray-100"]};

  font-weight: bold;
  font-size: 0.8rem;

  padding: 0 1.125rem;
  cursor: pointer;

  transition: background-color 0.2s ;

  &:hover{
    background-color: ${(props) => props.theme["green-700"]};
  }

`