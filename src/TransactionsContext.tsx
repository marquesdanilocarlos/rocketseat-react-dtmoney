import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

//type newTransaction = Pick<Transaction, "title" | "amount" | "type" | "category">;
type newTransaction = Omit<Transaction, "id" | "createdAt">;

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionContextData {
    transactions: Transaction[];
    createNewTransaction: (transaction: newTransaction) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionContextData>(
    {} as TransactionContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    async function createNewTransaction(transaction: newTransaction) {
        const response = await api.post("/transactions", transaction);
        let newTransaction = response.data.transaction;
        newTransaction = { ...newTransaction, createdAt: new Date() };
        setTransactions([...transactions, newTransaction]);
    }

    useEffect(() => {
        api.get("/transactions").then((response) =>
            setTransactions(response.data.transactions)
        );
    }, []);

    return (
        <TransactionsContext.Provider
            value={{ transactions, createNewTransaction }}
        >
            {children}
        </TransactionsContext.Provider>
    );
}
