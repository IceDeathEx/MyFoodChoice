import '../css/styleSignUp.css';
import imagex from '../pics/icon__circlex_.png';
import redX from '../pics/icon_circleX.png';
import image1 from '../pics/image-1.png';
import image2 from '../pics/image-2.png';

import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router';

const SignUp = () => {
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [gender, setGender] = useState('Male');
    const [accounttype] = useState('1');
    const [country, setCountry] = useState('Singapore');
    const [lifestyle, setlifestyle] = useState('Not Active');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [conditions, setConditions] = useState('Normal');
    const [dob, setdob] = useState('');
    const [loyaltypoints] = useState(1000);
    const [premium] = useState('basic')
    
    //If email is empty
    const [emailEmpty, setEmailEmpty] = useState(false)
    const [emailEmtpyMessage, setEmailEmptyMessage] = useState('')

    //If name is empty
    const [emptyName, setemptyName] = useState(false)
    const [emptyNameMsg, setEmptyNameMsg] = useState('')

    //If name is password
    const [emptyPassword, setemptyPassword] = useState(false)
    const [emptyPasswordMsg, setEmptyPasswordMsg] = useState('')

    //If name is password2
    const [emptyPassword2, setemptyPassword2] = useState(false)
    const [emptyPassword2Msg, setEmptyPassword2Msg] = useState('')

    const [emailExists, setEmailExists] = useState(false); // State to track if email exists
    const [emailExistsMessage, setEmailExistsMessage] = useState(''); // State to store the email error message
    const [passwordMatchError, setPasswordMatchError] = useState(false); // State to track password match error
    const navigate = useNavigate();

    const checkEmailAndPassword = async (e) => {
      e.preventDefault(); // Prevent the default form submission behavior

      let isEmailValid = true;
      let isPasswordValid = true;

      // Check if the email was keyed and if it does, check if email exists in database
      if(email){
        try {
          setEmailEmpty(false)
          const response = await Axios.post('http://localhost:3002/api/check-email-exists', {
            email: email,
          });
            // If the response indicates that the email exists
            if (response.data.emailExists) {
              isEmailValid = false;
              setEmailExists(true);
              setEmailExistsMessage('Email already exists. Please use a different email.');
            } else {
              setEmailExists(false);
              setEmailExistsMessage('');
            }
          } catch (error) {
            console.error('Error checking email existence:', error);
            // Handle the error appropriately
            isEmailValid = false;
          }
      }
      else{
        setEmailEmpty(true)
        setEmailEmptyMessage('Email field is empty. Please type in an email.');
      }
      //Check if name is not empty, if it is, output error message.
        if (name){
          setemptyName(false)
        }
        else{
          setemptyName(true)
          setEmptyNameMsg('Name field is empty. Please type in your name.')
        }
        // Check if passwords match
        if (password !== password2) {
          isPasswordValid = false;
          setPasswordMatchError(true);
        } else {
          setPasswordMatchError(false);
        }
        if (password){
          setemptyPassword(false)
        }
        else{
          setemptyPassword(true)
          setEmptyPasswordMsg('Password field is empty. Please type in your password.')
        }
        if (password2){
          setemptyPassword2(false)
        }
        else{
          setemptyPassword2(true)
          setEmptyPassword2Msg('Password confirmation field is empty. Please type in your password.')
        }
        // If both email and password are valid, proceed with registration
        if (isEmailValid && isPasswordValid && !emailEmpty && !emptyName) {
          submitPost();
        }
      };
      // Function to submit user registration data
      const submitPost = () => {
         // Calculate age
         const birthDate = new Date(dob);
         const currentDate = new Date();
         const age = currentDate.getFullYear() - birthDate.getFullYear();
        // Calculate BMI
          const bmi = ((weight)/ ((height/100) *(height/100)))
          Axios.post('http://localhost:3002/api/signup', {
          email: email,
          name: name,
          password: password,
          gender: gender,
          accounttype: accounttype,
          country: country,
          height: height,
          weight: weight,
          lifestyle: lifestyle,
          conditions: conditions,
          dob: dob,
          bmi: bmi,
          premium: premium,
          loyalty: loyaltypoints,
          age: age
          
        });
        navigate('/')
      };


    return (
        <div className="sign-up-pop-up">
    <div className="div">
      <form>
      <div className="text-wrapper">CareCalories.</div>

      <button className="frame" onClick={checkEmailAndPassword}><div className="text-wrapper-2">Sign Up</div></button>

      <div className="frame-2">
        <div className="text-wrapper-3">Create your account</div>
        <p className="p">Your healthy life starts here</p>
      </div>
      <div className="frame-3">
        <input className="overlap-group" placeholder="Full Name" onChange={(e)=> setName(e.target.value)}></input>
        <label className="text-wrapper-5">Name*</label>
      </div>
      <div className="frame-4">
        <input className="overlap-group" type="password" placeholder="***********" autoComplete='off' onChange={(e)=> setPassword(e.target.value)}></input>
        <label className="text-wrapper-7">Password*</label>
      </div>
      <div className="frame-5">
        <input className="overlap-group" type="password" placeholder="***********" autoComplete='off' onChange={(e)=> setPassword2(e.target.value)}></input>
        <label className="text-wrapper-8">Re-Type Password*</label>
      </div>
      <div className="frame-6">
        <input className="overlap-group" placeholder="YYYY-MM-DD" type="date" onChange={(e)=> setdob(e.target.value)}></input>
        <label className="text-wrapper-10">Date of Birth*</label>
      </div>
      <div className="overlap">
        <div className="frame-7">
          <div className="overlap-2">
            <input type="number" className="rectangle" placeholder="70" onChange={(e)=> setWeight(e.target.value)}></input>
            <div className="text-wrapper-12">Kgs</div>
          </div>
          <label className="text-wrapper-13">Weight*</label>
        </div>
        <div className="text-wrapper-14">cm</div>
        <div className="frame-8">
          <input className="div-wrapper" placeholder="171" type="number" onChange={(e)=> setHeight(e.target.value)}></input>
          <label className="text-wrapper-16">Height*</label>
        </div>
      </div>
      <div className="frame-9">
        <select className="overlap-group" placeholder="Singapore" onChange={(e)=> setCountry(e.target.value)}>
          <option>Singapore</option>
          <option>Malaysia</option>
          <option>Indonesia</option>
        </select>
        <label className="text-wrapper-18">Country*</label>
      </div>
      <div className="frame-10">
        <select className="overlap-group" value={conditions} onChange={(e) => { setConditions(e.target.value); }}>
                  <option className="text-wrapper-9b">Normal</option>
                  <option className="text-wrapper-9b">Heart Disease</option>
                  <option className="text-wrapper-9b">Asthma</option>
                  <option className="text-wrapper-9b">High Blood Pressure</option>
                  <option className="text-wrapper-9b">Diabetic</option>
                </select>
        <label className="text-wrapper-19">Medical Condition*</label>
      </div>
      <div className="frame-11">
        <input className="overlap-group" placeholder="name@example.com" onChange={(e)=> setEmail(e.target.value)}></input>
        <label className="text-wrapper-21">Email*</label>
      </div>
      <div className="frame-12">
        <select className="overlap-3" placeholder="Male" onChange={(e)=> setGender(e.target.value)}>
          <option>Male</option>
          <option>Female</option>
          <option>Prefer Not to Say</option>
        </select>
        <label className="text-wrapper-16">Gender*</label>
      </div>
      <div className="frame-13">
        <select className="overlap-4" placeholder="Active(1-2 times a week)" onChange={(e)=> setlifestyle(e.target.value)}>
          <option>Not Active(0-1 times a week)</option>
          <option>Active(1-2 times a week)</option>
          <option>Very Active(More than 3 times a week)</option>
        </select>
        <div className="overlap-5">
          <label className="text-wrapper-24">Lifestyle*</label>
        </div>
      </div>
      {/* Password Match Error Message */}
        {passwordMatchError && (
          <div className="error-container">
            <img src={redX} alt="Error Icon" className="error-icon" />
            <div className="password-match-error">
              Passwords do not match. Please retype your password.
            </div>
          </div>
        )}
        {/* Password Match Error Message */}
        {emptyName && (
          <div className="error-container">
            <img src={redX} alt="Error Icon" className="error-icon" />
            <div className="email-exists-prompt">{emptyNameMsg}</div>
          </div>
        )}

        {/* Email Error Message */}
        {emailExistsMessage && (
          <div className="error-container">
            <img src={redX} alt="Error Icon" className="error-icon" />
            <div className="email-exists-prompt">{emailExistsMessage}</div>
          </div>
        )}
        {/* Password Empty Message */}
        {emptyPassword && (
          <div className="error-container">
            <img src={redX} alt="Error Icon" className="error-icon" />
            <div className="email-exists-prompt">{emptyPasswordMsg}</div>
          </div>
        )}
        {/* Password2 Empty Message */}
        {emptyPassword2 && (
          <div className="error-container">
            <img src={redX} alt="Error Icon" className="error-icon" />
            <div className="email-exists-prompt">{emptyPassword2Msg}</div>
          </div>
        )}
        {/* Email Empty Message */}
        {emailEmpty && (
          <div className="error-container">
            <img src={redX} alt="Error Icon" className="error-icon" />
            <div className="email-exists-prompt">{emailEmtpyMessage}</div>
          </div>
        )}
      <Link to='/'><img className="icon-circle-x" alt="Icon circle x" src={imagex} /></Link>

      <div className="overlap-6">
        <img className="image" alt="Image" src={image1} />
        <img className="image-2" alt="Image" src={image2} />
      </div>
      </form>
    </div>
  </div>
     );
}

export default SignUp;