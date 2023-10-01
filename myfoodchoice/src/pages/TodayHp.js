import React from "react";
import "../css/styleToday.css";
import calendar from '../pics/calendar.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const TodayHp = () => {
    const percentage = 58;
    
    return (
        <div className="today-component">
            <div className="frame">
                <div className="text-wrapper">today.</div>
                <button>
                <img className="calendar-day" alt="Calendar day" src={calendar} />
                </button>
                <div className="overlap-group">
                    <div className="overlap">
                        <div className="div">
                            <div className="text-wrapper-2">your daily intake.</div>
                            <div className="text-wrapper-3">500 cal</div>
                        </div>
                        <div className="datavi-circle">
                            <div style={{ width: 265, height: 300 }}>
                            <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={5}
        styles={buildStyles({
            textSize: "14px",
            textColor: "darkgreen",
            pathColor: "lightgreen",
            trailColor: "#d3d3d3"
          })}
      />
  </div>
                        </div>
                    </div>
                    <div className="frame-2">
                        <div className="frame-3">
                            <div className="text-wrapper-4">breakfast.</div>
                            <div className="text-wrapper-5">500 cal</div>
                        </div>
                        <div className="frame-4">
                            <div className="text-wrapper-6">lunch.</div>
                            <div className="text-wrapper-7">500 cal</div>
                        </div>
                        <div className="frame-5">
                            <div className="text-wrapper-8">dinner.</div>
                            <div className="text-wrapper-9">600 cal</div>
                        </div>
                        <div className="frame-6">
                            <div className="text-wrapper-10">exercise.</div>
                            <div className="text-wrapper-11">600 cal</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overlap-wrapper">
                <div className="overlap-2">
                    <div className="text-wrapper-12">add your meal.</div>
                    <a href="">
                    <div className="frame-7">
                        <div className="rectangle" />
                        <div className="text-wrapper-13">snack</div>
                    </div>
                    </a>
                    <a href="">
                    <div className="frame-8">
                        <div className="rectangle" />
                        <div className="text-wrapper-13">exercise</div>
                    </div>
                    </a>
                    <a href="">
                    <div className="frame-9">
                        <div className="rectangle" />
                        <div className="text-wrapper-13">dinner</div>
                    </div>
                    </a>
                    <a href="">
                    <div className="frame-10">
                        <div className="rectangle" />
                        <div className="text-wrapper-14">lunch</div>
                    </div>
                    </a>
                    <a href="">
                    <div className="frame-11">
                        <div className="rectangle" />
                        <div className="text-wrapper-15">breakfast</div>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TodayHp;