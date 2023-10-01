import React, {useState, useEffect } from 'react';
import { PopUpModalLogin1 } from './PopUpModalLogin1';
import { NavBarUser } from './NavBarUser';
//import '../css/styleHomePage.css'
import '../css/homepage.css'
import ComponentBuynow from './ComponentBuynow';
import TodayHp from './TodayHp';
import AchievementHP from './AchievementHP';
import UserHP from './UserHP';
import imageCheck from '../pics/icon-circle-check.png'
import imageX from '../pics/icon-circle-x.png'

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
                
                <div className="homepage-sign-up">
                <div className="healthtips-on-login">
                                        <div className="searchbar"><input type="text" className="overlap" placeholder="what you looking for?"></input></div>
                                    </div></div>
                    <div className="div-2">
                                    
        <UserHP className="users-HP-instance" />
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
          <div className="rectangle-3" />
          <div className="frame-15">
            <div className="element-5">
              <img className="img-2" alt="Icon circle check" src={imageCheck} />
              <div className="text-wrapper-22">DAY 1</div>
            </div>
            <div className="element-6">
              <img className="img-2" alt="Icon circle check" src={imageCheck} />
              <div className="text-wrapper-22">DAY 1</div>
            </div>
            <div className="element-7">
              <img className="img-2" alt="Icon circle x" src={imageX} />
              <div className="text-wrapper-23">DAY 2</div>
            </div>
            <div className="text-wrapper-24">daily streak.</div>
          </div>
        </div>
        <ComponentBuynow className="buy-food-instance" />
        <TodayHp className="today-component-instance" />
      </div>
    </div>
            
        );
    
}

export default Homepage;

{/*<div className="homepage-sign-up">
                <div className="healthtips-on-login">
                    <div className="searchbar"><input type="text" className="overlap" placeholder="what you looking for?"></input></div>
*/}