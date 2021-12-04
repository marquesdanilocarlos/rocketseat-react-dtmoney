import { Summary } from "../Summary";
import { Transactions } from "../Transactions";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container className="container">
            <Summary />
            <Transactions />
        </Container>
    );
}
