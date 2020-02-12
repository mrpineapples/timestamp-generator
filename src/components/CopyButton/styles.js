import styled from "styled-components";

const CopyButtonContainer = styled.button`
    border: none;
    margin: 0 0 0 10px;
    padding: 0;
    overflow: visible;
    background: transparent;
    color: #3490dc;
    font-family: inherit;
    font-size: 12px;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
    cursor: pointer;

    /* Remove excess padding and border in Firefox 4+ */
    &::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
`;

export default CopyButtonContainer;
