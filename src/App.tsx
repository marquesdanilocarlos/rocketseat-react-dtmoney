import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

export function App() {
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
            <NewTransactionModal
                isOpen={newTransactionModalIsOpen}
                onRequestClose={handleCloseTransactionModal}
            />
        </>
    );
}
