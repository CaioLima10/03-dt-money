import { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

interface TransactionProps {
  id: number;
  description: string;
  category: string;
  type: "income" | "outcome";
  price: string;
  createdAt: string;
}

export function Transactions() {
  const [transations, setTransations] = useState<TransactionProps[]>([]);

  async function fetchTransaction() {
    const response = await fetch("http://localhost:3333/transactions");
    const data = await response.json();

    setTransations(data);
  }

  useEffect(() => {
    fetchTransaction();
  }, []);

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transations.map((trasaction) => (
              <tr key={trasaction.id}>
                <td width="50%">{trasaction.description}</td>
                <td>
                  <PriceHighLight variant={trasaction.type}>
                    {trasaction.price}
                  </PriceHighLight>
                </td>
                <td>{trasaction.category}</td>
                <td>{trasaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
