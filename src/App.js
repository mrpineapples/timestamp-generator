import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment-timezone";

import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

function App() {
    const [startDate, setStartDate] = useState(new Date());
    const newYork = moment(startDate).tz("America/New_York");

    return (
        <div className="App">
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="MMMM d, yyyy h:mm aa"
            />
            <h1>Time in New York</h1>
            <p>{newYork.format("MMM DD YYYY h:mm A")}</p>
            <h1>
                Enter this time (unix) into forge:{" "}
                {Math.floor(startDate.getTime() / 1000)}
            </h1>
        </div>
    );
}

export default App;
