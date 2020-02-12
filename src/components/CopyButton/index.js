import React from "react";
import CopyButtonContainer from "./styles";

const CopyButton = () => {
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

export default CopyButton;
