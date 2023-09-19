import React from "react";
import "../css/styleNavbar1.css";
import { useNavigate } from 'react-router';

export const Navbar1 = () => {
  const navigate = useNavigate()
    
    function Signup(){
        navigate('/signup')
    }
    function UserLogin(){
      navigate('/login')
  }
  return (
    <nav className="navbar">
      <div className="frame">
        <div className="logo">CARECALORIES.</div>
        
        <button className="sign-up-button" onClick={Signup}>
          <div className="overlap-group">
            <div className="text-wrapper">Sign Up</div>
          </div>
        </button>
        
        <a href="">
            <button onClick={UserLogin}><div className="div">Sign In</div></button>
        </a>
        <div className="main">
          <a href=""><div className="text-wrapper-2">Home</div></a>
          <a href=""><div className="text-wrapper-3">Health Tips</div></a>
          <a href=""><div className="text-wrapper-4">Partnership</div></a>
          <a href=""><div className="text-wrapper-5">Feedback</div></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
