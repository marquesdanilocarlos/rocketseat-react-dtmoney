import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";

export function App() {
    Modal.setAppElement("#root");

    const [newTransactionModalIsOpen, setNewTransactionModalIsOpen] =
        useState(false);

    function handleOpenNewTransactionModal() {
        setNewTransactionModalIsOpen(true);
    }

    function handleCloseTransactionModal() {
        setNewTransactionModalIsOpen(false);
    }

    return (
        <>
            <GlobalStyle />
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
            <Dashboard />
            <Footer />

            <Modal
                isOpen={newTransactionModalIsOpen}
                onRequestClose={handleCloseTransactionModal}
            >
                <h2>Cadastrar transação</h2>
            </Modal>
        </>
    );
}
