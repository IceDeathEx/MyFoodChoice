import React, {useEffect, useState} from "react";
import "../css/styleAccount.css";
import image from '../pics/ellipse-2.png'
import { NavBarUser } from "./NavBarUser";
import { Link } from "react-router-dom";

const AccountDetails = () => {
  const [user, setUser] = useState(null)
  
  useEffect = () =>{
    const user = JSON.parse(window.localStorage.getItem("account"))
    console.log(user)
  }
  function handleUpgrade(){
    console.log(user)
  }

  
  return (
    <div>
      <NavBarUser/>

    <div className="account">
      <div className="div">
        <div className="text-wrapper">Hi, JOHN DOE !!</div>
        <div className="overlap">
          <div className="rectangle" />
          <Link to='/editprofile'><div className="text-wrapper-2">Edit profile</div></Link>
        </div>
        <div className="frame">
          <div className="text-wrapper-4">Email</div>
          <div className="text-wrapper-5">johndoe@xyz.com</div>
        </div>
        <div className="frame-2">
          <div className="text-wrapper-4">Name</div>
          <div className="text-wrapper-5">John Doe</div>
        </div>
        <div className="frame-3">
          <div className="text-wrapper-4">Gender</div>
          <div className="text-wrapper-5">Male</div>
        </div>
        <div className="frame-4">
          <div className="text-wrapper-4">Date of Birth</div>
          <div className="text-wrapper-5">23/12/2005</div>
        </div>
        <div className="frame-5">
          <div className="text-wrapper-4">Country</div>
          <div className="text-wrapper-5">Singaporean</div>
        </div>
        <div className="frame-6">
          <div className="frame-7">
            <div className="text-wrapper-4">Height</div>
          </div>
          <div className="text-wrapper-6">cm</div>
          <div className="group">
            <div className="div-wrapper">
              <div className="text-wrapper-7">171</div>
            </div>
          </div>
        </div>
        <div className="frame-8">
          <div className="name-wrapper">
            <div className="text-wrapper-4">Weight</div>
          </div>
          <div className="text-wrapper-6">kgs</div>
          <div className="group">
            <div className="div-wrapper">
              <div className="text-wrapper-7">100</div>
            </div>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <div className="frame-9">
              <div className="text-wrapper-4">Lifestyle</div>
            </div>
            <div className="group-wrapper">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="text-wrapper-8">Active(1-2 times a week)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-10">
          <div className="text-wrapper-4">Health Condition</div>
          <div className="group-2">
            <div className="overlap-group-3">
              <div className="text-wrapper-9">Active(1-2 times a week)</div>
            </div>
          </div>
        </div>
        <div className="frame-11">
          <div className="overlap-3">
            <div className="frame-wrapper">
              <div className="frame-12">
                <div className="text-wrapper-4">Password Edit</div>
              </div>
            </div>
            <div className="frame-13">
              <div className="group-3">
                <div className="overlap-group-4">
                  <div className="text-wrapper-10">************</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-14">
          <div className="text-wrapper-4">YOUR CURRENT BMI</div>
          <div className="text-wrapper-5">19.1</div>
        </div>
        <div className="frame-15">
          <div className="frame-16">
            <button onClick={handleUpgrade}><div className="text-wrapper-11">upgrade</div></button>
            <div className="text-wrapper-4">Account Type</div>
            <div className="text-wrapper-5">Basic</div>
          </div>
        </div>
        <img className="ellipse" alt="Ellipse" src={image} />
      </div>
    </div>
    </div>
  );
};

export default AccountDetails;