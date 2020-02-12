import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-named-default
import { default as ReactDatePicker } from "react-datepicker";
import DatePickerContainer from "./Styles";

import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ startDate, setStartDate }) => {
    return (
        <DatePickerContainer>
            <span className="title">Choose a Date & Time:</span>
            <ReactDatePicker
                className="date-input"
                selected={startDate}
                onChangeRaw={(e) => e.preventDefault()}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="MMMM d, yyyy h:mm aa"
            />
        </DatePickerContainer>
    );
};

DatePicker.propTypes = {
    startDate: PropTypes.instanceOf(Date).isRequired,
    setStartDate: PropTypes.func.isRequired,
};

export default DatePicker;
