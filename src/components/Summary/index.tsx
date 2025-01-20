import { SummaryCard, SummaryContainer } from "./styles";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {
  const { income, outcome, total } = useSummary();

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entrada</span>
          <FaRegArrowAltCircleUp size={32} color="#00875F" />
        </header>

        <strong>{priceFormatter.format(income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saida</span>
          <FaRegArrowAltCircleDown size={32} color="#AB322E" />
        </header>

        <strong>{priceFormatter.format(outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <MdAttachMoney size={32} color="#E1E1E6" />
        </header>

        <strong>{priceFormatter.format(total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
