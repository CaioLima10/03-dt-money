import styled from "styled-components";

export const SearchFormContainer = styled.form`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  gap: 1rem;

  input{
    flex: 1;
    padding: 1rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme["gray-900"]};
    border: 0;
  }
  
  button{
    border: 0;
    border: 1px solid ${(props) => props.theme["green-300"]};
    background-color: transparent;
    color: ${(props) => props.theme["green-500"]};

    display: flex;
    align-items: center;
    gap: 0.5rem;

    border-radius: 6px;
    padding: 1rem;

    transition: 0.4s all ease-in-out;

    &:hover{
      border-color: ${(props) => props.theme["green-300"]};
      background-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme["white"]};
      cursor: pointer;
    }
  }
`