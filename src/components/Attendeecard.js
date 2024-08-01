import React from "react";
function Attendingcard({ name, image, bio, age, attendanceStatus }) {
  const card = new Card({ name },{image} {bio},{ age } ,{ attendanceStatus });

  return <div className="card">
    {card.render( )}
  </div>;
}

export default Attendingcard;