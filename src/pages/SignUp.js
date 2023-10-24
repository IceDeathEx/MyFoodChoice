import '../css/styleSignUp.css';
import imagex from '../pics/icon__circlex_.png';
import redX from '../pics/icon_circleX.png';
import image1 from '../pics/image-1.png';
import image2 from '../pics/image-2.png';

import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import CareCalories from "../server/config/CareCalories";

const SignUp = () => {
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [gender, setGender] = useState('Male');
    const [accounttype] = useState('user');
    const [country, setCountry] = useState('Singapore');
    const [lifestyle, setlifestyle] = useState('Not Active');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [conditions, setConditions] = useState('Normal');
    const [dob, setdob] = useState('');
    const loyaltypoints = 1000;
    const [premium] = useState('basic')
    
    //If email is empty
    const [emailEmpty, setEmailEmpty] = useState(false)
    const [emailEmtpyMessage, setEmailEmptyMessage] = useState('')

    //If name is empty
    const [emptyName, setemptyName] = useState(false)
    const [emptyNameMsg, setEmptyNameMsg] = useState('')

    //If password is empty
    const [emptyPassword, setemptyPassword] = useState(false)
    const [emptyPasswordMsg, setEmptyPasswordMsg] = useState('')

    //If password2 is empty
    const [emptyPassword2, setemptyPassword2] = useState(false)
    const [emptyPassword2Msg, setEmptyPassword2Msg] = useState('')

    //If Height is empty
    const [emptyHeight, setemptyHeight] = useState(false)
    const [emptyHeightMsg, setEmptyHeightMsg] = useState('')

    //If Weight is empty
    const [emptyWeight, setemptyWeight] = useState(false)
    const [emptyWeightMsg, setEmptyWeightMsg] = useState('')

    //If Dob is empty
    const [emptydob, setemptydob] = useState(false)
    const [emptydobMsg, setemptydobMsg] = useState('')

     //Invalid age 
     const [invalidAge, setInvalidAge] = useState(false); 
     const [invalidAgeMsg, setInvalidAgeMsg] = useState(''); 
 
    //Email Exist 
    const [emailExists, setEmailExists] = useState(false); // State to track if email exists
    const [emailExistsMessage, setEmailExistsMessage] = useState(''); // State to store the email error message

    //Valid Email 
    const [validemail, setvalidemail] = useState(false);
    const [validemailMsg, setvalidemailMsg] = useState('');

    //Password mismatch error
    const [passwordMatchError, setPasswordMatchError] = useState(false); // State to track password match error
    
    const navigate = useNavigate();

    const checkEmailAndPassword = async (e) => {
      e.preventDefault(); // Prevent the default form submission behavior

      let isPasswordValid = true;
      

      // Check if the email was keyed and if it does, check if email exists in database
      if(email){
        try {
          for (var i = 0; i < email.length; i++){
            if(email[i] === '@'){
              setvalidemail(false)
              break
            }
            else{
              setvalidemail(true)
              setvalidemailMsg('Email is without an "@" symbol.')
            }
          }
          setEmailEmpty(false)
          const response = await CareCalories.post('/api/check-email-exists', {
            email: email,
          });
            // If the response indicates that the email exists
            if (response.data.emailExists) {
              setEmailExists(true);
              setEmailExistsMessage('Email already exists. Please use a different email.');
            //  console.log(1)
            } else {
              setEmailExists(false);
              setEmailExistsMessage('');
            //  console.log(2)
            }
          } catch (error) {
            console.error('Error checking email existence:', error);
          }
      }
      else{
        setEmailEmpty(true)
       // console.log(3)
        setEmailEmptyMessage('Please type in your email.');
      }
      //Check if name is not empty, if it is, output error message.
        if (name){
          setemptyName(false)
         // console.log(4)
        }
        else{
          setemptyName(true)
          setEmptyNameMsg('Please type in your name')
        //  console.log(5)
        }
        // Check if passwords match
        if (password !== password2) {
          isPasswordValid = false;
          setPasswordMatchError(true);
         // console.log(6)
        } else {
          setPasswordMatchError(false);
        }
        if (password){
          setemptyPassword(false)
         // console.log(7)
        }
        else{
          setemptyPassword(true)
          setEmptyPasswordMsg('Please type in your password')
         // console.log(8)
        }
        if (password2){
          setemptyPassword2(false)
         // console.log(9)
        }
        else{
          setemptyPassword2(true)
          setEmptyPassword2Msg('Please type in your confirm password')
          //console.log(10)
        }
        if(height < 1 || height === null){
          setemptyHeight(true)
          setEmptyHeightMsg('Please indicate a valid height value')
          //console.log(18)
        }
        else{
          setemptyHeight(false)
          //console.log(19)
        }
        if(weight < 1 || weight === null){
          setemptyWeight(true)
          setEmptyWeightMsg('Please indicate a valid weight value')
          //console.log(20)
        }
        else{
          setemptyWeight(false)
          //console.log(21)
        }
        if (dob){
          setemptydob(false)
          //console.log(16)
        }
        else{
          setemptydob(true)
          //console.log(17)
          setemptydobMsg('Please indicate date of birth.')
        }
        
        console.log(emailExists, isPasswordValid, emailEmpty, emptyName, emptyHeight, emptyWeight, emptyPassword2, emptyPassword, validemail, height, emptydob, weight, password, password2, name, email, dob)
        // If both email and password are valid, proceed with registration
        if (!emailExists && isPasswordValid && !emailEmpty && !emptyName && !emptyHeight && !emptyWeight && !emptyPassword2 && !emptyPassword && !emptydob && !validemail && height && weight && password && password2 && name && email && dob) {
          //console.log(15)
          submitPost();
        }
      };
      // Function to submit user registration data
      const submitPost = () => {
         // Calculate age
         const birthDate = new Date(dob);
         const currentDate = new Date();
         var calorie = 2500
         if(gender === 'Female'){
          calorie = 2000
         }
         else{
          calorie = 2500
         }
         const age = currentDate.getFullYear() - birthDate.getFullYear();
          // Calculate BMI
          const bmi = ((weight)/ ((height/100) *(height/100)))
         if(age < 1){
          setInvalidAge(true)
          setInvalidAgeMsg('Please enter an age 1 year or older.')
         }else{
          CareCalories.post('/api/signup', {
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
            age: age,
            calorie: calorie
          });
          navigate('/login')
         }
      };


    return (
        <div className="sign-up-pop-up">
    <div className="div">
      <form>
      <div className="text-wrapper">CareCalories.</div>

      <div className="text-wrapper-2"><button className="frame" onClick={checkEmailAndPassword}>Sign Up</button></div>

      <div className="frame-2">
        <div className="text-wrapper-3">Create your account</div>
        <p className="p">Your healthy life starts here</p>
      </div>
      <div className="frame-3">
        <input className="overlap-group" placeholder="&nbsp;&nbsp;Full Name" onChange={(e)=> setName(e.target.value)}></input>
        <label className="text-wrapper-5">Name*</label>
      </div>
      <div className="frame-4">
        <input className="overlap-group" type="password" placeholder="&nbsp;&nbsp;***********" autoComplete='off' onChange={(e)=> setPassword(e.target.value)}></input>
        <label className="text-wrapper-7">Password*</label>
      </div>
      <div className="frame-5">
        <input className="overlap-group" type="password" placeholder="&nbsp;&nbsp;***********" autoComplete='off' onChange={(e)=> setPassword2(e.target.value)}></input>
        <label className="text-wrapper-8">Re-Type Password*</label>
      </div>
      <div className="frame-6">
        <input className="overlap-group change100" placeholder="&nbsp;&nbsp;" type="date" onChange={(e)=> setdob(e.target.value)}></input>
        <label className="text-wrapper-10">Date of Birth*</label>
      </div>
      <div className="overlap">
        <div className="frame-7">
          <div className="overlap-2">
            <input type="number" className="rectangle" placeholder="&nbsp;&nbsp; 70" onChange={(e)=> setWeight(e.target.value)}></input>
            <div className="text-wrapper-12">Kgs</div>
          </div>
          <label className="text-wrapper-13">Weight*</label>
        </div>
        <div className="text-wrapper-14">cm</div>
        <div className="frame-8">
          <input className="div-wrapper" placeholder="&nbsp;&nbsp; 171" type="number" onWheel={(e) => e.target.blur()} onChange={(e)=> setHeight(e.target.value)}></input>
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
        <input className="overlap-group" placeholder="&nbsp;&nbsp; name@example.com" type="email" onChange={(e)=> setEmail(e.target.value)}/>
        <label className="text-wrapper-21">Email*</label>
      </div>
      <div className="frame-12">
        <select className="overlap-3" placeholder="Male" onChange={(e)=> setGender(e.target.value)}>
          <option>Male</option>
          <option>Female</option>
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
            <div className="customised-container">
            <img src={redX} alt="Error Icon" className="error-icon" />
            <div className="password-match-error">Passwords do not match. Please retype your password.</div>
            </div>
          </div>
        )}
        {/* Password Match Error Message */}
        {invalidAge && (
          <div className="error-container">
            <div className="customised-container">
            <img src={redX} alt="Error Icon" className="error-icon" />
            <div className="password-match-error">{invalidAgeMsg}</div>
            </div>
          </div>
        )}
        {/* Password Match Error Message */}
        {validemail && (
          <div className="error-container">
            <div className="customised-container">
            <img src={redX} alt="Error Icon" className="error-icon" />
            <div className="password-match-error">{validemailMsg}</div>
            </div>
          </div>
        )}
        {/* Password Match Error Message */}
        {emptyName && (
          <div className="error-container">
            <div className="customised-container">
            <img src={redX} alt="Error Icon" className="error-icon" />
            <div className="email-exists-prompt">{emptyNameMsg}</div>
            </div>
          </div>
        )}

        {/* Email Error Message */}
        {emailExistsMessage && (
          <div className="error-container">
            <div className="customised-container">
            <img src={redX} alt="Error Icon" className="error-icon" />
            <div className="email-exists-prompt">{emailExistsMessage}</div>
            </div>
          </div>
        )}
         {/* dob empty Message */}
         {emptydob && (
          <div className="error-container">
            <div className="customised-container">
            <img src={redX} alt="Error Icon" className="error-icon" />
            <div className="email-exists-prompt">{emptydobMsg}</div>
            </div>
          </div>
        )}
        {/* Password Empty Message */}
        {emptyPassword && (
          <div className="error-container">
            <div className="customised-container">
            <img src={redX} alt="Error Icon" className="error-icon" />
            <div className="email-exists-prompt">{emptyPasswordMsg}</div>
            </div>
          </div>
        )}
        {/* Password2 Empty Message */}
        {emptyPassword2 && (
          <div className="error-container">
            <div className="customised-container">
            <img src={redX} alt="Error Icon" className="error-icon" />
            <div className="email-exists-prompt">{emptyPassword2Msg}</div>
            </div>
          </div>
        )}
        {/* Email Empty Message */}
        {emailEmpty && (
          <div className="error-container">
            <div className="customised-container">
            <img src={redX} alt="Error Icon" className="error-icon" />
            <div className="email-exists-prompt">{emailEmtpyMessage}</div>
            </div>
          </div>
        )}
        {/* Height Empty Message */}
        {emptyHeight && (
          <div className="error-container">
            <div className="customised-container">
            <img src={redX} alt="Error Icon" className="error-icon" />
            <div className="email-exists-prompt">{emptyHeightMsg}</div>
            </div>
          </div>
        )}
        {/* Weight Empty Message */}
        {emptyWeight && (
          <div className="error-container">
            <div className="customised-container">
            <img src={redX} alt="Error Icon" className="error-icon" />
            <div className="email-exists-prompt">{emptyWeightMsg}</div>
            </div>
          </div>
        )}
      <Link to='/'><img className="icon-circle-x" alt="Icon circle x" src={imagex} /></Link>

      <div className="overlap-6">
        <img className="image" alt="Burger" src={image1} />
        <img className="image-2" alt="Salad" src={image2} />
      </div>
      </form>
    </div>
  </div>
     );
}

export default SignUp;