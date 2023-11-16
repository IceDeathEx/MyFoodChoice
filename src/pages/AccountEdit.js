import React, { useState, useEffect } from "react";
import "../css/styleAccount.css";
import image from "../pics/ellipse-2.png";
import NavBarUser from "./NavBarUser";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import CareCalories from "../server/config/CareCalories";
import { useNavigate } from 'react-router';

const AccountEdit = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [lifestyle, setLifestyle] = useState("Not Active(0-1 times a week)");
  const [conditions, setConditions] = useState("Normal");
  const [password, setPassword] = useState("");
  const [bmi, setBMI] = useState(""); // State to store calculated BMI
  const navigate = useNavigate();
  const [iduserprofile, setiduserprofile] = useState(1);
  const [userProfiles, setUserProfiles] = useState([]);
  const id = JSON.parse(window.localStorage.getItem("account"));
  const [userData, setuserdata] = useState([]);
  const [userData2, setuserdata2] = useState([]);
  const currentDate = new Date();
  const formatCurrentDate = currentDate.toISOString(); //Convert to ISO

  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,16}$/;

    function validatePassword(password) {
      return passwordRegex.test(password);
    }

    if (password){
      if (validatePassword(password)) {
        alert("Password is invalid. Password requires one uppercase letter, one lowercase letter, least one digit, at least one special character, no whitespace is allowed, a password length between 8 and 16 characters.");
      } 
       
      }

  useEffect(() => {
    // Fetch the account owner's information
    CareCalories.get(`/api/getUser/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });

    // Fetch the added profiles' information
    CareCalories.get(`/api/getUserProfiles/${id}`)
      .then((res) => {
        const profiles = res.data;
        setuserdata(res.data);
        setuserdata2(res.data);
        setUserProfiles(profiles);
        setisLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user profiles:", error);
        setUserProfiles([]);
        setisLoading(false);
      });
  }, []);

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
    let updatedData = {
      height: height === "" ? originalUserData.height : height,
      weight: weight === "" ? originalUserData.weight : weight,
      lifestyle: lifestyle === "" ? originalUserData.lifestyle : lifestyle,
      conditions: conditions === "" ? originalUserData.conditions : conditions,
      password: password === "" ? originalUserData.password : password,
      bmi: bmi === "" ? originalUserData.bmi : bmi,
    }
    if (iduserprofile === 1) {
    console.log("Update account function called");
    CareCalories.put(`/api/accupdate/${id}`, updatedData);
    CareCalories.put(`/api/accupdateUP/${userData2[0].iduserprofile}`, updatedData);
    CareCalories.post(`/api/UserBMItracker/${id}`, {
      iduserprofile: iduserprofile,
      weight: weight,
      height: height,
      bmi: bmi,
      timestamp: dateFormat("yyyy-mm-dd HH:MM:ss"),
    })
      .then((response) => {
        console.log("User data added successfully");
        setWeight("");
        setHeight("");
      })
    alert("Account profile successfully updated!");
    navigate('/account');
    console.log(password);
  } else {
    CareCalories.put(`/api/accupdateUP/${userData2[0].iduserprofile}`, updatedData);
    CareCalories.post(`/api/UserBMItracker/${id}`, {
      iduserprofile:  userData2.filter((res)=>res.name === iduserprofile)[0].iduserprofile,
      weight: weight,
      height: height,
      bmi: bmi,
      timestamp: formatCurrentDate,
    })
      .then((response) => {
        console.log("User data added successfully");
        setWeight("");
        setHeight("");
      })
    alert("Account profile successfully updated!");
    navigate('/account');
  }
}

 const  handleChange2 = (e) =>{
  console.log(userData2)
  setuserdata2(userData.filter((res) => res.name === e.target.value))
  console.log(userData2)
  console.log(e.target.value)
  setiduserprofile(e.target.value)

}
  if (iduserprofile === 1) {
    return (
      <div className="all">
        <NavBarUser />
        {user && userData2[0] ? (
          <div className="account">
            <div className="div">
              <div className="text-wrapper">Hi, {userData2[0] ? userData2[0].name : ""} !!</div>
              <form className="inputName">
                <select className="inputName" id="cars" name="cars" onChange={handleChange2}>
                  {userData.map((profile, index) => (
                    <option key={index} value=  {profile.name}>
                        {profile.name}
                    </option>
                  ))}
                </select>
              </form>
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
                    onChange={(e) => {
                      setHeight(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
              <div className="frame-8">
                <div className="name-wrapper">
                  <div className="text-wrapper-4">Weight</div>
                </div>
                <div className="text-wrapper-6">kgs</div>
                <div className="group">
                  <input
                    type="number"
                    className="div-wrapper"
                    placeholder={user[0].weight}
                    value={weight}
                    onChange={(e) => {
                      setWeight(e.target.value);
                    }}
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
                      <select
                        className="overlap-group-2"
                        value={lifestyle}
                        onChange={(e) => {
                          setLifestyle(e.target.value);
                        }}
                      >
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
                  <select
                    className="overlap-group-3"
                    value={conditions}
                    onChange={(e) => {
                      setConditions(e.target.value);
                    }}
                  >
                    <option className="text-wrapper-9b">Normal</option>
                    <option className="text-wrapper-9b">Asthma</option>
                    <option className="text-wrapper-9b">High Blood Pressure</option>
                    <option className="text-wrapper-9b">Diabetes</option>
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
                      <input
                        className="overlap-group-4"
                        placeholder="&nbsp;&nbsp;****************"
                        type="password"
                        value={password}
                        onChange={(e) => {
                          console.log("Password input change:", e.target.value); setPassword(e.target.value);
                        }}
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
                   
                  </a>
                  <div className="text-wrapper-4">Account Type</div>
                  <div className="text-wrapper-5">{user[0].premium}</div>
                </div>
              </div>
              <img className="ellipse" alt="Ellipse" src={image} />
            </div>
          </div>
        ) : (
          <p>Still loading</p>
        )}
      </div>
    );
  } else {
    return (
      <div className="all">
        <NavBarUser />
        {user && userData2[0] ? (
          <div className="account">
            <div className="div">
              <div className="text-wrapper">Hi, {userData2[0] ? userData2[0].name : ""} !!</div>
              <form className="inputName">
                <select className="inputName" onChange={handleChange2}>
                  {userData.map((profile, index) => (
                    <option key={index} value={profile.name}>
                      {profile.name}
                    </option>
                  ))}
                </select>
              </form>
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
                <div className="text-wrapper-5">{userData2[0].name}</div>
              </div>
              <div className="frame-3">
                <div className="text-wrapper-4">Gender</div>
                <div className="text-wrapper-5">{userData2[0].gender}</div>
              </div>
              <div className="frame-4">
                <div className="text-wrapper-4">Date of Birth</div>
                <div className="text-wrapper-5">
                  {dateFormat(userData2[0].dob, "mmmm dS, yyyy")}
                </div>
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
                    placeholder={userData2[0].height}
                    value={height}
                    onChange={(e) => {
                      setHeight(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
              <div className="frame-8">
                <div className="name-wrapper">
                  <div className="text-wrapper-4">Weight</div>
                </div>
                <div className="text-wrapper-6">kgs</div>
                <div className="group">
                  <input
                    type="number"
                    className="div-wrapper"
                    placeholder={userData2[0].weight}
                    value={weight}
                    onChange={(e) => {
                      setWeight(e.target.value);
                    }}
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
                      <select
                        className="overlap-group-2"
                        value={lifestyle}
                        onChange={(e) => {
                          setLifestyle(e.target.value);
                        }}
                      >
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
                  <select
                    className="overlap-group-3"
                    value={conditions}
                    onChange={(e) => {
                      setConditions(e.target.value);
                    }}
                  >
                    <option className="text-wrapper-9b">Normal</option>
                    <option className="text-wrapper-9b">Asthma</option>
                    <option className="text-wrapper-9b">High Blood Pressure</option>
                    <option className="text-wrapper-9b">Diabetes</option>
                    <option className="text-wrapper-9b">Heart Disease</option>
                  </select>
                </div>
              </div>
                {userData2[0].iduserprofile === 1 && (
              <div className="frame-11">
                <div className="overlap-3">
                  <div className="frame-wrapper">
                    <div className="frame-12">
                      <div className="text-wrapper-4">Password Edit</div>
                    </div>
                  </div>
                  <div className="frame-13">
                    <div className="group-3">
                      <input
                        className="overlap-group-4"
                        placeholder="&nbsp;&nbsp;****************"
                        type="password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
                 )}
              <div className="frame-14">
                <div className="text-wrapper-4">YOUR CURRENT BMI (NEW BMI)</div>
                <div className="text-wrapper-5b">{userData2[0].bmi} ({bmi})</div>
              </div>
              <div className="frame-15">
                <div className="text-wrapper-4">Account Type</div>
                <div className="text-wrapper-5">{user[0].premium}</div>
              </div>
              <img className="ellipse" alt="Ellipse" src={image} />
            </div>
          </div>
        ) : (
          <p>Still loading</p>
        )}
      </div>
    );
  }
};

export default AccountEdit;
