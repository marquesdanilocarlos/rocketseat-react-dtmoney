import styled from "styled-components";

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input::placeholder {
        color: var(--text-body);
    }

    .btn-success {
        width: 100%;
        background: var(--bs-success);
        border-color: var(--bs-success);
    }
`;

export const TransactionTypeContainer = styled.div`
    width: 100%;
    .btn {
        border: 1px solid var(--text-body);
        border-radius: 0.25rem;
        &:hover {
            filter: brightness(90%);
        }
    }
`;
