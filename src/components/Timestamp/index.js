import React from "react";
import PropTypes from "prop-types";
import TimestampContainer from "./styles";
import CopyButton from "../CopyButton";

const Timestamp = ({ date }) => {
    return (
        <TimestampContainer>
            {/* eslint-disable-next-line */}
            <p className="timestamp">Unix Timestamp: <span id="timestamp-value">{Math.floor(date.getTime() / 1000)}</span></p>
            <CopyButton />
        </TimestampContainer>
    );
};

Timestamp.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
};

export default Timestamp;
