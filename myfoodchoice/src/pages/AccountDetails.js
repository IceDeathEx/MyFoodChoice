import React, {useEffect, useState} from "react";
import "../css/styleAccount.css";
import image from '../pics/ellipse-2.png'
import NavBarUser from "./NavBarUser";
import { Link } from "react-router-dom";
import Axios from "axios";
import dateFormat from 'dateformat';

const AccountDetails = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setisLoading] = useState(true)
  const id = JSON.parse(window.localStorage.getItem('account'))
  
  useEffect (()=>{
    Axios.get(`http://localhost:3002/api/getUser/${id}`).then((res)=>{  
    setUser(res.data)
    setisLoading(false)
    })
  },[])

  return (
    <div>
      <NavBarUser/>
      {isLoading ? (
        <p>Still loading</p>
      ):(
    
    <div className="account">
      <div className="div">
        <div className="text-wrapper">Hi, {user[0].name} !!</div>
        <div className="overlap">
          <div className="rectangle" />
          <Link to='/editprofile'><div className="text-wrapper-2">Edit profile</div></Link>
        </div>
        <div className="frame">
          <div className="text-wrapper-4">Email</div>
          <div className="text-wrapper-5">{user[0].email}</div>
        </div>
        <div className="frame-2">
          <div className="text-wrapper-4">Name</div>
          <div className="text-wrapper-5">{user[0].name}</div>
        </div>
        <div className="frame-3">
          <div className="text-wrapper-4">Gender</div>
          <div className="text-wrapper-5">{user[0].gender}</div>
        </div>
        <div className="frame-4">
          <div className="text-wrapper-4">Date of Birth</div>
          <div className="text-wrapper-5">{dateFormat(user[0].dob, "mmmm dS, yyyy")}</div>
        </div>
        <div className="frame-5">
          <div className="text-wrapper-4">Country</div>
          <div className="text-wrapper-5">{user[0].country}</div>
        </div>
        <div className="frame-6b">
          <div className="frame-7">
            <div className="text-wrapper-4">Height</div>
            <div className="text-wrapper-5">{user[0].height}</div>
            <div className="text-wrapper-6b">cm</div>
          </div>
        </div>
        <div className="frame-8b">
          <div className="name-wrapper">
            <div className="text-wrapper-4">Weight</div>
            <div className="text-wrapper-5">{user[0].weight}</div>
            <div className="text-wrapper-6b">kgs</div>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <div className="frame-9">
              <div className="text-wrapper-4">Lifestyle</div>
              <div className="text-wrapper-5b">{user[0].lifestyle}</div>
            </div>
          </div>
        </div>
        <div className="frame-10">
          <div className="text-wrapper-4">Health Condition</div>
          <div className="text-wrapper-5">{user[0].conditions}</div>
        </div>
        <div className="frame-11">
          <div className="overlap-3">
            <div className="frame-wrapper">
              <div className="frame-12">
                <div className="text-wrapper-4">Password Edit</div>
                <div className="text-wrapper-5">************</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-14">
          <div className="text-wrapper-4">YOUR CURRENT BMI</div>
          <div className="text-wrapper-5">{user[0].bmi}</div>
        </div>
        <div className="frame-15">
          <div className="frame-16">
          <Link to='/homepage'><div className="text-wrapper-11">upgrade</div></Link>
            <div className="text-wrapper-4">Account Type</div>
            <div className="text-wrapper-5">Basic</div>
          </div>
        </div>
        <img className="ellipse" alt="Ellipse" src={image} />
      </div>
    </div>
    )}
    </div>
  );
};

export default AccountDetails;