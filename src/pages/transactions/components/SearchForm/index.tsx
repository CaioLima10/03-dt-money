import { FaSearch } from "react-icons/fa";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../../../context/transactionsContext";

const searchFormSchema = z.object({
  query: z.string(),
});

type searchFormInput = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<searchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: searchFormInput) {
    await fetchTransactions(data.query);
    console.log(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações..."
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <FaSearch size={18} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
