import React, { useState } from "react";
import DatePicker from "./components/DatePicker";
import Timestamp from "./components/Timestamp";
import Header from "./components/Header";
import AppContainer from "./styles";

const App = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [timestamp, setTimestamp] = useState(null);

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
        <AppContainer>
            <Header />
            <div className="timestamp-generator">
                <span className="timestamp-generator__info">
                    Choose a Date & Time:
                </span>
                <DatePicker startDate={startDate} setStartDate={setStartDate} />
                <Timestamp date={startDate} />
            </div>
            <div className="timestamp-converter">
                <div className="timestamp-converter__cta">
                    <span className="timestamp-converter__cta__title">
                        Convert a Timestamp:
                    </span>
                    <input
                        className="timestamp-converter__cta__input"
                        id="converter"
                        type="text"
                        value={timestamp}
                        onChange={(e) => setTimestamp(e.target.value)}
                    />
                </div>
                <div className="timestamp-converter__results">
                    <h3 className="timestamp-converter__results__title">
                        Your local time
                    </h3>
                    <div className="timestamp-converter__results__value">
                        {timestamp
                            ? new Date(timestamp * 1000).toLocaleDateString(
                                  locale,
                                  dateFormatOptions
                              )
                            : null}
                    </div>
                </div>
            </div>
        </AppContainer>
    );
};

export default App;
