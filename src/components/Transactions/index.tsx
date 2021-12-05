import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function Transactions() {
    const transactions = useContext(TransactionsContext);

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
