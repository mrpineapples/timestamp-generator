import React, { useState } from "react";
import moment from "moment-timezone";
import DatePicker from "./components/DatePicker";

const App = () => {
    const [startDate, setStartDate] = useState(new Date());
    const newYork = moment(startDate).tz("America/New_York");

    return (
        <div>
            <DatePicker startDate={startDate} setStartDate={setStartDate} />
            <h1>Time in New York</h1>
            <p>{newYork.format("MMM DD YYYY h:mm A")}</p>
            <h1>
                Enter this time (unix) into forge:{" "}
                {Math.floor(startDate.getTime() / 1000)}
            </h1>
        </div>
    );
};

export default App;
