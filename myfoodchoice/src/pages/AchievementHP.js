import React from "react";
import "../css/styleAchievement.css";
import imageCheck from '../pics/icon-circle-check.png'
import imageX from '../pics/icon-circle-x.png'

const AchievementHP = () => {
  return (
    <div className="group">
      <div className="flexcontainer">
        <p className="text"><span className="text-wrapper">Your<br /></span></p>
        <p className="text"><span className="text-wrapper">Achievement.</span></p>
      </div>
      <div className="rectangle10"><div className="text-wrapper-3">daily streak.</div></div>
      <div className="element10">
        <img className="img" alt="Icon circle check" src={imageCheck} />
        <div className="div">DAY 1</div>
      </div>
      <div className="element-2">
        <img className="img" alt="Icon circle check" src={imageCheck} />
        <div className="div">DAY 1</div>
      </div>
      <div className="element-3">
        <img className="img" alt="Icon circle x" src={imageX} />
        <div className="text-wrapper-2">DAY 2</div>
      </div>
      
    </div>
  );
};

export default AchievementHP;