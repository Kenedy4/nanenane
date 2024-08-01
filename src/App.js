import React from "react";
import Header from "./Header";
import "./App.css";
import Attending from "./Attending";
import ScheduleList from "./ScheduleList";
import NotAttending from "./NotAttending";
import AttendeeCard from "./AttendeeCard";

function App() {
  const schedule = [
    { title: "Event", date: "2024-08-08", time: "09:00 AM" },
    { title: "Event", date: "2024-08-08", time: "09:00 PM" },
  ];

  const attendees = [
    {
      name: "Alice",
      image: "https://example.com/alice.jpg",
      bio: "Alice is a 30-year-old woman who is passionate about her craft.",
      age: 26,
      attendanceStatus: "attending",
    },
    {
      name: "Bob",
      image: "https://example.com/bob.jpg",
      bio: "Bob is a 28-year-old man who loves hiking and exploring.",
      age: 28,
      attendanceStatus: "attending",
    },
    {
      name: "Nonzamo",
      image: "https://example.com/nonzamo.jpg",
      bio: "Nonzamo is a 25-year-old man who loves playing video games.",
      age: 25,
      attendanceStatus: "attending",
    },
    {
      name: "Quincy",
      image: "https://example.com/quincy.jpg",
      bio: "Quincy is a 32-year-old woman who enjoys painting and sketching.",
      age: 32,
      attendanceStatus: "NotAttending",
    },
    {
      name: "Kenedy",
      image: "https://example.com/kenedy.jpg",
      bio: "Kenedy is a 29-year-old man who loves hiking and exploring.",
      age: 29,
      attendanceStatus: "attending",
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className="content">
        <AttendeeCard attendees={attendees} />
        <ScheduleList schedule={schedule} />
      </div>
      <NotAttending />
      <Attending />
    </div>
  );
}

export default App;
