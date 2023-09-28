import {React, useState} from "react";
import "../css/styleLogin.css";
import imagex from "../pics/icon__circlex_.png";
import image2 from "../pics/image-2.png";
import image1 from "../pics/image-1.png";
import { useNavigate } from "react-router";
import { Link, useLocation } from "react-router-dom";
import Axios from 'axios';
import { PopUpModalLogin2 } from "./PopUpModalLogin2";
import { useSignIn } from 'react-auth-kit'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const [invalidMsg, setInvalidMsg] = useState(false);
    const signIn = useSignIn()
    const location = useLocation()
    

    function handleLogin(e){
      //Setting error message to false to prevent it from showing.
      setInvalidMsg(false)
      //Stop the page from refreshing
      e.preventDefault()
      //Storing the path in local Storage for access once login
      window.localStorage.setItem('path', JSON.stringify(location))
      //Using axios to check for login Creds.
      Axios.post("http://localhost:3002/api/validateLoginCreds", {username: username, password: password})
      .then((res)=>{
          if(res.status === 200){
            //Can use res.data.user[0].columnName to get the user details from here.
            console.log('Login successful');
            window.localStorage.setItem('account', JSON.stringify(res.data.user[0].id))
            if(signIn(
              {
                  token: res.data.token,
                  expiresIn: 3600,
                  tokenType: "Bearer",
                  authState: {username: username},
              }
          ))
          //Checking if its a user.
          if(res.data.user[0].accountType.toString() === 'user'){
              navigate('/homepage', {replace: true})
          }
          else{
            //Later will be changed to system admin's page.
            navigate('/healthtips', {replace: true})
          }
            
          }
          //If failure to login, error message is prompted.
          else{
            setInvalidMsg(true)
            console.log('Invalid Login Credentials. Please try again!')
          }
      })
    }

    return (
        <div className="App">
        {invalidMsg && <PopUpModalLogin2/>}
    <div className="login-pop-up">
      <div className="div"> 
        <div className="group">
          <div className="frame">
            <div className="text-wrapper">CareCalories.</div>
            <div className="frame-2">
              <div className="text-wrapper-2">Not Registered Yet?</div>
              <Link to='/signup' className="text-wrapper-3">Create an account</Link>
            </div>
            <div className="frame-wrapper">
              <div className="frame-3">
                <div className="text-wrapper-4">Login to your Account</div>
                <p className="p">Your healthy life starts here</p>
              </div>
            </div>
            <p className="sign-in-with-email">
              <span className="span">-------------</span>
              <span className="text-wrapper-5"> Sign in with Email </span>
              <span className="span">------------- </span>
              
            </p>
            <form>
            <div className="frame-4">
            
              <div className="frame-5">
                <div className="frame-6">
                  <label className="text-wrapper-6">Email</label>
                  <input className="div-wrapper" type="text" placeholder="mail@abc.com" onChange={(e)=> setUsername(e.target.value)}>
                  </input>
                </div>
                <div className="frame-7">
                  <div className="frame-6">
                    <label className="text-wrapper-6">Password</label>
                    <input className="frame-8" type="password" placeholder="*****************" autoComplete='off' onChange={(e)=> setPassword(e.target.value)}>
                
                    </input>
                    
                  </div>
                </div>
              </div>
              <button className="frame-9" onClick={handleLogin}>
                <div className="text-wrapper-9">Login</div>
              </button>
            </div>
            
            </form>
          </div>
        </div>

        <Link to ='/'><img className="icon-circle-x" alt="Icon circle x" src={imagex}/></Link>
        <div className="overlap-group">
          <img className="image" alt="pic" src={image1}/>
          <img className="img" alt="pic" src={image2}/>
        </div>
      </div>
    </div>
    </div>
      );
}
 
export default Login;