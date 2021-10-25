import React from "react";
import Feed from "./Feed.js";
import Header from "./Header";
import "./mate.css";
import Sidebar from "./Sidebar";
import Widget from "./Widget.js";

function Mate() {
  return (
    <div className="mate">
      <Header />
      <div className="content">
        <Sidebar />
        <Feed />
        {/* <Widget /> */}
      </div>
    </div>
  );
}

export default Mate;
