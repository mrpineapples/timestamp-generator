import styled from "styled-components";

const DatePickerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .react-datepicker__portal {
        & > div {
            position: absolute;
            top: 125px;
        }
    }

    .date-input {
        margin-top: 5px;
        width: 260px;
        border: none;
        border-bottom: 1px solid #000000;
        cursor: pointer;
        text-align: center;
        color: transparent;
        text-shadow: 0 0 0 #000000;
        font-family: inherit;
        font-size: 16px;
    }

    @media (min-width: 768px) {
        .date-input {
            width: 225px;
            font-size: 14px;
            margin-top: 0;
        }
    }
`;

export default DatePickerContainer;
