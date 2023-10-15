import React, { useState, useEffect } from 'react';
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
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import DatePicker from 'react-datepicker';
import ellipse from '../pics/ellipse-2.png';
import Axios from "axios";

const Homepage = () => {
  const [once, setOnce] = useState(false)
  const [name, setname] = useState('');
  const path = JSON.parse(window.localStorage.getItem('path'));
  const percentage = 58;
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  //const [nameStyle, setNameStyle] = useState({});
  const [userprofile, setuserprofile] = useState([])
  const id = JSON.parse(window.localStorage.getItem("account"))
  const [mealData, setMealData] = useState({
    breakfast: 0,
    lunch: 0,
    dinner: 0,
    snacks: 0,
  });

  useEffect(() => {
    if (path) {
      setOnce(true);
      window.localStorage.setItem("path", JSON.stringify(null));
    } else {
      setOnce(false);
    }

  
    // Fetch meal data based on selected date
    if (selectedDate) {
      Axios.get(
        `http://localhost:3002/api/mealrecord?date=${selectedDate.toISOString()}`
      )
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
        .catch((error) => console.error("Error fetching meal data:", error));
    }

    // Fetch user profile based on id
    Axios.get(`http://localhost:3002/api/getUserProfile2/${id}`)
      .then((res) => {
        setuserprofile(res.data);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
    }, [path, selectedDate, id]);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };
  const formatDate = (date) => {
    return date ? date.toISOString().slice(0, 10) : '';
  };
  const [nameStyles, setNameStyles] = useState([
    { color: 'black', fontWeight: '400' },
    { color: 'black', fontWeight: '400' },
    { color: 'black', fontWeight: '400' },
    { color: 'black', fontWeight: '400' },
    { color: 'black', fontWeight: '400' },
  ]);

  const toggleNameStyle = (index) => {
    // Create a copy of the current styles object
    const newStyles = { ...nameStyles };

    // Check if the style object for this index exists
    if (!newStyles[index]) {
      newStyles[index] = {
        color: 'black',
        fontWeight: '400',
      };
    } else {
      // Toggle the color and font weight
      newStyles[index] = {
        color: newStyles[index].color === 'black' ? '#567710' : 'black',
        fontWeight: newStyles[index].fontWeight === '400' ? 'bold' : '400',
      };
    }

    // Update the state with the new styles
    setNameStyles(newStyles);
  }

  const weightGraphData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], 
    datasets: [
      {
        label: '2023 Monthly Weight Progress',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        data: [70, 70.5, 71, 71.8, 72.2, 73, 73.8, 74.6, 75.5, 76, 76.4, 77],
      },
    ],
  };

  const weightGraphOptions = {
    scales: {
      y: {
        suggestedMin: 50,
      },
    },
  };


  return (
    <div>
      <NavBarUser />
      {once && <PopUpModalLogin1 />}
      <div className="frame1">

        <div className="div-2">
          <div className="your-achievement">
            <div className="flexcontainer">
              <p className="span-wrapper">
                <span className="span">
                  your<br></br>achievement.
                </span>
              </p>
            </div>
            <div className="rectangle-2">
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
          </div>
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
            {/* <div className="overlap-wrapper">
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
            </div> */}
          </div>
        </div>
        <div className="div-4">
          <div className="users-HP">
            <div className="text-wrapper">users.</div>
            <div className='frameUser'>
              <div className="user-choiceMR2">
                {userprofile.map((data, index) => {
                  return <div className="group" key={data.iduserprofile}>
                    <img className="ellipse" alt="Ellipse" src={ellipse} value={index} onClick={() => toggleNameStyle(index)}
                      style={nameStyles[index] || { color: 'black', fontWeight: '400' }} />
                    <div className="text-wrapper2" style={nameStyles[index]}>{data.name}</div>
                  </div>
                })}
              </div>
            </div>

            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="text-wrapper-3">Your Weight Progress</div>
              </div>
            </div>
            <div className="data-vi">
            <Line data={weightGraphData} options={weightGraphOptions} />
            </div>
          </div>
          <ComponentBuynow className="buy-food-instance" />
        </div>
      </div>

    </div>

  );

}
export default Homepage;
