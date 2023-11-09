import React from "react";
import "../css/styleOnBoarding.css";
import arrow from '../pics/arrow.png';
import image1 from '../pics/image-1.png';
import image2 from '../pics/image-2.png';
import Navbar1 from "./Navbar1";
import { useNavigate } from 'react-router';

const Onboarding = () => {
    const navigate = useNavigate()
    function Signup(){
        navigate('/signup')
    }

    return (
        <div className='all'>
            <Navbar1/>
        
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
                <img className="img" alt="pic" src={image2} />
                
            </div>
        </div>
        </div>
    );
}

export default Onboarding;