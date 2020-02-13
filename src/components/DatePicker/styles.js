import styled from "styled-components";

const DatePickerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .date-input {
        width: 175px;
        border: none;
        border-bottom: 1px solid #000000;
        cursor: pointer;
        text-align: center;
        color: transparent;
        text-shadow: 0 0 0 #000000;
        font-family: inherit;
    }

    @media (min-width: 768px) {
        margin-right: 30px;
    }
`;

export default DatePickerContainer;
