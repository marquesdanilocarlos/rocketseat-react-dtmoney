import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";
import { useContext } from "react";

export function Summary() {
    const { transactions } = useContext(TransactionsContext);

    const summary = transactions.reduce(
        (accumulator, transaction) => {
            if (transaction.type === "income") {
                accumulator.incomes += transaction.amount;
                accumulator.total += transaction.amount;
            }

            if (transaction.type === "outcome") {
                accumulator.outcomes += transaction.amount;
                accumulator.total -= transaction.amount;
            }

            return accumulator;
        },
        {
            incomes: 0,
            outcomes: 0,
            total: 0,
        }
    );

    return (
        <Container>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <header>
                                <h5>Entradas</h5>
                                <img src={incomeImg} alt="Entradas" />
                            </header>
                            <strong>
                                {new Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                }).format(summary.incomes)}
                            </strong>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <header>
                                <h5>Saídas</h5>
                                <img src={outcomeImg} alt="Saídas" />
                            </header>
                            <strong>
                                {new Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                }).format(summary.outcomes)}
                            </strong>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card bg-success text-white">
                        <div className="card-body">
                            <header>
                                <h5>Total</h5>
                                <img src={totalImg} alt="Total" />
                            </header>
                            <strong>
                                {new Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                }).format(summary.total)}
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
