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
`;

interface TransactionTypeButtonProps {
    isActive: boolean;
    activeColor: "red" | "green";
}

const activeColors = {
    green: "rgba(51,204,149, 0.1)",
    red: "rgba(229,46,77, 0.1)",
};

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
    border: 1px solid var(--text-body);
    border-radius: 0.25rem;
    background: ${(props) =>
        props.isActive
            ? activeColors[props.activeColor] + "!important"
            : "transparent"};
    &:hover {
        filter: brightness(70%);
    }
`;
