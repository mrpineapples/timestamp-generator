import React, { useState } from "react";
import DatePicker from "./components/DatePicker";
import Timestamp from "./components/Timestamp";
import AppContainer from "./styles";

const App = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <AppContainer>
            <DatePicker startDate={startDate} setStartDate={setStartDate} />
            <Timestamp date={startDate} />
        </AppContainer>
    );
};

export default App;
