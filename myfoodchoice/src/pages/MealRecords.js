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
        
        <div className="add-meal-record">
            <div className="div-2">
                <div className="frame-22">
                    <div className="overlap-group-6">
                        <div className="flexcontainer">
                            <p className="text">
                                <span className="span">
                                    Why not start your day....
                                    <br />
                                </span>
                            </p>
                            <p className="text">
                                <span className="span">with</span>
                            </p>
                        </div>
                        <div className="text-wrapper-60">FoodScanner™</div>
                    </div>
                </div>
                <Step3 className="step-3" />
                <Step4 className="step-4" />
                <div className="frame-23">
                    <button className="frame-24">
                        <div className="text-wrapper-61">create meal now</div>
                    </button>
                </div>
                <Step1n2 lassName="step-1n-2" />
                <FoodComp className="food-comp-instance" />
            </div>
        </div>
        </div>
    );
};
