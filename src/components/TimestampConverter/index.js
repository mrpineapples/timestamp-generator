import React from "react";
import PropTypes from "prop-types";
import TimestampConverterContainer from "./styles";

const TimestampConverter = ({ timestamp }) => {
    const locale = "en-US";
    const dateFormatOptions = {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZoneName: "short",
    };

    return (
        <TimestampConverterContainer>
            {new Date(timestamp * 1000).toLocaleDateString(
                locale,
                dateFormatOptions
            )}
        </TimestampConverterContainer>
    );
};

TimestampConverter.propTypes = {
    timestamp: PropTypes.string.isRequired,
};

export default TimestampConverter;
