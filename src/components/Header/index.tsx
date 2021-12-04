import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export function Header() {
    return (
        <Container className="container-fluid bg-primary">
            <Content className="container">
                <img src={logoImg} alt="dtmoney" />
                <button type="button">Nova transação</button>
            </Content>
        </Container>
    );
}
