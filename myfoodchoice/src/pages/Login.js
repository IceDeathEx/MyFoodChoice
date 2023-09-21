import {React, useState} from "react";
import "../css/styleLogin.css";
import imagex from "../pics/icon__circlex_.png";
import image2 from "../pics/image-2.png";
import image1 from "../pics/image-1.png";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Axios from 'axios';
import { useAuth } from "../Utility/Auth";
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const auth = useAuth();

    function handleLogin(e){
      e.preventDefault()
      Axios.post("http://localhost:3002/api/validateLoginCreds", {username: username, password: password})
      .then((res)=>{
          if(res.data.loginCredsExists){
            console.log('Login successful');
            auth.login(username)
            navigate('/homepage', {replace: true})
          }
          else{
            console.log('Invalid Login Credentials. Please try again!')
          }
      })
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