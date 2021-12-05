import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function Transactions() {
    const data = useContext(TransactionsContext);

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get("/transactions").then((response) =>
            setTransactions(response.data.transactions)
        );
    }, []);

    return (
        <Container>
            <table className="table table-light rounded">
                <thead>
                    <tr className="table-light">
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id} className="table-light">
                            <td className="table-light">{transaction.title}</td>
                            <td
                                className={`table-light ${
                                    transaction.type === "income"
                                        ? "text-success"
                                        : "text-danger"
                                }`}
                            >
                                {new Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                }).format(transaction.amount)}
                            </td>
                            <td className="table-light">
                                {transaction.category}
                            </td>
                            <td className="table-light">
                                {new Intl.DateTimeFormat("pt-BR").format(
                                    new Date(transaction.createdAt)
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}
