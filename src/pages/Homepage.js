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
import CareCalories from "../server/config/CareCalories";
import dateFormat from 'dateformat';
import { data } from 'autoprefixer';

const Homepage = () => {
  const [once, setOnce] = useState(false)
  const [name, setname] = useState('');
  const path = JSON.parse(window.localStorage.getItem('path'));
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [BMIData, setBMIData] = useState([]);
  const [isLoading, setLoading] = useState(false)

  //const [nameStyle, setNameStyle] = useState({});
  const [userprofile, setuserprofile] = useState([])
  const [userprofile2, setuserprofile2] = useState([])
  const id = JSON.parse(window.localStorage.getItem("account"))
  const [datecondition, setdatecondition] = useState('');
  const [upid, setupid] = useState('')
  const [mealData, setmealData] = useState([]);
  const [totalmealData, settotalmealData] = useState([]);
  const [mealcalories, setmealcalories] = useState([]);
  const [userGender, setuserGender] = useState([]);
  const [calorielimit, setcalorielimit] =useState();
  const [caloriesTaken, setcaloriesTaken] =useState();
  const [percentage, setPercentage] = useState();
  const [chartData, setChartData] = useState();


  useEffect(() => {
    if (path) {
      setOnce(true);
      window.localStorage.setItem("path", JSON.stringify(null));
    } else {
      setOnce(false);
    }

    const currentDate = new Date();
    const newdates = dateFormat(currentDate, "yyyy/mm/dd")
    //console.log("What is the date format?", newdates)
    setdatecondition(dateFormat(currentDate, "yyyy/mm/dd"))

    // Fetch user profile based on id
    CareCalories.get(`/api/getUserProfile2/${id}`)
      .then((res) => {
        setuserprofile(res.data);
        setuserGender(res.data);
       if (res.data[0].gender === 'Female'){
         setcalorielimit(2000)
       } else {
         setcalorielimit(2500)
       }
        //console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
    

    CareCalories.get(`/api/UserBMIgraph/${id}`)
      .then((response)=> {
        const { data } = response;
        setuserprofile2(data.filter((res)=>res.iduserprofile === 1));
        setBMIData(data);
        const graphData = BMIGraphData();
      })
  .catch((error) => {
      console.error("Error fetching BMI data:", error);
    });

    CareCalories.get(`/api/getmealrecordfullinfo/${id}`, {
      params:{upid: 1, mrdate: newdates}
    })
    .then((res) => {
        setmealData(res.data)
    })
    setLoading(true)
    CareCalories.get(`/api/totalcalories/${id}`, {
      params:{upid: 1, mrdate: newdates}
    })
    .then((res) => {
        settotalmealData(res.data)
    })

    CareCalories.get(`/api/totalMealcalories/${id}`, {
      params:{upid: 1, mrdate: newdates}
    })
    .then((res) => {
        setmealcalories(res.data);
        if (totalmealData.length > 0 && totalmealData[0].kcal) {
          setcaloriesTaken(totalmealData[0].kcal);
          setcalorielimit(calorielimit);
      }
      const percentage = (caloriesTaken / calorielimit) * 100;
      //console.log(percentage);
      setPercentage(percentage);
    })
    setupid(1)
  },[]);
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };
  const formatDate = (date) => {
    return date ? date.toISOString().slice(0, 10) : '';
  };
  const [nameStyles, setNameStyles] = useState([
    { color: '#567710', fontWeight: 'bold' }, { color: 'black', fontWeight: '400' }, { color: 'black', fontWeight: '400' }, { color: 'black', fontWeight: '400' }, { color: 'black', fontWeight: '400' },
  ]);


  const toggleNameStyle = (index, upid2) => {
    setupid(upid2)
    handleSubmit(upid2)
    const newStyles = nameStyles.map((style, i) => {
      if (i === index) {
        // Toggle the color and font weight for the clicked index
        return {
          color: style.color === 'black' ? '#567710' : 'black',
          fontWeight: style.fontWeight === '400' ? 'bold' : '400',
        };
      } else {
        // Reset the style for all other indices
        return {
          color: 'black',
          fontWeight: '400',
        };
      }
    });

    if (userGender.filter ((res) => res.iduserprofile === upid2)[0].gender === 'Female')
    {
       setcalorielimit(2000)
    } else {
      setcalorielimit(2500)
    }

    // Update the state with the new styles
    setNameStyles(newStyles);

     CareCalories.get(`/api/getmealrecordfullinfo/${id}`, {
      params:{upid: upid2, mrdate: dateFormat(datecondition, 'yyyy/mm/dd')}
    })
    .then((res) => {
        setmealData(res.data)
        console.log(res.data)
        //console.log(mealData)
    })
    setLoading(true)
    CareCalories.get(`/api/totalcalories/${id}`, {
      params:{upid: upid2, mrdate: dateFormat(datecondition, 'yyyy/mm/dd')}
    })
    .then((res) => {
        settotalmealData(res.data)
        console.log(res.data)
       //console.log(mealData)
    })

    CareCalories.get(`/api/totalMealcalories/${id}`, {
      params:{upid: upid2, mrdate: dateFormat(datecondition, 'yyyy/mm/dd')}
    })
    .then((res) => {
        setmealcalories(res.data)
        console.log(res.data)
       //console.log(mealData)
    })

  }
 
  
  userprofile.map((res,index) => {
    return <div onClick={() => handleSubmit(res.iduserprofile)} key={index}>{res.name}</div>
  });
  
  function handleSubmit(iduserprofile) {
    const selectedData = BMIData.filter((res) => res.iduserprofile === iduserprofile);
    setuserprofile2(selectedData);
    console.log(userprofile2)
  }


  const BMIGraphData = () => {
  
    const timestamps = userprofile2.map((item) => dateFormat(item.timestamp, "yyyy-mm-dd"));
    const bmiValues = userprofile2.map((item) => item.bmi);
    const heightValues = userprofile2.map((item) => item.height);
    const weightValues = userprofile2.map((item) => item.weight);
  
    return {
      labels: timestamps,
      datasets: [
        {
          label: 'BMI',
          fill: false,
          lineTension: 0.1,
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          data: bmiValues,
        },
        {
          label: 'Height',
          fill: false,
          lineTension: 0.1,
          borderColor: 'rgba(192, 75, 75, 1)',
          borderWidth: 2,
          data: heightValues,
        },
        {
          label: 'Weight',
          fill: false,
          lineTension: 0.1,
          borderColor: 'rgba(75, 75, 192, 1)',
          borderWidth: 2,
          data: weightValues,
        },
      ],
    };
  };
    const BMIGraphOptions = {
      scales: {
        y: {

          suggestedMin: 50,
        },
      },
    };

  
  
// Add a function with setdatecondtiton, last setupid, uid with all info use axios.get set the response to mealData
function handleDateChange(date){
  setdatecondition(date)
  setSelectedDate(date)
  console.log(upid)

  CareCalories.get(`/api/getmealrecordfullinfo/${id}`, {
      params:{upid: upid, mrdate: dateFormat(date, 'yyyy/mm/dd')}
    })
    .then((res) => {
        setmealData(res.data)
        console.log(res.data)
        //console.log(mealData)
    })
    setLoading(true)
    CareCalories.get(`/api/totalcalories/${id}`, {
      params:{upid: upid, mrdate: dateFormat(date, 'yyyy/mm/dd')}
    })
    .then((res) => {
        settotalmealData(res.data)
        console.log(res.data)
       //console.log(mealData)
    })

    CareCalories.get(`/api/totalMealcalories/${id}`, {
      params:{upid: upid, mrdate: dateFormat(date, 'yyyy/mm/dd')}
    })
    .then((res) => {
        setmealcalories(res.data)
        console.log(res.data)
       //console.log(mealData)
    })

}

function calculatePercentage(totalmealData, calorielimit) {
  if (totalmealData && totalmealData.length > 0) {
    // Calculate the total kcal from totalmealData
    const totalKcal = totalmealData.reduce((acc, res) => acc + res.kcal, 0);
    
    // Calculate the percentage
    return (totalKcal / calorielimit) * 100;
  } else {
    return 0; 
  }
}


const breakfastData = mealcalories.filter((data) => data.meal === 'breakfast');
const lunchData = mealcalories.filter((data) => data.meal === 'lunch');
const dinnerData = mealcalories.filter((data) => data.meal === 'dinner');
const snacksData = mealcalories.filter((data) => data.meal === 'snacks');

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
                      selected= {selectedDate}
                      dateFormat="dd/MM/yyyy"
                      onChange={(date) => handleDateChange(date)}
                      className="calendar-input"
                    />
                  </div>
                )}
              </div>
              <div className="text-wrapper">
              {`Today(${dateFormat(selectedDate,"dd/mm/yyyy")})`}
              </div>
              <div className="overlap-group">
                <div className="overlap">
                  <div className="div">
                    <div className="text-wrapper-2">Calories Taken</div>
                    

                    {totalmealData[0] ? totalmealData.map((res, index)=>{
                  
                      return <div className="text-wrapper-3" key={index}>{res.kcal}/{calorielimit} </div>
                    }):(<div className="text-wrapper-3">0/{calorielimit} </div>)}
                  </div>

                  
                  
                  <div className="datavi-circle">
                    <div style={{ width: 265, height: 300 }}>
                      <CircularProgressbar
                        value={calculatePercentage(totalmealData, calorielimit)}
                        text={`${calculatePercentage(totalmealData, calorielimit).toFixed(0)}%`}
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
               
{/*                 isLoading && mealData !== null && mealData.map((data)=>{ */}
<div className="hpnewbox">
<div className="new-box">
<div className="hp-rectangle" />
<div className="hpdetails-box">
<div className="hpbox">
<div className="hpoverlap-group">
<div className="hptext-wrapper">Protein (g)</div>
<div className="hpdiv">Carbs (g)</div>
<div className="hptext-wrapper-2">Weight (g)</div>
<div className="hptext-wrapper-3">{mealData[0] && mealData[0].protein ? (mealData[0].protein.toFixed(2)) : ('0')}</div>
<div className="hptext-wrapper-4">{mealData[0] && mealData[0].carbohydate ? (mealData[0].carbohydate.toFixed(2)) : ('0')}</div>
<div className="hptext-wrapper-5">{mealData[0] && mealData[0].weight ? (mealData[0].weight.toFixed(2)) : ('0')}</div>
</div>
</div>
<div className="hpoverlap-wrapper">
<div className="hpoverlap">
<div className="hptext-wrapper-6">Saturated Fat (g)</div>
<div className="hptext-wrapper-7">Sodium (mg)</div>
<div className="hptext-wrapper-8">Cholesterol (mg)</div>
<div className="hptext-wrapper-9">{mealData[0] && mealData[0].saturatedfat ? (mealData[0].saturatedfat.toFixed(2)) : ('0')}</div>
<div className="hptext-wrapper-10">{mealData[0] && mealData[0].sodium ? (mealData[0].sodium.toFixed(2)) : ('0')}</div>
<div className="hptext-wrapper-11">{mealData[0] && mealData[0].cholestrol ? (mealData[0].cholestrol.toFixed(2)) : ('0')}</div>
</div>
</div>
<div className="hpoverlap-group-wrapper">
<div className="hpoverlap-2">
<div className="hptext-wrapper-6a">Fibre (g)</div>
<div className="hptext-wrapper-12">Fats (g)</div>
<div className="hptext-wrapper-10">{mealData[0] && mealData[0].dietaryfibre ? (mealData[0].dietaryfibre.toFixed(2)) : ('0')}</div>
<div className="hptext-wrapper-11">{mealData[0] && mealData[0].fat ? (mealData[0].fat.toFixed(2)) : ('0')}</div>
</div>
</div>
</div>
</div>
</div>
                    
                    <div className="frame-2" >
                    <div className="frame-3">
                      <div className="text-wrapper-4">breakfast:</div>
                      <div className="text-wrapper-5">{breakfastData.length > 0 ? `${breakfastData[0].kcal} ` : '0'} kcal</div>
                    </div>
                    <div className="frame-4">
                      <div className="text-wrapper-6">lunch:</div>
                      <div className="text-wrapper-7">{lunchData.length > 0 ? `${lunchData[0].kcal}` : '0'} kcal</div>
                    </div>
                    <div className="frame-5">
                      <div className="text-wrapper-8">dinner:</div>
                      <div className="text-wrapper-9">{dinnerData.length > 0 ? `${dinnerData[0].kcal} ` : '0'} kcal</div>
                    </div>
                    <div className="frame-6">
                      <div className="text-wrapper-10">snack:</div>
                      <div className="text-wrapper-11">{snacksData.length > 0 ? `${snacksData[0].kcal} ` : '0'} kcal</div>
                    </div>
                  </div>
{/*                 })} */}
                 
              </div>
            </div>
          </div>
        </div>
        


        <div className="div-4">
          <div className="users-HP">
            <div className="text-wrapper">users.</div>
            <div className='frameUser'>
              <div className="user-choiceMR2">
                {userprofile.map((data, index) => {
                  if (index === 0){
                    return <div className="group" key={data.iduserprofile}>
                    <img className="ellipse" alt="Ellipse" src={ellipse} value={index} onClick={() => toggleNameStyle(index, data.iduserprofile)}
                      style={nameStyles[index] || { color: '#567710', fontWeight: 'bold' }} />
                    <div className="text-wrapper2" style={nameStyles[index]}>{data.name}</div>
                  </div>
                  }
                  else{
                    return <div className="group" key={data.iduserprofile}>
                    <img className="ellipse" alt="Ellipse" src={ellipse} value={index} onClick={() => toggleNameStyle(index, data.iduserprofile)}
                      style={nameStyles[index] || { color: 'black', fontWeight: '400' }} />
                    <div className="text-wrapper2" style={nameStyles[index]}>{data.name}</div>
                  </div>
                  }
                  
                })}
              </div>
            </div>

            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="text-wrapper-3">Weight Progress</div>
              </div>
            </div>
            <div className="data-vi">
            <div className="weight-line-graph">
            <Line data={BMIGraphData()} options={BMIGraphOptions} />
            </div>
            </div>
          </div>
          <ComponentBuynow className="buy-food-instance" />
        </div>
      </div>

    </div>

              );

}

;export default Homepage;