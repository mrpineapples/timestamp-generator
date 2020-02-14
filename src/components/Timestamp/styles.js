import styled from "styled-components";

const TimestampContainer = styled.div`
    display: flex;
    text-align: center;
    margin-top: 2rem;

    .timestamp {
        display: inline;
        margin: 0 0 0 20px;
    }

    @media (min-width: 768px) {
        margin-top: 0;
    }
`;

export default TimestampContainer;
