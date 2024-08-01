import React from "react";
import Header from "./Header";
import "./App.css";
import Attending from "./Attending";
// import Schedule from "./Schedule";
import ScheduleList from "./ScheduleList";
import NotAttending from "./NotAttending";
import AttendeeCard from "./AttendeeCard";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <AttendeeCard
          name="Alice"
          image="https://example.com/alice.jpg"
          bio="Alice is a 30-year-old woman who is passionate about her craft."
          age={30}
          attendanceStatus="attending"
        />
        <ScheduleList />
      </div>
      <NotAttending />
      {/* <Schedule /> */}
      <Attending />
    </div>
  );
}

export default App;
