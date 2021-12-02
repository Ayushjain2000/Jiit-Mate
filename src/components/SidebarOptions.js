import { Add } from "@material-ui/icons";
import React from "react";
import "./SidebarOption.css";

let clubs = ["ABHIVAKTI", "JODC", "CINEKALA", "FORTISSMO", "SPORTS CLUBS"];

function SidebarOptions(clubss) {
  return (
    <div className="sidebarOptions">
      <h3>CLUBS</h3>
      <div className="sidebarOption">
        {clubs.map((user) => {
          return <button class="sidebarButton">{user}</button>;
        })}
      </div>
    </div>
  );
}

export default SidebarOptions;
