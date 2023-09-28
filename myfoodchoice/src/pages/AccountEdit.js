import React from "react";
import "../css/styleAccount.css";
import image from '../pics/ellipse-2.png'
import { NavBarUser } from "./NavBarUser";
import { Link } from "react-router-dom";

const AccountEdit = () => {
    return ( 
        <div>
            <NavBarUser/>
        <div className="account">
        <div className="div">
          <div className="text-wrapper">Hi, JOHN DOE !!</div>
          <div className="overlap">
            <button className="rectangle">
            <Link to='/account'><div className="text-wrapper-2">Confirm</div></Link>
            </button>
          </div>
          <div className="overlap-group">
            <button className="rectangle-2">
            <Link to='/account'><div className="text-wrapper-3">cancel</div></Link>
            </button>
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
              <input type='number' className="div-wrapper" placeholder='171'></input>
            </div>
          </div>
          <div className="frame-8">
            <div className="name-wrapper">
              <div className="text-wrapper-4">Weight</div>
            </div>
            <div className="text-wrapper-6">kgs</div>
            <div className="group">
              <input type='number' className="div-wrapper" placeholder='100'>
              </input>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-2">
              <div className="frame-9">
                <div className="text-wrapper-4">Lifestyle</div>
              </div>
              <div className="group-wrapper">
                <div className="overlap-group-wrapper">
                  <select className="overlap-group-2">
                    <option className="text-wrapper-8">Active(1-2 times a week)</option>
                    <option className="text-wrapper-8">Active(1-2 times a week)</option>
                    <option className="text-wrapper-8">Active(1-2 times a week)</option>
                    <option className="text-wrapper-8">Active(1-2 times a week)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-10">
            <div className="text-wrapper-4">Health Condition</div>
            <div className="group-2">
              <select className="overlap-group-3">
                <option className="text-wrapper-9">Active(1-2 times a week)</option>
                <option className="text-wrapper-9">Active(1-2 times a week)</option>
                <option className="text-wrapper-9">Active(1-2 times a week)</option>
                <option className="text-wrapper-9">Active(1-2 times a week)</option>
              </select>
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
                  <input className="overlap-group-4" placeholder='****************'>
                  </input>
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
              <a href="" className="text-wrapper-11">upgrade</a>
              <div className="text-wrapper-4">Account Type</div>
              <div className="text-wrapper-5">Basic</div>
            </div>
          </div>
          <img className="ellipse" alt="Ellipse" src={image} />
        </div>
      </div>
      </div>
     );
}
 
export default AccountEdit;