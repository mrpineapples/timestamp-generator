import React, { useState } from "react";
import DatePicker from "./components/DatePicker";
import Timestamp from "./components/Timestamp";
import Header from "./components/Header";
import AppContainer from "./styles";

const App = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <AppContainer>
            <Header />
            <div className="content">
                <span className="content__info">Choose a Date & Time:</span>
                <DatePicker startDate={startDate} setStartDate={setStartDate} />
                <Timestamp date={startDate} />
            </div>
        </AppContainer>
    );
};

export default App;
