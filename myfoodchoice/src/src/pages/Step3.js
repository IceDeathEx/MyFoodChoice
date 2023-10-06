import React from "react";
import UserChoice from "./UserChoice";
import "../css/Step3.css";

const Step3 = () => {
    return (
        <div className="step3">
            <div className="frame">
                <p className="p">who eat the chicken rice?</p>
                <div className="text-wrapper-2">step 3.</div>
            </div>
            <UserChoice
                className="user-choice-instance"
                ellipse="ellipse-2.png"
            />
        </div>
    );
};

export default Step3;
