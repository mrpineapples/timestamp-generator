import React from "react";
import PropTypes from "prop-types";
import TimestampContainer from "./styles";

const Timestamp = ({ date }) => {
    return (
        <TimestampContainer>
            {/* eslint-disable-next-line */}
            <p className="timestamp">Unix Timestamp: {Math.floor(date.getTime() / 1000)}</p>
        </TimestampContainer>
    );
};

Timestamp.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
};

export default Timestamp;
