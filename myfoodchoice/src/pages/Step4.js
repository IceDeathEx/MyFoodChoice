import React from "react";
import UserChoice from "./UserChoice";
import "../css/Step4.css";

const Step4 = () => {
    return (
        <div className="step">
            <div className="frame">
                <div className="frame-2">
                    <div className="overlap-group">
                        <p className="p">look at the list of consumed food</p>
                        <div className="text-wrapper-2">step 4.</div>
                    </div>
                    <p className="text-wrapper-3">who you want to see?</p>
                    <UserChoice
                        className="user-choice-instance"
                        ellipse="ellipse-2.png"
                    />
                </div>
            </div>
            <div className="food-list">
                <div className="group-wrapper">
                    <div className="group-3" />
                </div>
                <div className="frame-3">
                    <div className="frame-4">
                        <div className="food">
                            <div className="rectangle" />
                            <div className="frame-5">
                                <div className="radio" />
                                <div className="frame-6">
                                    <div className="text-wrapper-4">chicken rice</div>
                                    <div className="text-wrapper-5">500 cal</div>
                                    <div className="text-wrapper-6">Encik Tan Curry</div>
                                </div>
                            </div>
                        </div>
                        <div className="text-wrapper-7">breakfast.</div>
                    </div>
                    <div className="frame-7">
                        <div className="food-2">
                            <div className="rectangle" />
                            <div className="frame-5">
                                <div className="radio" />
                                <div className="frame-6">
                                    <div className="text-wrapper-4">chicken rice</div>
                                    <div className="text-wrapper-5">500 cal</div>
                                    <div className="text-wrapper-6">Encik Tan Curry</div>
                                </div>
                            </div>
                        </div>
                        <div className="text-wrapper-7">lunch.</div>
                    </div>
                    <div className="frame-8">
                        <div className="food-3">
                            <div className="rectangle" />
                            <div className="frame-5">
                                <div className="radio" />
                                <div className="frame-6">
                                    <div className="text-wrapper-4">chicken rice</div>
                                    <div className="text-wrapper-5">500 cal</div>
                                    <div className="text-wrapper-6">Encik Tan Curry</div>
                                </div>
                            </div>
                        </div>
                        <div className="text-wrapper-7">dinner.</div>
                    </div>
                    <div className="frame-9">
                        <div className="food-4">
                            <div className="rectangle" />
                            <div className="frame-5">
                                <div className="radio" />
                                <div className="frame-6">
                                    <div className="text-wrapper-4">chicken rice</div>
                                    <div className="text-wrapper-5">500 cal</div>
                                    <div className="text-wrapper-6">Encik Tan Curry</div>
                                </div>
                            </div>
                        </div>
                        <div className="text-wrapper-7">snack.</div>
                    </div>
                    <div className="frame-10">
                        <div className="food-5">
                            <div className="rectangle" />
                            <div className="frame-5">
                                <div className="radio" />
                                <div className="frame-6">
                                    <div className="text-wrapper-4">chicken rice</div>
                                    <div className="text-wrapper-5">500 cal</div>
                                    <div className="text-wrapper-6">Encik Tan Curry</div>
                                </div>
                            </div>
                        </div>
                        <div className="text-wrapper-7">exercise</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step4;