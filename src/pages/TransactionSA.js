import React from "react";
import "../css/TSAstyle.css";
import glass from "../pics/vector3.png"
import NavbarSa from "./NavbarSA";

const TransactionSA = () => {
    return (
    <div>
    <NavbarSa/>
        <div className="transaction">
            <div className="div">
                <div className="rectangleTS" >


                </div>
                <div className="frameTS">
                    <input className="label" />
                    <img className="icon-magnifying" alt="Icon magnifying" src={glass} />
                </div>
            </div>
        </div>
    </div>
    );
};

export default TransactionSA;
