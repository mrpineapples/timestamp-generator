import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-named-default
import { default as ReactDatePicker } from "react-datepicker";
import DatePickerContainer from "./styles";

import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ startDate, setStartDate }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const withPortal = !(screenWidth >= 768);

    useEffect(() => {
        const updateSize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    });

    return (
        <DatePickerContainer>
            <ReactDatePicker
                className="date-input"
                selected={startDate}
                onChangeRaw={(e) => e.preventDefault()}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="MMMM d, yyyy h:mm aa"
                withPortal={withPortal}
            />
        </DatePickerContainer>
    );
};

DatePicker.propTypes = {
    startDate: PropTypes.instanceOf(Date).isRequired,
    setStartDate: PropTypes.func.isRequired,
};

export default DatePicker;
