import * as  Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group"

export const Close = styled(Dialog.Close)`
  position: absolute;
  right: 1rem;
  top: 1rem;

  font-size: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme["gray-500"]};
  background-color: transparent;
  border: 0;

  cursor: pointer;

`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100%;
  height: 100vh;
  inset: 0;
  background-color:rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  padding: 2.5rem 3rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["gray-800"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

    form{
      margin-top: 2rem;
      
      display: flex;
      flex-direction: column;
      gap: 1rem;

      input{
        border-radius: 6px;
        border: 0;

        padding: 1rem;

        background-color: ${(props) => props.theme["gray-900"]};
        color: ${(props) => props.theme["gray-300"]};
        
        ::placeholder{
          color: ${(props) => props.theme["gray-500"]};
        }
      }

      button[type="submit"]{

        border: 0;
        border-radius: 6px;
        margin-top: 1rem;
        padding: 1rem;

        font-weight: bold;

        background-color: ${(props) => props.theme["green-500"]};
        color: ${(props) => props.theme["gray-100"]};

        transition: all 0.4s ease-in-out;

        &:disabled {
          background-color: ${(props) => props.theme["gray-600"]};
          cursor: not-allowed;
        }
        
        &:not(:disabled):hover{
          background-color: ${(props) => props.theme["green-700"]};
          cursor: pointer;
        }
      }
    }
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | "outcome"
}

export const TransactionTypeButton = styled(RadioGroup.Item) <TransactionTypeButtonProps>`
    background-color: ${(props) => props.theme["gray-700"]};
    color: ${(props) => props.theme["gray-300"]};

    border: 0;
    padding: 1rem;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1rem;

    cursor: pointer;

    svg{
      color: ${(props) => props.variant === "income" ? props.theme["green-500"] : props.theme["red-500"]}
    }

    &[data-state="unchecked"]:hover {
      background: ${(props) => props.theme["gray-600"]};
    }

    &[data-state="checked"] {
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.variant === "income" ? props.theme["green-500"] : props.theme["red-500"]};
      
      svg{
        color: ${(props) => props.theme.white};
      }
    }
`