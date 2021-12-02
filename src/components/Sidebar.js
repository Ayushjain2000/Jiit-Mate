import React from "react";
import SidebarOptions from "./SidebarOptions";
import "./Sidebar.css";

const clubs=[
{
  clubName:'JODC'
},
{
  clubName:'ABHIVAYAKTI'
},
{
  clubName:'AURA PHOTOGRAPHY'
}
];

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarOptions clubss={clubs[0]}/>
    </div>
  );
}

export default Sidebar;
