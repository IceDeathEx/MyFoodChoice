import React from "react";
import "../css/foodComp.css";
import vector from "../pics/vector3.png";

const FoodComp = () => {
    return (
        <div className="food-compMR">
            <div className="text-wrapper">food comparisson.</div>
            <div className="div">first food:</div>
            <div className="text-wrapper-2">second food:</div>
            <div className="frame">
                <input className="label" placeholder="   what u eat?"/>
                <img className="icon-magnifying" alt="Icon magnifying" src={vector} />
            </div>
            <div className="frame-2">
                <input className="label" placeholder="   what u eat?"/>
                <img className="icon-magnifying" alt="Icon magnifying" src={vector}/>
            </div>
            <div className="food">
                <div className="rectangle" />
                <div className="frame-3">
                    <div className="radio" />
                    <div className="frame-4">
                        <div className="text-wrapper-4">chicken rice</div>
                        <div className="text-wrapper-5">500 cal</div>
                        <div className="text-wrapper-6">Encik Tan Curry</div>
                    </div>
                </div>
            </div>
            <div className="food-2">
                <div className="rectangle" />
                <div className="frame-3">
                    <div className="radio" />
                    <div className="frame-4">
                        <div className="text-wrapper-4">chicken rice</div>
                        <div className="text-wrapper-5">500 cal</div>
                        <div className="text-wrapper-6">Encik Tan Curry</div>
                    </div>
                </div>
            </div>
            <div className="frame-5">
                <div className="rectangle-2" />
                <div className="details-box">
                    <div className="box">
                        <div className="overlap-group">
                            <div className="text-wrapper-7">protein</div>
                            <div className="text-wrapper-8">carbs</div>
                            <div className="text-wrapper-9">sugar</div>
                            <div className="text-wrapper-10">14g</div>
                            <div className="text-wrapper-11">14g</div>
                            <div className="text-wrapper-12">14g</div>
                        </div>
                    </div>
                    <div className="overlap-wrapper">
                        <div className="overlap">
                            <div className="text-wrapper-13">saturated fat</div>
                            <div className="text-wrapper-14">sodium</div>
                            <div className="text-wrapper-15">cholesterol</div>
                            <div className="text-wrapper-16">14g</div>
                            <div className="text-wrapper-17">14g</div>
                            <div className="text-wrapper-18">14g</div>
                        </div>
                    </div>
                    <div className="overlap-wrapper">
                        <div className="overlap-2">
                            <div className="text-wrapper-13">Fibre</div>
                            <div className="text-wrapper-19">total fat</div>
                            <div className="text-wrapper-20">natrium</div>
                            <div className="text-wrapper-16">14g</div>
                            <div className="text-wrapper-17">14g</div>
                            <div className="text-wrapper-18">14g</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="frame-6">
                <div className="rectangle-2" />
                <div className="details-box-2">
                    <div className="box">
                        <div className="overlap-group">
                            <div className="text-wrapper-7">protein</div>
                            <div className="text-wrapper-8">carbs</div>
                            <div className="text-wrapper-9">sugar</div>
                            <div className="text-wrapper-10">14g</div>
                            <div className="text-wrapper-11">14g</div>
                            <div className="text-wrapper-12">14g</div>
                        </div>
                    </div>
                    <div className="overlap-wrapper">
                        <div className="overlap">
                            <div className="text-wrapper-13">saturated fat</div>
                            <div className="text-wrapper-14">sodium</div>
                            <div className="text-wrapper-15">cholesterol</div>
                            <div className="text-wrapper-16">14g</div>
                            <div className="text-wrapper-17">14g</div>
                            <div className="text-wrapper-18">14g</div>
                        </div>
                    </div>
                    <div className="overlap-wrapper">
                        <div className="overlap-2">
                            <div className="text-wrapper-13">Fibre</div>
                            <div className="text-wrapper-19">total fat</div>
                            <div className="text-wrapper-20">natrium</div>
                            <div className="text-wrapper-16">14g</div>
                            <div className="text-wrapper-17">14g</div>
                            <div className="text-wrapper-18">14g</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodComp;