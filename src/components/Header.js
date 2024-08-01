import React from "react";
import Attending from "./Attending";
import NotAttending from "./NotAttening";

function Header({ isAttending }) {
  return (
    <header>
      <h1>Nanenane Match</h1>
      <nav>{isAttending ? <NotAttending /> : <Attending />}</nav>
    </header>
  );
}

export default Header;
