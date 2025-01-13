import LogoIgniteMoney from "../../assets/Logo.svg";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoIgniteMoney} alt="" />

        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
