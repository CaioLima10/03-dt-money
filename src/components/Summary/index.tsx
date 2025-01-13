import { SummaryCard, SummaryContainer } from "./styles";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entrada</span>
          <FaRegArrowAltCircleUp size={32} color="#00875F" />
        </header>

        <strong>R$ 1.125,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saida</span>
          <FaRegArrowAltCircleDown size={32} color="#AB322E" />
        </header>

        <strong>R$ 1.125,00</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <MdAttachMoney size={32} color="#E1E1E6" />
        </header>

        <strong>R$ 1.125,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
