import React from "react";
import FoodComp from "./FoodComp";
import Step3 from "./Step3";
import Step1n2 from "./Step1n2";
import Step4 from "./Step4";
import "../css/MealRecord.css";
import NavBarUser from './NavBarUser'
export const MealRecords = () => {
    return (
        <div>
            <NavBarUser />
            <div className="add-meal-recordMR">
                        <div className="div-3">
                        <div className="frame-22">
                        <div className="flexcontainer">
                        <p className="text">
                        <span className="span">
                        Why not start your day....
                        </span>
                        <br></br>
                        <br></br>
                        <span className="span">with</span>
                        </p>
                        
                        </div>
                        <br></br>
                        <div className="text-wrapper-60">FoodScanner™</div>
                        </div>
                        <FoodComp className="food-comp-instance"/>
                        <Step1n2 className="step-1n-2" />
                        <Step3 className="step-3" />
                        <Step4 className="step-4" />
                        <div className="frame-wrapper">
                        <button className="frame-23">
                        <div className="text-wrapper-61">create meal now</div>
                        </button>
                        </div>
                        </div>
                        </div>
                                 
        </div>
    );
};
