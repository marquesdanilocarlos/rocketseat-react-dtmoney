import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({
    isOpen,
    onRequestClose,
}: NewTransactionModalProps) {
    Modal.setAppElement("#root");

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
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
                />
                <input
                    className="form-control form-control-lg mb-3"
                    type="number"
                    placeholder="Valor"
                />
                <TransactionTypeContainer
                    className="btn-group mb-3"
                    role="group"
                    aria-label="Tipo de transação"
                >
                    <button type="button" className="btn btn-lg btn-light">
                        <img src={incomeImg} alt="Entrada" />
                        <span className="ms-1">Entrada</span>
                    </button>
                    <button type="button" className="btn btn-lg btn-light">
                        <img src={outcomeImg} alt="Saída" className="mr-1" />
                        <span className="ms-1">Saída</span>
                    </button>
                </TransactionTypeContainer>
                <input
                    className="form-control form-control-lg mb-3"
                    type="text"
                    placeholder="Categoria"
                />
                <button className="btn btn-success btn-lg ">Cadastrar</button>
            </Container>
        </Modal>
    );
}
