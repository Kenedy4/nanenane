import React from "react";

function AttendeeCard({ name, image, bio, age, attendanceStatus }) {
  return (
    <div className="card">
      <img src={image} alt={`${name}'s picture`} />
      <h2>{name}</h2>
      <p>{bio}</p>
      <p>Age: {age}</p>
      <p>Status: {attendanceStatus}</p>
    </div>
  );
}

export default AttendeeCard;
