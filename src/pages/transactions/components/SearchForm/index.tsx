import { FaSearch } from "react-icons/fa";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por transações..." />
      <button type="submit">
        <FaSearch size={18} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
