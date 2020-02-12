import React from "react";
import PropTypes from "prop-types";
import CopyButtonContainer from "./styles";

const CopyButton = (props) => {
    const copyTimeStamp = () => {
        const copyText = document.querySelector("#timestamp-value").textContent;
        const tempInput = document.createElement("input");
        tempInput.value = copyText;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
    };

    return (
        <CopyButtonContainer onClick={copyTimeStamp}>Copy</CopyButtonContainer>
    );
};

CopyButton.propTypes = {};

export default CopyButton;
