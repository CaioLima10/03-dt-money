import * as Dialog from "@radix-ui/react-dialog";
import {
  Close,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import { IoMdClose } from "react-icons/io";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from "react-icons/fa";

export function NewTransactionsModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <Close>
          <IoMdClose />
        </Close>

        <form>
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              <FaRegArrowAltCircleUp size={24} />
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcome" value="outcome">
              <FaRegArrowAltCircleDown size={24} />
              Saida
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
