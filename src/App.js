import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment-timezone";

import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

function App() {
    const [startDate, setStartDate] = useState(new Date());
    // console.log(new Date().getTime());
    // const nyDate = startDate.toLocaleString("en-US", {
    //     timeZone: "America/New_York",
    // });
    // const userOffset = startDate.getTimezoneOffset() * 60 * 1000;
    // const EASTERN_OFFSET = 5 * 60 * 60 * 1000;
    const newYork = moment(startDate).tz("America/New_York");
    // console.log("newYork", newYork.format("MMM DD YYYY HH:mm:ss A"));

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
        </div>
    );
}

export default App;
