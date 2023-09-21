import React from "react";
import "../css/styleOnBoarding.css";
import arrow from '../pics/arrow.png';
import image1 from '../pics/image-1.png';
import image2 from '../pics/image-2.png';
import Navbar1 from "./Navbar1";
import { useNavigate } from 'react-router';
import { useAuth } from '../Utility/Auth';

const Onboarding = () => {
    const navigate = useNavigate()
    const auth = useAuth()
    function Signup(){
        navigate('/signup')
    }
    //For karen to visualize
    function test(){
        console.log("See if it is still there", auth.user);
    }
    return (
        <div className="onboarding">
            <div className="overlap">
                <div className="onboarding-page">
                    <p className="living-a-bad"> Living a bad lifestyle? <br /> want some change? </p>
                    <div className="group">
                        <div className="overlap-group">
                            <p className="text-wrapper">Care for your life? CareCalories.</p>
                            <p className="div">Care for your life? CareCalories.</p>
                            <p className="p">Care for your life? CareCalories.</p>
                        </div>
                    </div>
                    <div className="overlap-2">
                        <p className="text-wrapper-2">“change starts with a click”</p>
                        <img className="arrow" alt="Arrow" src={arrow} />
                        <div className="overlap-wrapper">
                            <button className="div-wrapper" onClick={Signup}><div className="text-wrapper-3">Sign Up</div></button>
                        </div>
                    </div>
                </div>
                <img className="image" alt="pic" src={image1} />
                <img className="img" onClick={test} alt="pic" src={image2} />
                <Navbar1/>
            </div>
        </div>
    );
}

export default Onboarding;