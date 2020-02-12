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
            <div className="content__date">
                <DatePicker startDate={startDate} setStartDate={setStartDate} />
                <Timestamp date={startDate} />
            </div>
        </AppContainer>
    );
};

export default App;
