import React, {useState, useEffect } from 'react';
import { PopUpModalLogin1 } from './PopUpModalLogin1';
import NavBarUser from './NavBarUser';
//import '../css/styleHomePage.css'
import '../css/homepage.css'
import ComponentBuynow from './ComponentBuynow';
import imageCheck from '../pics/icon-circle-check.png'
import imageX from '../pics/icon-circle-x.png'
import 'react-datepicker/dist/react-datepicker.css';
import '../css/styleToday.css';
import '../css/userHP.css';
import calendar from '../pics/calendar.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import DatePicker from 'react-datepicker';
import a from '../pics/ellipse-2.png';
import b from '../pics/Vector2.png';
import Axios from "axios";

const TodayHp = () => {
  const percentage = 58;
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [mealData, setMealData] = useState({
    breakfast: 0,
    lunch: 0,
    dinner: 0,
    snacks: 0,
  });

   const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };
       const formatDate = (date) => {
  return date ? date.toISOString().slice(0, 10) : '';
};

    useEffect(() => {
    if (selectedDate) {
      Axios.get(`http://localhost:3002/api/mealrecord?date=${selectedDate.toISOString()}`)
        .then((response) => {
          const { data } = response;
          let totalCalories = {
            breakfast: 0,
            lunch: 0,
            dinner: 0,
            snacks: 0,
          };

          data.forEach((item) => {
            totalCalories.breakfast += item.breakfast;
            totalCalories.lunch += item.lunch;
            totalCalories.dinner += item.dinner;
            totalCalories.snacks += item.snacks;
          });

          setMealData(totalCalories);
        })
        .catch((error) => console.error('Error fetching meal data:', error));
    }
  }, [selectedDate]);

    return (
    <div className="today-component">
      <div className="frame">
        <div className="calendar-icon-container">
          <button className="btn" onClick={toggleCalendar}>
            <img className="calendar-day" alt="Calendar day" src={calendar} />
          </button>
          {showCalendar && (
            <div className="calendar-container">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="calendar-input"
              />
            </div>
          )}
        </div>
        <div className="text-wrapper">
          {selectedDate ? `Today (${formatDate(selectedDate)})` : 'Today()'}
        </div>
        <div className="overlap-group">
          <div className="overlap">
            <div className="div">
              <div className="text-wrapper-2">Calories Taken</div>
              <div className="text-wrapper-3">500 /2000 </div>
            </div>
            <div className="datavi-circle">
              <div style={{ width: 265, height: 300 }}>
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  strokeWidth={5}
                  styles={buildStyles({
                    textSize: '14px',
                    textColor: 'darkgreen',
                    pathColor: 'lightgreen',
                    trailColor: '#d3d3d3',
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

const UserHP = () => {
  const [nameStyle, setNameStyle] = useState({ color: 'black', fontWeight: '400' });
  const [nameStyle1, setNameStyle1] = useState({ color: 'black', fontWeight: '400' });
  const toggleNameStyle = () => {
    setNameStyle((prevStyle) => {
      if (prevStyle.color === 'black') {
        return {
          color: 'green',
          fontWeight: 'bold',
        };
      } else {
        return {
          color: 'black',
          fontWeight: '600',
        };
      }
    });
  };
  const toggleNameStyle1 = () => {
    setNameStyle1((prevStyle) => {
      if (prevStyle.color === 'black') {
        return {
          color: 'green',
          fontWeight: 'bold',
        };
      } else {
        return {
          color: 'black',
          fontWeight: '600',
        };
      }
    });
  };
  return (
    <div className="users-HP">
      <div className="text-wrapper">users.</div>
      <div className="frameUser">
        <div className="group">
          <img id="profile" className="ellipse" alt="Ellipse" src={a} onClick={toggleNameStyle} />
          <div id="name" className="div-user" style={nameStyle}>
            Nicholas
          </div>
        </div>
        <div className="group">
          <img id="profile1" className="ellipse" alt="Ellipse" src={a} onClick={toggleNameStyle1} />
          <div id="name" className="div-user" style={nameStyle1}>
            Nicholas
          </div>
        </div>

        <div className="frame-wrapper">
          <div id="add" className="div-wrapper">
            <div className="vector-wrapper">
              <img className="vector" alt="Vector" src={b} />
            </div>
          </div>
        </div>
      </div>
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="text-wrapper-3">Your Weight Progress</div>
        </div>
      </div>
      <div className="data-vi">

      </div>
    </div>
  );
};
function Homepage() {
    const [once, setOnce] = useState(false)
    const path = JSON.parse(window.localStorage.getItem('path'));
    useEffect(()=>{
        if(path){
            setOnce(true)
            window.localStorage.setItem('path', JSON.stringify(null))
        }
        else{
            setOnce(false)
        }
    },[])
        return (
            <div>
              <NavBarUser />
              {once && <PopUpModalLogin1/>}
        <div className="frame1">

            <div className="div-2">
                <div className="your-achievement">
                    <div className="flexcontainer">
                        <p className="span-wrapper">
                            <span className="span">
                                your
                                <br />
                            </span>
                        </p>
                        <p className="span-wrapper">
                            <span className="span">achievement.</span>
                        </p>
                    </div>
                    <div className="rectangle-2" />
                    <div className="div-3">
                        <div className="element-5">
                            <img className="img-2" alt="Icon circle check" src={imageCheck} />
                            <div className="text-wrapper-22">DAY 1</div>
                        </div>
                        <div className="element-6">
                            <img className="img-2" alt="Icon circle check" src={imageCheck} />
                            <div className="text-wrapper-22">DAY 3</div>
                        </div>
                        <div className="element-7">
                            <img className="img-2" alt="Icon circle x" src={imageX} />
                            <div className="text-wrapper-23">DAY 2</div>
                        </div>
                        <div className="text-wrapper-24">daily streak.</div>
                    </div>
                </div>
                <TodayHp className="today-component-instance" />
            </div>
            <div className="div-4">
                <UserHP className="users-HP-instance" />
                <ComponentBuynow className="buy-food-instance" />
            </div>
        </div>

    </div>

        );

}

export default Homepage;
