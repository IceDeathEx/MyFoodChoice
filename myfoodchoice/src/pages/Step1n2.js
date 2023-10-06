import React from "react";
import "../css/step1n2style.css";
import step from "@tensorflow/tfjs-core";
import vector from '../pics/vector3.png';
import arrow from '../pics/arrow-7.svg';
const Step1n2 = () => {
    return (
        <div className="step">
            <div className="overlap">
                <div className="frame">
                    <div className="overlap-group">
                        <div className="eat-something-today">eat&nbsp;&nbsp;something today?</div>
                        <div className="text-wrapper">step 1.</div>
                    </div>
                </div>
                <div className="div">
                    <div className="component">
                        <div className="photo-wrapper">
                            <div className="photo" />
                        </div>
                        <div className="text-wrapper-2">FoodScanner™</div>
                        <p className="p">this is a chicken rice</p>
                        <div className="frame-2">
                            <div className="overlap-group-wrapper">
                                <div className="overlap-group-2">
                                    <button className="rectangle" >
                                    <div className="text-wrapper-3">camera on</div>
                                    </button>
                                </div>
                            </div>
                            <div className="overlap-wrapper">
                                <div className="overlap-2">
                                    <button className="rectangle">
                                    <div className="text-wrapper-4">take photo</div>
                                    </button>
                                </div>
                            </div>
                            <div className="overlap-wrapper">
                                <div className="overlap-3">
                                    <button className="rectangle-2">
                                    <div className="text-wrapper-5">identify</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="div-wrapper">
                            <div className="overlap-2">
                                <button className="rectangle-3">
                                <div className="text-wrapper-6">import a photo</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <img className="arrow" alt="Arrow" src={arrow} />
                </div>
                <div className="frame-3">
                    <div className="text-wrapper-7">step 2.</div>
                    <div className="text-wrapper-8">scan your food with</div>
                    <div className="text-wrapper-9">FoodScanner™</div>
                    <p className="text-wrapper-10">or you can search it manually here!</p>
                    <div className="search-bar-MR">
                        <input className="label" placeholder="   what you eating?"/>
                        
                        <img className="vector" alt="Vector" src={vector} />
                    </div>
                    <div className="clicked-box-wrapper">
                        <div className="clicked-box">
                            <div className="details-box">
                                <div className="box">
                                    <div className="overlap-group-3">
                                        <div className="text-wrapper-12">protein</div>
                                        <div className="text-wrapper-13">carbs</div>
                                        <div className="text-wrapper-14">sugar</div>
                                        <div className="text-wrapper-15">14g</div>
                                        <div className="text-wrapper-16">14g</div>
                                        <div className="text-wrapper-17">14g</div>
                                    </div>
                                </div>
                                <div className="box-2">
                                    <div className="overlap-4">
                                        <div className="text-wrapper-18">saturated fat</div>
                                        <div className="text-wrapper-19">sodium</div>
                                        <div className="text-wrapper-20">cholesterol</div>
                                        <div className="text-wrapper-21">14g</div>
                                        <div className="text-wrapper-22">14g</div>
                                        <div className="text-wrapper-23">14g</div>
                                    </div>
                                </div>
                                <div className="box-3">
                                    <div className="overlap-5">
                                        <div className="text-wrapper-18">Fibre</div>
                                        <div className="text-wrapper-24">total fat</div>
                                        <div className="text-wrapper-25">natrium</div>
                                        <div className="text-wrapper-21">14g</div>
                                        <div className="text-wrapper-22">14g</div>
                                        <div className="text-wrapper-23">14g</div>
                                    </div>
                                </div>
                            </div>
                            <div className="food">
                                <div className="rectangle-4" />
                                <div className="frame-4">
                                    <input type="radio" checked="checked" className="radio"/>
                                    <div className="frame-5">
                                        <div className="text-wrapper-26">chicken rice</div>
                                        <div className="text-wrapper-27">500 cal</div>
                                        <div className="text-wrapper-28">Encik Tan Curry</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step1n2;