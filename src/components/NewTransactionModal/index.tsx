import Modal from "react-modal";
import {
    Container,
    TransactionTypeButton,
    TransactionTypeContainer,
} from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({
    isOpen,
    onRequestClose,
}: NewTransactionModalProps) {
    Modal.setAppElement("#root");

    const [type, setType] = useState("income");

    interface Transaction {
        title: string;
        amount: number;
        type: string;
        category: string;
    }

    const [transaction, setTransaction] = useState<Transaction>({
        title: "",
        amount: 0,
        type: type,
        category: "",
    });

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        api.post("/transactions", transaction);
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container onSubmit={handleCreateNewTransaction}>
                <button
                    type="button"
                    onClick={onRequestClose}
                    className="react-modal-close"
                >
                    <img src={closeImg} alt="Fechar" />
                </button>
                <h2>Cadastrar transação</h2>
                <input
                    className="form-control form-control-lg mb-3"
                    type="text"
                    placeholder="Título"
                    value={transaction.title}
                    onChange={(event) => {
                        setTransaction({
                            title: event.target.value,
                            amount: transaction.amount,
                            type: type,
                            category: transaction.category,
                        });
                    }}
                />
                <input
                    className="form-control form-control-lg mb-3"
                    type="number"
                    placeholder="Valor"
                    value={transaction.amount}
                    onChange={(event) => {
                        setTransaction({
                            title: transaction.title,
                            amount: Number(event.target.value),
                            type: type,
                            category: transaction.category,
                        });
                    }}
                />
                <TransactionTypeContainer
                    className="btn-group mb-3"
                    role="group"
                    aria-label="Tipo de transação"
                >
                    <TransactionTypeButton
                        type="button"
                        className="btn btn-lg"
                        onClick={() => setType("income")}
                        isActive={type === "income"}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span className="ms-1">Entrada</span>
                    </TransactionTypeButton>
                    <TransactionTypeButton
                        type="button"
                        className="btn btn-lg"
                        onClick={() => setType("outcome")}
                        isActive={type === "outcome"}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" className="mr-1" />
                        <span className="ms-1">Saída</span>
                    </TransactionTypeButton>
                </TransactionTypeContainer>
                <input
                    className="form-control form-control-lg mb-3"
                    type="text"
                    placeholder="Categoria"
                    value={transaction.category}
                    onChange={(event) => {
                        setTransaction({
                            title: transaction.title,
                            amount: transaction.amount,
                            type: type,
                            category: event.target.value,
                        });
                    }}
                />
                <button className="btn btn-success btn-lg ">Cadastrar</button>
            </Container>
        </Modal>
    );
}
