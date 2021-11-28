import React from "react";
import MFeed from "./mFeed.js";
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
        <MFeed />
        {/* <Widget /> */}
      </div>
    </div>
  );
}

export default Mate;
