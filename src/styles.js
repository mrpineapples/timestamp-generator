import styled from "styled-components";

const AppContainer = styled.div`
    display: block;

    .timestamp-generator {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }

    .timestamp-converter {
        margin-top: 30px;

        &__cta {
            display: flex;
            justify-content: center;

            &__input {
                width: 100px;
                margin-left: 10px;
                border: none;
                border-bottom: 1px solid #000000;
                text-align: center;
                font-size: 16px;
            }
        }

        &__results {
            width: 100%;
            margin-top: 20px;

            &__title {
                width: max-content;
                margin: 0 auto;
                border-bottom: 2px solid #000000;
            }
        }
    }

    @media (min-width: 768px) {
        .timestamp-generator {
            flex-direction: row;
            justify-content: center;
            margin-top: 0;

            &__info {
                margin-right: 15px;
            }
        }

        .timestamp-converter {
            &__cta {
                &__input {
                    font-size: 14px;
                }
            }
        }
    }
`;

export default AppContainer;
