import React from "react";
import "../css/styleNavbar1.css";
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";

export const Navbar1 = () => {
  const navigate = useNavigate()
    
    function Signup(){
        navigate('/signup')
    }
  return (
    <nav className="navbar">
      <div className="frame-ob">
        <div className="logo">CARECALORIES.</div>
        
        <button className="sign-up-button" onClick={Signup}>
          <div className="overlap-group">
            <div className="text-wrapper">Sign Up</div>
          </div>
        </button>
        
        <Link to ='/login'><div className="div">Sign In</div></Link>

        <div className="main">
          <Link to='/'><div className="text-wrapper-2">Home</div></Link>
          <Link to='/healthtips1'><div className="text-wrapper-3">About Us</div></Link>
          <Link to='/'><div className="text-wrapper-4">Partnership</div></Link>
          <Link to='/'><div className="text-wrapper-5">Review</div></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
