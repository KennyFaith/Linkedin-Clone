// import React from 'react'
import "./Sidebar.css";
import Face6SharpIcon from "@mui/icons-material/Face6Sharp";

function Sidebar() {

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <h1>This Is A Sidebar Yo!!!</h1>
      <div className="sidebar__top">
        <img src="BirdandBird-Background.jpg" alt="" />
        <Face6SharpIcon className="sidebar__avatar" />
        <h2>This_Is_Kennyfaith</h2>
        <h4>Kennyfaith@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who Viewed You</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views On Post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>

        <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem("reactjs")}
          {recentItem("programming")}
          {recentItem("softweareengineering")}
          {recentItem("design")}
          {recentItem("developer")} 
        </div> 
    </div>
  );
}

export default Sidebar;
