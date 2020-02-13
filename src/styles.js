import styled from "styled-components";

const AppContainer = styled.div`
    display: block;

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }

    @media (min-width: 768px) {
        .content {
            flex-direction: row;
            justify-content: center;
            margin-top: 0;

            &__info {
                margin-right: 15px;
            }
        }
    }
`;

export default AppContainer;
