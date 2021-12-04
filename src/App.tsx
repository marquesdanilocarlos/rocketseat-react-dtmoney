import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
export function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Dashboard />
            <Footer />
        </>
    );
}
