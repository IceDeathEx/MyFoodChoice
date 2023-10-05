import React from "react";
import "../css/step1n2style.css";
import vector from "../pics/vector3.png";

const Step1n2 = () => {
    return (
        <div className="step">
            <div className="frame">
                <div className="overlap-group">
                    <div className="eat-something-today">eat&nbsp;&nbsp;something today?</div>
                    <div className="text-wrapper">step 1.</div>
                </div>
            </div>
            <div className="component">
                <div className="overlap">
                    <div className="photo" />
                </div>
                <div className="div">FoodScanner™</div>
                <p className="p">this is a chicken rice</p>
                <div className="frame-2">
                    <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                            <button className="rectangle">
                            <div className="text-wrapper-2">camera on</div>
                            </button>
                        </div>
                    </div>
                    <div className="overlap-wrapper">
                        <div className="overlap-2">
                            <button className="rectangle">
                            <div className="text-wrapper-3">take photo</div>
                            </button>
                        </div>
                    </div>
                    <div className="overlap-wrapper">
                        <div className="overlap-3">
                            <button className="rectangle-2">
                            <div className="text-wrapper-4">identify</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="div-wrapper">
                    <div className="overlap-2">
                        <button className="rectangle-3">
                        <div className="text-wrapper-5">import a photo</div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="frame-3">
                <div className="text-wrapper-6">scan your food with</div>
                <p className="text-wrapper-7">or you can search it manually here!</p>
                <div className="text-wrapper-8">FoodScanner™</div>
                <div className="text-wrapper-9">step 2.</div>
                <div className="clicked-box-wrapper">
                    <div className="clicked-box">
                        <div className="details-box">
                            <div className="box">
                                <div className="overlap-group-3">
                                    <div className="text-wrapper-10">protein</div>
                                    <div className="text-wrapper-11">carbs</div>
                                    <div className="text-wrapper-12">sugar</div>
                                    <div className="text-wrapper-13">14g</div>
                                    <div className="text-wrapper-14">14g</div>
                                    <div className="text-wrapper-15">14g</div>
                                </div>
                            </div>
                            <div className="box-2">
                                <div className="overlap-4">
                                    <div className="text-wrapper-16">saturated fat</div>
                                    <div className="text-wrapper-17">sodium</div>
                                    <div className="text-wrapper-18">cholesterol</div>
                                    <div className="text-wrapper-19">14g</div>
                                    <div className="text-wrapper-20">14g</div>
                                    <div className="text-wrapper-21">14g</div>
                                </div>
                            </div>
                            <div className="box-3">
                                <div className="overlap-5">
                                    <div className="text-wrapper-16">Fibre</div>
                                    <div className="text-wrapper-22">total fat</div>
                                    <div className="text-wrapper-23">natrium</div>
                                    <div className="text-wrapper-19">14g</div>
                                    <div className="text-wrapper-20">14g</div>
                                    <div className="text-wrapper-21">14g</div>
                                </div>
                            </div>
                        </div>
                        <div className="food">
                            <div className="rectangle-4" />
                            <div className="frame-4">
                                <div className="radio" />
                                <div className="frame-5">
                                    <div className="text-wrapper-24">chicken rice</div>
                                    <div className="text-wrapper-25">500 cal</div>
                                    <div className="text-wrapper-26">Encik Tan Curry</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-bar-MR">
                    <input className="label" placeholder="   what u eat?"/>
                    <img className="vector" alt="Vector" src={vector} />
                </div>
            </div>
            <img className="arrow" alt="Arrow" src="arrow-7.svg" />
        </div>
    );
};

export default Step1n2;