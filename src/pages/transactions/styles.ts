import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;  
  max-width: 1120px;

  margin: 1rem auto 0; 

  padding: 0 1.5rem ;

  margin-top: 4rem;
  
  `

export const TransactionsTable = styled.table`
  width: 100%;

  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1rem;


  td{
    padding: 1.5rem 2rem;
    background-color: ${(props) => props.theme["gray-700"]} ;

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child{
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`
interface PriceHighLightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${(props) => props.variant === 'income' ? props.theme["green-500"] : props.theme["red-500"]}
`