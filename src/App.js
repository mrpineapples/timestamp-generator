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
        dateStyle: "full",
        timeStyle: "long",
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
                <span>Convert Timestamp:</span>
                <input
                    id="converter"
                    type="text"
                    value={timestamp}
                    onChange={(e) => setTimestamp(e.target.value)}
                />
                <div>Your local time: </div>
                {timestamp
                    ? new Date(timestamp * 1000).toLocaleDateString(
                          locale,
                          dateFormatOptions
                      )
                    : null}
            </div>
        </AppContainer>
    );
};

export default App;
