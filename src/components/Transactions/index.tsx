import { useEffect } from "react";
import { Container } from "./styles";

export function Transactions() {
    useEffect(() => {
        fetch("http://localhost:3000/api/transactions")
            .then((resposnse) => resposnse.json())
            .then((response) => console.log(response));
    }, []);

    return (
        <Container>
            <table className="table table-light rounded">
                <thead>
                    <tr className="table-light">
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-light">
                        <td className="table-light">
                            Desenvolvimento de website
                        </td>
                        <td className="table-light text-success">
                            R$ 12.000,00
                        </td>
                        <td className="table-light">Desenvolvimento</td>
                        <td className="table-light">21/11/2021</td>
                    </tr>
                    <tr className="table-light">
                        <td className="table-light">Aluguel</td>
                        <td className="table-light text-danger">-R$ 800,00</td>
                        <td className="table-light">Moradia</td>
                        <td className="table-light">13/05/2021</td>
                    </tr>
                    <tr className="table-light">
                        <td className="table-light">
                            Desenvolvimento de website
                        </td>
                        <td className="table-light text-success">
                            R$ 12.000,00
                        </td>
                        <td className="table-light">Desenvolvimento</td>
                        <td className="table-light">21/11/2021</td>
                    </tr>
                    <tr className="table-light">
                        <td className="table-light">Aluguel</td>
                        <td className="table-light text-danger">-R$ 800,00</td>
                        <td className="table-light">Moradia</td>
                        <td className="table-light">13/05/2021</td>
                    </tr>
                    <tr className="table-light">
                        <td className="table-light">
                            Desenvolvimento de website
                        </td>
                        <td className="table-light text-success">
                            R$ 12.000,00
                        </td>
                        <td className="table-light">Desenvolvimento</td>
                        <td className="table-light">21/11/2021</td>
                    </tr>
                    <tr className="table-light">
                        <td className="table-light">Aluguel</td>
                        <td className="table-light text-danger">-R$ 800,00</td>
                        <td className="table-light">Moradia</td>
                        <td className="table-light">13/05/2021</td>
                    </tr>
                    <tr className="table-light">
                        <td className="table-light">
                            Desenvolvimento de website
                        </td>
                        <td className="table-light text-success">
                            R$ 12.000,00
                        </td>
                        <td className="table-light">Desenvolvimento</td>
                        <td className="table-light">21/11/2021</td>
                    </tr>
                    <tr className="table-light">
                        <td className="table-light">Aluguel</td>
                        <td className="table-light text-danger">-R$ 800,00</td>
                        <td className="table-light">Moradia</td>
                        <td className="table-light">13/05/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}
