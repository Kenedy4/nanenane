import React from "react";
import Schedule from "./Schedule";

function ScheduleList({ schedule }) {
  return (
    <div>
      <h2>Schedule</h2>
      {schedule.map((event, index) => (
        <Schedule key={index} event={event} />
      ))}
    </div>
  );
}

export default ScheduleList;
