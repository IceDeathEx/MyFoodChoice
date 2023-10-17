import React, { useEffect, useState } from "react";
import "../css/styleAccount.css";
import image from '../pics/ellipse-2.png'
import NavBarUser from "./NavBarUser";
import { Link } from "react-router-dom";
import Axios from "axios";
import dateFormat from 'dateformat';
import { useNavigate } from 'react-router';


const AccountDetails = () => {
  const [userprofileid, setuserprofileid] = useState(2)
  const [user, setUser] = useState(null)
  const [userProfiles, setUserProfiles] = useState([]);
  const [isLoading, setisLoading] = useState(true)
  const id = JSON.parse(window.localStorage.getItem('account'))
  const navigate = useNavigate();
  const [modal2, setModal] = useState(false)
  const [iduserprofile, setiduserprofile] = useState(null);

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [conditions, setConditions] = useState("Normal");
  const [lifestyle, setLifestyle] = useState("Active(1-2 times a week");
  const [gender, setGender] = useState("Male");
  const [userData, setuserdata] = useState([]);
  const [userData2, setuserdata2] = useState([]);


   //If name is empty
    const [emptyName, setemptyName] = useState(false)
    const [emptyNameMsg, setEmptyNameMsg] = useState('')

  //If Dob is empty
    const [emptydob, setemptydob] = useState(false)
    const [emptydobMsg, setemptydobMsg] = useState('')

  //If Height is empty
    const [emptyHeight, setemptyHeight] = useState(false)
    const [emptyHeightMsg, setEmptyHeightMsg] = useState('')

  //If Weight is empty
    const [emptyWeight, setemptyWeight] = useState(false)
    const [emptyWeightMsg, setEmptyWeightMsg] = useState('')

    //Invalid age
    const [invalidAge, setInvalidAge] = useState(false);
    const [invalidAgeMsg, setInvalidAgeMsg] = useState('');

  useEffect(() => {
  // Fetch the account owner's information
  Axios.get(`http://localhost:3002/api/getUser/${id}`)
    .then((res) => {
      setUser(res.data);
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });

  // Fetch the added profiles' information
  Axios.get(`http://localhost:3002/api/getUserProfiles/${id}`)
    .then((res) => {
      const profiles = res.data;
      setuserdata(res.data);
      //console.log("I am Loading data")
      //console.log(res.data)
      setuserdata2(res.data);
      console.log()

      setUserProfiles(profiles);
      setisLoading(false);
    })
    .catch((error) => {
      // Handle the error, e.g., by displaying an error message
      console.error("Error fetching user profiles:", error);
      setUserProfiles([]); // Set an empty array or handle the error case appropriately
      setisLoading(false);
    });
    Axios.get(`http://localhost:3002/api/getshoppingcart/${id}`)
        .then((data)=>{
            settransaction(data.data)
        })

  const modal = document.querySelector("#modal");
  const openModal = document.querySelector("#openModal");
  const closeModal = document.querySelector("#closeModal");

  const handleOpenModalClick = () => {
    modal.showModal();
  };

  const handleCloseModalClick = () => {
    modal.close();
  };

  if (modal2) {
    openModal && openModal.addEventListener("click", handleOpenModalClick);
    closeModal && closeModal.addEventListener("click", handleCloseModalClick);
  }

  // Remove event listeners when modal2 changes or component unmounts
  return () => {
    openModal && openModal.removeEventListener("click", handleOpenModalClick);
    closeModal && closeModal.removeEventListener("click", handleCloseModalClick);
  };
}, []);



  const handleFormSubmit = () => {
  const birthDate = new Date(dob); //
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthDate.getFullYear();

  // Calculate BMI
  const bmi = weight / ((height / 100) * (height / 100));
  let isFormValid = true;

  if (!name) {
    setemptyName(true);
    setEmptyNameMsg('Please enter your name');
    isFormValid = false;
  } else {
    setemptyName(false);
  }

  if (!dob) {
    setemptydob(true);
    setemptydobMsg('Please enter your date of birth');
    isFormValid = false;
  } else {
    setemptydob(false);
  }

  if (!height || height < 1) {
    setemptyHeight(true);
    setEmptyHeightMsg('Please enter a valid height');
    isFormValid = false;
  } else {
    setemptyHeight(false);
  }

  if (!weight || weight < 1) {
    setemptyWeight(true);
    setEmptyWeightMsg('Please enter a valid weight');
    isFormValid = false;
  } else {
    setemptyWeight(false);
  }

  if (age < 1) {
    setInvalidAge(true);
    setInvalidAgeMsg('Please enter an age of 1 year or older');
    isFormValid = false;
  } else {
    setInvalidAge(false);
  }

  if (isFormValid) {
    Axios.post("http://localhost:3002/api/addIdProfile", {
      name: name,
      dob: dob,
      weight: weight,
      height: height,
      conditions: conditions,
      lifestyle: lifestyle,
      gender: gender,
      age: age,
      bmi: bmi.toFixed(2),
    })
      .then((response) => {
        console.log("Profile added successfully");
        handleModalClose();
        setName("");
        setDob("");
        setWeight("");
        setHeight("");
        setConditions("Normal");
        setLifestyle("Active(1-2 times a week)");
        setGender("Male");
      })
      .catch((error) => {
        console.error("Error adding profile:", error);
      });
  }
};
  const handleChange = (e) => {
    if (userProfiles.length === 5) {
      alert("You can't add more profiles. The maximum limit is 5.");
    } else {
      const {name, value} = e.target;

      if (name) {
        setemptyName(false);
      }
      else {
          setemptyName(true)
          setEmptyNameMsg('Please type in your name')
        //  console.log(5)
        }
      if (dob){
          setemptydob(false)
          //console.log(16)
        }
        else{
          setemptydob(true)
          //console.log(17)
          setemptydobMsg('Please indicate date of birth.')
        }
        if(height < 1 || height === null){
          setemptyHeight(true)
          setEmptyHeightMsg('Please indicate a valid height value')
          //console.log(18)
        }
        else{
          setemptyHeight(false)
          //console.log(19)
        }
        if(weight < 1 || weight === null){
          setemptyWeight(true)
          setEmptyWeightMsg('Please indicate a valid weight value')
          //console.log(20)
        }
        else{
          setemptyWeight(false)
          //console.log(21)
        }



      for (let i = 0; i < userProfiles.length; i++) {
        if (userProfiles[i].iduserprofile === i + 1) {
          alert("You can't add more profiles. The maximum limit is 5.");
        } else {
          setuserprofileid(i + 1);
          Axios.post("http://localhost:3002/api/addIdProfile", )
              .then((response) => {
                console.log('Successfully added iduserprofile:', response.data);
              })
              .catch((error) => {
                console.error('Error adding iduserprofile:', error);
              });
          break;
        }
      }
    }
  };
  const DeleteProfile = () => {
  Axios.delete(`http://localhost:3002/api/deleteProfile/${userData2[0].iduserprofile}`)
    .then((response) => {
      console.log("Profile deleted successfully");
      alert("Profile successfully deleted!");
      navigate('/account');
      window.location.reload(); 
      // You may want to refresh the profile list here
    })
    .catch((error) => {
      console.error("Error deleting profile:", error);
    });
};

  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  //This is to handle the dropdown menu

const  handleChange2 = (e) =>{
  console.log(userData2)
  setuserdata2(userData.filter((res) => res.name === e.target.value))
  console.log(userData2)
  console.log(e.target.value)

}
const [transaction, settransaction] = useState([])

const handleupgrade = () => {
  if(transaction.filter((res)=> res.transcategory === 'Upgrade').length === 0){
    var today = new Date()
    Axios.post(`http://localhost:3002/api/createtransaction/${id}`, { 
        uid: id, 
        transitemid: 0,
        transitemname: 'Upgrade',
        transitemprice: 30.00,
        transqty: 1, 
        transdate: dateFormat(today, "yyyy-mm-dd HH:MM:ss"), 
        transitemvendor: 'Care Calories',
        transstatus: 'Ongoing', 
        payment: 'Counter',
        transcategory: 'Upgrade'
        })
  
    navigate('/shoppingcart')
    //window.location.reload()
  }
  else{
    console.log("Already added")
  }
  
}

    return (
        <div>
          <NavBarUser/>
          {user && userData2[0] ? (
              <div className="account">
                <div className="div">
                  <div className="text-wrapper">Hi, {userData2[0] ? userData2[0].name : ""} !!</div>
                  <form className="inputName">
                    <select onClick={handleChange2}>
                      {userData.map((profile, index) => (
                          <option key={index} value={profile.name}>
                            {profile.name}
                          </option>
                      ))}
                    </select>
                  </form>
                  <div className="overlap">
                    <div className="rectangle">
                      <Link to='/editprofile'>
                        <div className="text-wrapper-2">Edit profile</div>
                      </Link>
                    </div>
                  </div>

                  <div className="overlap2">
                    <button className="rectangle-3 btn" id="openModal" onClick={handleModalOpen}>
                      <div className="addprofile">Add Profile</div>
                    </button>
                    {modal2 && (
                        <dialog id="modal" open={modal2}>
                            {emptyName && <div className="error-message">{emptyNameMsg}</div>}
                          <label>Full Name*</label>
                          <input type="text" placeholder="Full Name" value={name}
                                 onChange={(e) => setName(e.target.value)}/>
                          <br></br>
                            {emptydob && <div className="error-message">{emptydobMsg}</div>}
                            {invalidAge && <div className="error-message">{invalidAgeMsg}</div>}
                          <label>Date of Birth*</label>
                          <input type="date" placeholder="Date of Birth" value={dob}
                                 onChange={(e) => setDob(e.target.value)}/>
                          <br></br>
                            {emptyWeight && <div className="error-message">{emptyWeightMsg}</div>}
                          <label>Weight*</label>
                          <input type="number" placeholder="Weight (kgs)" value={weight}
                                 onChange={(e) => setWeight(e.target.value)}/>

                          <br></br>
                            {emptyHeight && <div className="error-message">{emptyHeightMsg}</div>}
                          <label>Height*</label>
                          <input type="number" placeholder="Height (cm)" value={height}
                                 onChange={(e) => setHeight(e.target.value)}/>
                          <br></br>
                          <label>Medical Condition*</label>
                          <select value={conditions} onChange={(e) => setConditions(e.target.value)}>
                            <option>Normal</option>
                            <option>Heart Disease</option>
                            <option>Asthma</option>
                            <option>High Blood Pressure</option>
                            <option>Diabetic</option>
                          </select>
                          <br></br>
                          <label>Lifestyle</label>
                          <select value={lifestyle} onChange={(e) => setLifestyle(e.target.value)}>
                            <option>Not Active(0-1 times a week)</option>
                            <option>Active(1-2 times a week)</option>
                            <option>Very Active(More than 3 times a week)</option>
                          </select>
                          <br></br>
                          <label>Gender*</label><br></br>
                          <select value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                          <br></br>
                          <button onClick={handleFormSubmit}>Add Profile</button>
                          <button id="closeModal" onClick={handleModalClose}>Close this Form</button>
                        </dialog>
                    )}
                  </div>


                 <div className="overlap3 btn">
                    {userData2[0].iduserprofile > 1 && (
                      <button className="rectangle-4" onClick={() => DeleteProfile(userData2[0].iduserprofile)}>
                        <div className="deleteprofile">Delete Profile</div>
                      </button>
                    )}
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
                    <div className="text-wrapper-5">{dateFormat(userData2[0].dob, "mmmm dS, yyyy")}</div>
                  </div>
                  <div className="frame-5">
                    <div className="text-wrapper-4">Country</div>
                    <div className="text-wrapper-5">{user[0].country}</div>
                  </div>
                  <div className="frame-6b">
                    <div className="frame-7">
                      <div className="text-wrapper-4">Height</div>
                      <div className="text-wrapper-5">{userData2[0].height}</div>
                      <div className="text-wrapper-6b">cm</div>
                    </div>
                  </div>
                  <div className="frame-8b">
                    <div className="name-wrapper">
                      <div className="text-wrapper-4">Weight</div>
                      <div className="text-wrapper-5">{userData2[0].weight}</div>
                      <div className="text-wrapper-6b">kgs</div>
                    </div>
                  </div>
                  <div className="overlap-wrapper">
                    <div className="overlap-2">
                      <div className="frame-9">
                        <div className="text-wrapper-4">Lifestyle</div>
                        <div className="text-wrapper-5b">{userData2[0].lifestyle}</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-10">
                    <div className="text-wrapper-4">Health Condition</div>
                    <div className="text-wrapper-5">{userData2[0].conditions}</div>
                  </div>
                  <div className="frame-11">
                    <div className="overlap-3">
                      <div className="frame-wrapper">
                        <div className="frame-12">
                          <div className="text-wrapper-4">Password Edit</div>
                          <div className="text-wrapper-5">************</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-14">
                    <div className="text-wrapper-4">YOUR CURRENT BMI</div>
                    <div className="text-wrapper-5">{userData2[0].bmi}</div>
                  </div>
                  <div className="frame-15">
                    <div className="frame-16">

                        <div className="text-wrapper-11" onClick={handleupgrade}>upgrade</div>
                      <div className="text-wrapper-4">Account Type</div>
                      <div className="text-wrapper-5">Basic</div>
                    </div>
                  </div>
                  <img className="ellipse" alt="Ellipse" src={image}/>
                </div>
              </div>
          ) :   (
              <p>Still loading</p>
          )

            }
        </div>
    );
  };


export default AccountDetails;
