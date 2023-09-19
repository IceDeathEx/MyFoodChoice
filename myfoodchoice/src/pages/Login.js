import React from "react";
import "../css/styleLogin.css";
import imagex from "../pics/icon__circlex_.png";
import image2 from "../pics/image-2.png";
import image1 from "../pics/image-1.png";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import Axios from 'axios';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [postList,setPostList]=useState([]);
    const navigate = useNavigate()
    const [loginSuccess, setSuccess] = useState(true);

    useEffect(()=>{
        Axios.get("http://localhost:3002/api/get").then((data)=>
        {
            setPostList(data.data)
        });
    },[]) 

    function Signup(){
        navigate('/signuppage')
    }

    function ToHome(){
      navigate('/')
    }

    function handleLogin(e){
        e.preventDefault()
        for(var i = 0; i< postList.length; i++){
            if(postList[i].email === username && postList[i].password === password){
                console.log('Login successful');
                navigate('/homepage');
                break;
            }
            else{
                console.log('Login failure. Please try again');
                setSuccess(false);
            }
        }
    }

    return (
        <div className="App">

    <div className="login-pop-up">
      <div className="div">
        <div className="group">
          <div className="frame">
            <div className="text-wrapper">CareCalories.</div>
            <div className="frame-2">
              <div className="text-wrapper-2">Not Registered Yet?</div>
              <a href="" className="text-wrapper-3" onClick={Signup}>Create an account</a>
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
                    <input className="frame-8" type="password" placeholder="*****************" onChange={(e)=> setPassword(e.target.value)}>
              
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

        <a href="">
        <img className="icon-circle-x" onClick={ToHome} alt="Icon circle x" src={imagex}/>
        </a>
        <div className="overlap-group">
          <img className="image" alt="Image" src={image1}/>
          <img className="img" alt="Image" src={image2}/>
        </div>
      </div>
    </div>
    </div>
      );
}
 
export default Login;