import '../css/styleSignUp.css';
import imagex from '../pics/icon__circlex_.png';
import image1 from '../pics/image-1.png';
import image2 from '../pics/image-2.png';
import vector from '../pics/Vector.png';

import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [gender, setGender] = useState('Male');
    const [accounttype, setAccountType] = useState('1');
    const [accounttype2, setAccountType2] = useState('');
    const [country, setCountry] = useState('Singapore');
    const [lifestyle, setlifestyle] = useState('Not Active');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [conditions, setConditions] = useState('Normal');
    const [dob, setdob] = useState('');
    const [bmi, setbmi] = useState('');

    const [emailExists, setEmailExists] = useState(false); // State to track if email exists
    const [emailExistsMessage, setEmailExistsMessage] = useState(''); // State to store the email error message
    const [passwordMatchError, setPasswordMatchError] = useState(false); // State to track password match error
    const navigate = useNavigate();

      const checkEmailAndPassword = async () => {
      let isEmailValid = true;
      let isPasswordValid = true;

      // Check if the email exists
      try {
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

        // Check if passwords match
        if (password !== password2) {
          isPasswordValid = false;
          setPasswordMatchError(true);
        } else {
          setPasswordMatchError(false);
        }

        // If both email and password are valid, proceed with registration
        if (isEmailValid && isPasswordValid) {
          submitPost();
        }
      };

      const calculateBMI = (height, weight) => {
      const heightInMeters = height / 100; // Convert height from cm to meters
      return weight / (heightInMeters * heightInMeters);
};
      // Function to submit user registration data
      const submitPost = () => {
        // Calculate BMI
        const calculatedBMI = calculateBMI(height, weight);

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
          bmi: calculatedBMI
        });
        navigate('/');
      };
      function ToHome(){
        navigate('/')
      }

    return (
        <div className="sign-up-pop-up">
    <div className="div">
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
        <input className="overlap-group" type="password" placeholder="***********" onChange={(e)=> setPassword(e.target.value)}></input>
        <label className="text-wrapper-7">Password*</label>
      </div>
      <div className="frame-5">
        <input className="overlap-group" type="password" placeholder="***********" onChange={(e)=> setPassword2(e.target.value)}></input>
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
          <img className="vector" alt="Vector" src={vector} />
        </select>
        <label className="text-wrapper-18">Country*</label>
      </div>
      <div className="frame-10">
        <input type="text" className="overlap-group" placeholder="Normal" onChange={(e)=> setConditions(e.target.value)}></input>
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
          <img className="ph-caret-down-fill" alt="Ph caret down fill" src={vector} />
        </select>
        <label className="text-wrapper-16">Gender*</label>
      </div>
      <div className="frame-13">
        <select className="overlap-4" placeholder="Active(1-2 times a week)" onChange={(e)=> setlifestyle(e.target.value)}>
          <option>Not Active(0-1 times a week)</option>
          <option>Active(1-2 times a week)</option>
          <option>Very Active(More than 3 times a week)</option>
          <img className="img" alt="Vector" src={vector} />
        </select>
        <div className="overlap-5">
          <label className="text-wrapper-24">Lifestyle*</label>
        </div>
      </div>
      {/* Password Match Error Message */}
        {passwordMatchError && (
          <div className="password-match-error">
            Passwords do not match. Please retype your password.
          </div>
        )}
        {/* Email Error Message */}
        {emailExistsMessage && (
              <div className="email-exists-prompt">
                {emailExistsMessage}
              </div>
            )}
      <a href="">
      <img className="icon-circle-x" onClick={ToHome} alt="Icon circle x" src={imagex} />
      </a>
      <div className="overlap-6">
        <img className="image" alt="Image" src={image1} />
        <img className="image-2" alt="Image" src={image2} />
      </div>
    </div>
  </div>
     );
}

export default SignUp;