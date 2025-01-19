import { createContext, ReactNode, useEffect, useState } from "react";

interface TransactionProps {
  id: number;
  description: string;
  category: string;
  type: "income" | "outcome";
  price: number;
  createdAt: string;
}

interface TransactionsContextType {
  transactions: TransactionProps[];
}

interface TransactionsProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  async function fetchTransaction() {
    const response = await fetch("http://localhost:3333/transactions");
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    fetchTransaction();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
