import React, { useState, useEffect } from "react";
import "../css/styleAccount.css";
import image from "../pics/ellipse-2.png";
import NavBarUser from "./NavBarUser";
import { Link } from "react-router-dom";
import Axios from "axios";
import dateFormat from "dateformat";
import { useNavigate } from 'react-router';

const AccountEdit = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [lifestyle, setLifestyle] = useState("");
  const [conditions, setConditions] = useState("");
  const [password, setPassword] = useState("");
  const [bmi, setBMI] = useState(""); // State to store calculated BMI
  const navigate = useNavigate();

  const id = JSON.parse(window.localStorage.getItem("account"));

  useEffect(() => {
    Axios.get(`http://localhost:3002/api/getUser/${id}`).then((res) => {
      setUser(res.data);
      setisLoading(false);

      setLifestyle(res.data[0].lifestyle);
      setConditions(res.data[0].conditions);
    });
  }, [id]);

  // Store the original user data
  const originalUserData = user ? user[0] : {};

  // Calculate BMI whenever height or weight changes
  useEffect(() => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);
    }
  }, [height, weight]);

  function updateAccount() {
    const updatedData = {
      height: height === "" ? originalUserData.height : height,
      weight: weight === "" ? originalUserData.weight : weight,
      lifestyle: lifestyle === "" ? originalUserData.lifestyle : lifestyle,
      conditions: conditions === "" ? originalUserData.conditions : conditions,
      password: password === "" ? originalUserData.password : password,
      bmi: bmi === "" ? originalUserData.bmi : bmi,
    };

    Axios.put(`http://localhost:3002/api/accupdate/${id}`, updatedData);
    alert("Account profile successfully updated!")
    navigate('/homepage')
  }

  return (
    <div>
      <NavBarUser />
      {isLoading ? (
        <p>Still loading</p>
      ) : (
        <div className="account">
          <div className="div">
            <div className="text-wrapper">Hi, {user[0].name} !!</div>
            <div className="overlap">
              <button className="rectangle" onClick={updateAccount}>
                  <div className="text-wrapper-2">Confirm</div>
              </button>
            </div>
            <div className="overlap-group">
              <button className="rectangle-2">
                <Link to="/account">
                  <div className="text-wrapper-3">Cancel</div>
                </Link>
              </button>
            </div>
            <div className="frame">
              <div className="text-wrapper-4">Email</div>
              <div className="text-wrapper-5">{user[0].email}</div>
            </div>
            <div className="frame-2">
              <div className="text-wrapper-4">Name</div>
              <div className="text-wrapper-5">{user[0].name}</div>
            </div>
            <div className="frame-3">
              <div className="text-wrapper-4">Gender</div>
              <div className="text-wrapper-5">{user[0].gender}</div>
            </div>
            <div className="frame-4">
              <div className="text-wrapper-4">Date of Birth</div>
              <div className="text-wrapper-5">
                {dateFormat(user[0].dob, "mmmm dS, yyyy")}
              </div>
            </div>
            <div className="frame-5">
              <div className="text-wrapper-4">Country</div>
              <div className="text-wrapper-5">{user[0].country}</div>
            </div>
            <div className="frame-6">
              <div className="frame-7">
                <div className="text-wrapper-4">Height</div>
              </div>
              <div className="text-wrapper-6">cm</div>
              <div className="group">
                <input
                  type="number"
                  className="div-wrapper"
                  placeholder={user[0].height}
                  value={height}
                  onChange={(e) => { setHeight(e.target.value); }}
                ></input>
              </div>
            </div>
            <div className="frame-8">
              <div className="name-wrapper">
                <div className="text-wrapper-4">Weight</div>
              </div>
              <div className="text-wrapper-6">kgs</div>
              <div className="group">
                <input type="number" className="div-wrapper" placeholder={user[0].weight} value={weight} onChange={(e) => { setWeight(e.target.value); }}
                ></input>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-2">
                <div className="frame-9">
                  <div className="text-wrapper-4">Lifestyle</div>
                </div>
                <div className="group-wrapper">
                  <div className="overlap-group-wrapper">
                    <select className="overlap-group-2" value={lifestyle} onChange={(e) => { setLifestyle(e.target.value); }}>
                      <option>Not Active(0-1 times a week)</option>
                      <option>Active(1-2 times a week)</option>
                      <option>Very Active(More than 3 times a week)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="frame-10">
              <div className="text-wrapper-4">Health Condition</div>
              <div className="group-2">
                <select className="overlap-group-3" value={conditions} onChange={(e) => { setConditions(e.target.value); }}>
                  <option className="text-wrapper-9b">Heart Disease</option>
                  <option className="text-wrapper-9b">Asthma</option>
                  <option className="text-wrapper-9b">High Blood Pressure</option>
                  <option className="text-wrapper-9b">Diabetic</option>
                </select>
              </div>
            </div>
            <div className="frame-11">
              <div className="overlap-3">
                <div className="frame-wrapper">
                  <div className="frame-12">
                    <div className="text-wrapper-4">Password Edit</div>
                  </div>
                </div>
                <div className="frame-13">
                  <div className="group-3">
                    <input className="overlap-group-4" placeholder="&nbsp;&nbsp;****************" type="password" value={password} onChange={(e) => { setPassword(e.target.value); }}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-14">
              <div className="text-wrapper-4">YOUR CURRENT BMI (NEW BMI)</div>
              <div className="text-wrapper-5b">{user[0].bmi} ({bmi})</div>
            </div>
            <div className="frame-15">
              <div className="frame-16">
                <a href="" className="text-wrapper-11">
                  upgrade
                </a>
                <div className="text-wrapper-4">Account Type</div>
                <div className="text-wrapper-5">Basic</div>
              </div>
            </div>
            <img className="ellipse" alt="Ellipse" src={image} />
          </div>
        </div>
      )}
    </div>
  );
}

export default AccountEdit;
