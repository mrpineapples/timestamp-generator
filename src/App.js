import React, { useState } from "react";
import DatePicker from "./components/DatePicker";
import Timestamp from "./components/Timestamp";
import Header from "./components/Header";
import TimestampConverter from "./components/TimestampConverter";
import AppContainer from "./styles";

const App = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [timestamp, setTimestamp] = useState(null);

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
                {timestamp && (
                    <div className="timestamp-converter__results">
                        <h3 className="timestamp-converter__results__title">
                            Your local time
                        </h3>
                        <TimestampConverter timestamp={timestamp} />
                    </div>
                )}
            </div>
        </AppContainer>
    );
};

export default App;
