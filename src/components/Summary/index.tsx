import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";
import { useContext } from "react";

export function Summary() {
    const data = useContext(TransactionsContext);

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
                            <strong>R$ 1000,00</strong>
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
                            <strong>R$ -500,00</strong>
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
                            <strong>R$ 500,00</strong>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
