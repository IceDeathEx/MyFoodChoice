import React from "react";
import { BuyFood } from "./BuyFood";
import { TodayComponent } from "./TodayComponent";
import { UsersHp } from "./UsersHp";
import "./style.css";

export const HomepageSignUp = () => {
  return (
    <div className="homepage-sign-up">
      <div className="div-2">
        <div className="frame-14">
          <div className="text-wrapper-21">what you looking for?</div>
        </div>
        <UsersHp className="users-HP-instance" />
        <div className="your-achievement">
          <div className="flexcontainer">
            <p className="span-wrapper">
              <span className="span">
                your
                <br />
              </span>
            </p>
            <p className="span-wrapper">
              <span className="span">achievement.</span>
            </p>
          </div>
          <div className="rectangle-3" />
          <div className="frame-15">
            <div className="element-5">
              <img className="img-2" alt="Icon circle check" src="icon-circle-check.png" />
              <div className="text-wrapper-22">DAY 1</div>
            </div>
            <div className="element-6">
              <img className="img-2" alt="Icon circle check" src="icon-circle-check.png" />
              <div className="text-wrapper-22">DAY 1</div>
            </div>
            <div className="element-7">
              <img className="img-2" alt="Icon circle x" src="icon-circle-x.png" />
              <div className="text-wrapper-23">DAY 2</div>
            </div>
            <div className="text-wrapper-24">daily streak.</div>
          </div>
        </div>
        <BuyFood className="buy-food-instance" />
        <TodayComponent className="today-component-instance" />
      </div>
    </div>
  );
};


