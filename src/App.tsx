import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";

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
            <TransactionsProvider>
                <Header
                    onOpenNewTransactionModal={handleOpenNewTransactionModal}
                />
                <Dashboard />
            </TransactionsProvider>
            <Footer />
            <NewTransactionModal
                isOpen={newTransactionModalIsOpen}
                onRequestClose={handleCloseTransactionModal}
            />
        </>
    );
}
