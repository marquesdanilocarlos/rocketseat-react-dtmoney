import styled from "styled-components";

export const Container = styled.div`
    margin-top: -8rem;

    .card {
        padding: 1.5rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            h5 {
                font-weight: 300;
            }
        }

        strong {
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            display: block;
        }
    }
`;
