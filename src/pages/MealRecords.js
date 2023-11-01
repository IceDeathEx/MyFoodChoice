import React, { useEffect, useState, useRef } from "react";
import "../css/MealRecord.css";
import NavBarUser from './NavBarUser'
import arrow from '../pics/arrow-7.svg';
import ellipse from '../pics/ellipse-2.png';
import * as tf from '@tensorflow/tfjs';
import dateFormat from 'dateformat';
import { useNavigate } from "react-router";
import CareCalories from "../server/config/CareCalories";

export const MealRecords = () => {

    //Get user details
    const [user, setuser] = useState([])

    //Get mealrecord
    const [mealrecord, setmealrecord] = useState([])

    //Storing food array
    const [foodnutrition, setFoodnutrition] = useState([])

    // Food Comparison
    const [filteredSearch, setFilteredSearch] = useState([])
    const [filteredSearch2, setFilteredSearch2] = useState([])


    //Variable for recording of food
    const [foodValue, setFoodValue] = useState('')
    const [filteredSearch3, setFilteredSearch3] = useState([])
    const [imageURL, setImageURL] = useState(null); //Image URL
    const imageRef = useRef() // Image reference
    const fileInputRef = useRef() // File reference
    const [results, setResults] = useState('')// Result of Prediction
    const [model, setModel] = useState(null) //Machine Learning Model var
    const [isModelLoading, setIsModelLoading] = useState(false)
    const [classLabels] = useState(['Ba Chor Mee', 'Char Kway Teow', 'Chicken Rice', 'Chilli Crab', 'Laksa', 'Nasi Lemak', 'Nasi Padang', 'Roti Prata'])
    const videoRef = useRef(null)
    const photoRef = useRef(null)
    const [hasPhoto, sethasPhoto] = useState(false)
    const [isCam, setiscam] = useState(false)

    const navigate = useNavigate()

    //Selecting User Profiles
    const [userprofile, setUserProfile] = useState([])
    const id = JSON.parse(window.localStorage.getItem("account"))
    const [mrUser, setmrUser] = useState([])

    const [nameStyles, setNameStyles] = useState([
        { color: 'black', fontWeight: '400' },
        { color: 'black', fontWeight: '400' },
        { color: 'black', fontWeight: '400' },
        { color: 'black', fontWeight: '400' },
        { color: 'black', fontWeight: '400' },
    ]);

    const toggleNameStyle = (index) => {
        // Create a copy of the current styles object
        const newStyles = { ...nameStyles };

        // Check if the style object for this index exists
        if (!newStyles[index]) {
            newStyles[index] = {
                color: 'black',
                fontWeight: '400',
            };
        } else {
            // Toggle the color and font weight
            newStyles[index] = {
                color: newStyles[index].color === 'black' ? '#567710' : 'black',
                fontWeight: newStyles[index].fontWeight === '400' ? 'bold' : '400',
            };
        }

        // Update the state with the new styles
        setNameStyles(newStyles);


        // Create a copy of the current state object
        const updatedState = { ...state };

        // Check if the item with the given iduserprofile is already in the array
        const index1 = updatedState.mrUser2.findIndex((item) => item.iduserprofile === index + 1);

        if (index1 === -1) {
            // If not found, add it to the array
            updatedState.mrUser2.push({ iduserprofile: index + 1 });
        } else {
            // If found, remove it from the array
            updatedState.mrUser2.splice(index1, 1);
        }

        // Toggle the profile variable based on the value of i
        updatedState[`profile${index + 1}`] = !updatedState[`profile${index + 1}`];

        // Update the state
        setState(updatedState);
        console.log(state.mrUser2)
        state.mrUser2.map((item) => {
            console.log(item.iduserprofile)
        })
    };


    const [state, setState] = useState({
        mrUser2: [],
        profile1: false,
        profile2: false,
        profile3: false,
        profile4: false,
        profile5: false,
    });
    const CreateMealRecord = () => {
        var today = new Date()
        var time = today.getHours()
        var meal = ''
        //If word search match and user profile is selected, then will trigger the posting
        if (filteredSearch3.length > 0 && state.mrUser2.length > 0) {


            console.log("do something")
            //Do a logic check if time is between certain period so its considered which meal of the day
            if (time >= 21 && time <= 4) {
                //console.log("snacks")
                meal = 'snacks'
            }
            else if (time >= 5 && time <= 11) {
                //console.log("breakfast")
                meal = 'breakfast'
            }
            else if (time >= 12 && time <= 14) {
                //console.log("lunch")
                meal = 'lunch'
            }
            else if (time >= 15 && time <= 16) {
                //console.log("snacks")
                meal = 'snacks'
            }
            else if (time >= 17 && time <= 20) {
                //console.log("dinner")
                meal = 'dinner'
            }
            //Do a post to meal record database
            state.mrUser2.map((data) => {
                CareCalories.post("/api/insertmealrecords", {
                    upid: data.iduserprofile,
                    uid: id,
                    foodid: filteredSearch3[0].id,
                    datetime: dateFormat(today, "yyyy-mm-dd HH:MM:ss"),
                    meal: meal
                })
            })
            //Do a post to store the loyalty points 25 pts per meal creation
            if (mealrecord.filter((test) => test.meal === meal && dateFormat(test.date, "yyyy-mm-dd") === dateFormat(today, "yyyy-mm-dd")).length > 0) {
                console.log("Do nothing")
                navigate("/homepage")
            }
            else {
                CareCalories.put(`/api/userpointsupdate/${id}`, { balance: 25 })
                navigate("/homepage")
            }

        }
        else if (filteredSearch3.length === 0 && state.mrUser2.length === 0) {
            alert('Please enter a valid food name.')
            alert('Please click on at least one user profile.')
        }
        else if (state.mrUser2.length === 0) {
            alert('Please click on at least one user profile.')
        }
        else if (filteredSearch3.length === 0) {
            alert('Please enter a valid food name.')
        }
        else {
            alert('Some error')
        }



        // Meal Record db should contain the following attribute:
        // id, upid, uid, foodid, datetime, meal, loyaltypts awarded: 25
        // Update user, increment the loyalty point by 25 for each meal for a total of 100
    }
    //Store the database food nutrition values inside
    useEffect(() => {
        CareCalories.get('/api/getfoodnutrition')
            .then((res) => {
                setFoodnutrition(res.data)
            })
        CareCalories.get(`/api/getUserProfile/${id}`)
            .then((data) => {
                setUserProfile(data.data)
                setmrUser(data.data)
            })
        CareCalories.get(`/api/getUser/${id}`)
            .then((data) => {
                setuser(data.data)
            })
        CareCalories.get(`/api/getmealrecord/${id}`)
            .then((data) => {
                setmealrecord(data.data)
            })
        //Load Machine learning model
        loadModel()
        //getVideo()
    }, [])
    //If model is loading, show model loading message, once model loaded, message will disappear
    if (isModelLoading) {
        return <h2>Model Loading...</h2>
    }
    // Loading model function
    const loadModel = async () => {
        setIsModelLoading(true)
        try {
            const modelJson = 'http://127.0.0.1:8080/model.json'
            const modell = await tf.loadLayersModel(modelJson);
            setModel(modell)
            setIsModelLoading(false)
        } catch (error) {
            console.log(error)
            setIsModelLoading(false)
        }
    }

    //Food Comparison
    const handleSearch = (e) => {
        setFilteredSearch(foodnutrition.filter((searched) => searched.fname.toLowerCase() === e.target.value.toLowerCase()))
    }
    const handleSearch2 = (e) => {
        setFilteredSearch2(foodnutrition.filter((searched) => searched.fname.toLowerCase() === e.target.value.toLowerCase()))
    }

    //Meal Recording
    function uploadImage(e) {
        closePhoto()
        const { files } = e.target
        if (files.length > 0) {
            const url = URL.createObjectURL(files[0])
            setImageURL(url)
        } else {
            setImageURL(null)
        }

    }
    const handleSearch3 = (e) => {
        setFilteredSearch3(foodnutrition.filter((searched) => searched.fname.toLowerCase() === e.target.value.toLowerCase()))
        setFoodValue(e.target.value)
    }
    //Identify Image
    const identify = async () => {
        if (hasPhoto) {
            //Do something to the image first before predicting
            const tensorImg = tf.browser.fromPixels(photoRef.current).resizeNearestNeighbor([256, 256]).toFloat();
            const tensorImg2 = tensorImg.expandDims(0);
            //Predict results
            const result = await model.predict(tensorImg2)
            const predicted_index = result.as1D().argMax().dataSync()[0];
            const predictedClass = classLabels[predicted_index];
            setResults(predictedClass)
            setFoodValue(predictedClass)
            //Get nutritional values from database
            const id = predicted_index + 1
            await CareCalories.get(`/api/getFood/${id}`).then((res) => {
                setFilteredSearch3(res.data)
            })
        }
        else {
            alert('No photo to identify')
        }

    }
    const identify2 = async () => {
        if (imageURL) {
            //Do something to the image first before predicting
            const tensorImg = tf.browser.fromPixels(imageRef.current).resizeNearestNeighbor([256, 256]).toFloat();
            const tensorImg2 = tensorImg.expandDims(0);
            //Predict results
            const result = await model.predict(tensorImg2)
            const predicted_index = result.as1D().argMax().dataSync()[0];
            const predictedClass = classLabels[predicted_index];
            setResults(predictedClass)
            setFoodValue(predictedClass)
            //Get nutritional values from database
            const id = predicted_index + 1
            await CareCalories.get(`/api/getFood/${id}`).then((res) => {
                setFilteredSearch3(res.data)
            })
        }
        else{
            alert('No image to identify')
        }

    }
    //get Video
    const getVideo = () => {
        setImageURL(null)
        navigator.mediaDevices.getUserMedia({
            video: { width: 322, height: 270 }
        })
            .then(stream => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch(err => {
                console.log(err)
            })
        setiscam(true)

    }
    //Take photo
    const takePhoto = () => {
        if(isCam){
            const width = 322
            const height = 270
    
            let video = videoRef.current;
            let photo = photoRef.current;
    
            photo.width = width;
            photo.height = height;
    
            let ctx = photo.getContext('2d');
            ctx.drawImage(video, 0, 0, width, height);
            sethasPhoto(true);
        }
        else{
            alert('Camera is not on!')
        }
        
    }
    // Stop video
    const stopVideo = () => {
        navigator.mediaDevices.getUserMedia({
            video: { width: 322, height: 270 }
        })
            .then(stream => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.stop();
            })
            .catch(err => {
                console.log(err)
            })
        setiscam(false)
    }
    //Photo Close
    const closePhoto = () => {
        let photo = photoRef.current;
        let ctx = photo.getContext('2d')
        ctx.clearRect(0, 0, photo.width, photo.height)
        sethasPhoto(false)
    }

    return (
        <div className="all">
            <NavBarUser />
            <div className="add-meal-recordMR">
                <div className="div-3">
                    <div className="frame-22">
                        <div className="flexcontainer">
                            <p className="text">
                                <span className="span">Why not start your day.... </span><br></br><br></br><span className="span">with</span>
                            </p>
                        </div>
                        <br></br>
                        <div className="text-wrapper-60">FoodScanner™</div>
                    </div>
                    <div className="food-compMR">
                        <div className="text-wrapper">food comparison.</div>
                        <div className="div">First food:</div>
                        <div className="text-wrapper-2">Second food:</div>
                        <div className="frame">
                            <input className="label" placeholder="   Search for the first food" onChange={handleSearch} />
                            {/* <img className="icon-magnifying" alt="Icon magnifying" src={vector} /> */}
                        </div>
                        <div className="frame-2">
                            <input className="label" placeholder="   Search for the second food" onChange={handleSearch2} />
                            {/* <img className="icon-magnifying" alt="Icon magnifying" src={vector} /> */}
                        </div>
                        <div className="frame-5">
                            <div className="rectangle-2" />
                            <div className="details-box">
                                <div className="box">
                                    <div className="overlap-group">
                                        <div className="text-wrapper-7">weight (g)</div>
                                        <div className="text-wrapper-8">sodium (mg)</div>
                                        <div className="text-wrapper-9">calories (kcal)</div>
                                        <div className="text-wrapper-10">{filteredSearch.length > 0 && filteredSearch[0].weight}</div>
                                        <div className="text-wrapper-11">{filteredSearch.length > 0 && filteredSearch[0].sodium}</div>
                                        <div className="text-wrapper-12">{filteredSearch.length > 0 && filteredSearch[0].kcal}</div>
                                    </div>
                                </div>
                                <div className="overlap-wrapper">
                                    <div className="overlap">
                                        <div className="text-wrapper-13">carbohydrate (g)</div>
                                        <div className="text-wrapper-14">protein (g)</div>
                                        <div className="text-wrapper-15">fat (g) </div>
                                        <div className="text-wrapper-16">{filteredSearch.length > 0 && filteredSearch[0].carbohydrate}</div>
                                        <div className="text-wrapper-17">{filteredSearch.length > 0 && filteredSearch[0].protein}</div>
                                        <div className="text-wrapper-18">{filteredSearch.length > 0 && filteredSearch[0].fat}</div>
                                    </div>
                                </div>
                                <div className="overlap-wrapper">
                                    <div className="overlap-2">
                                        <div className="text-wrapper-13">Fibre (g)</div>
                                        <div className="text-wrapper-19">saturated fat (g)</div>
                                        <div className="text-wrapper-20">cholesterol (mg)</div>
                                        <div className="text-wrapper-16">{filteredSearch.length > 0 && filteredSearch[0].dietaryfibre}</div>
                                        <div className="text-wrapper-17">{filteredSearch.length > 0 && filteredSearch[0].saturatedfat}</div>
                                        <div className="text-wrapper-18">{filteredSearch.length > 0 && filteredSearch[0].cholesterol}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-6">
                            <div className="rectangle-2" />
                            <div className="details-box-2">
                                <div className="box">
                                    <div className="overlap-group">
                                        <div className="text-wrapper-7">weight (g)</div>
                                        <div className="text-wrapper-8">sodium (mg)</div>
                                        <div className="text-wrapper-9">calories (kcal)</div>
                                        <div className="text-wrapper-10">{filteredSearch2.length > 0 && filteredSearch2[0].weight}</div>
                                        <div className="text-wrapper-11">{filteredSearch2.length > 0 && filteredSearch2[0].sodium}</div>
                                        <div className="text-wrapper-12">{filteredSearch2.length > 0 && filteredSearch2[0].kcal}</div>
                                    </div>
                                </div>
                                <div className="overlap-wrapper">
                                    <div className="overlap">
                                        <div className="text-wrapper-13">carbohydrate (g)</div>
                                        <div className="text-wrapper-14">protein (g)</div>
                                        <div className="text-wrapper-15">fat (g) </div>
                                        <div className="text-wrapper-16">{filteredSearch2.length > 0 && filteredSearch2[0].carbohydrate}</div>
                                        <div className="text-wrapper-17">{filteredSearch2.length > 0 && filteredSearch2[0].protein}</div>
                                        <div className="text-wrapper-18">{filteredSearch2.length > 0 && filteredSearch2[0].fat}</div>
                                    </div>
                                </div>
                                <div className="overlap-wrapper">
                                    <div className="overlap-2">
                                        <div className="text-wrapper-13">Fibre (g)</div>
                                        <div className="text-wrapper-19">saturated fat (g)</div>
                                        <div className="text-wrapper-20">cholesterol (mg)</div>
                                        <div className="text-wrapper-16">{filteredSearch2.length > 0 && filteredSearch2[0].dietaryfibre}</div>
                                        <div className="text-wrapper-17">{filteredSearch2.length > 0 && filteredSearch2[0].saturatedfat}</div>
                                        <div className="text-wrapper-18">{filteredSearch2.length > 0 && filteredSearch2[0].cholesterol}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="step1n2">
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
                                        <div className="photo1"><canvas ref={photoRef}></canvas></div>
                                    </div>
                                    <div className="photo-wrapper">
                                        <div className="photo2">{imageURL && <img src={imageURL} className="imgML" alt="Upload Preview" crossOrigin="anonymous" ref={imageRef} />}</div>
                                    </div>
                                    <div className="photo-wrapper">
                                        <div className="photo3"><video ref={videoRef}></video></div>
                                    </div>

                                    <div className="text-wrapper-2">FoodScanner™</div>
                                    {results && <p className="p">This is a {results}</p>}
                                    <div className="frame-2">
                                        <div className="overlap-group-wrapper">
                                            <div className="overlap-group-2">
                                                {isCam ? (<button className="rectangle" onClick={stopVideo}>
                                                    <div className="text-wrapper-3">camera off</div>
                                                </button>)
                                                    :
                                                    (<button className="rectangle" onClick={getVideo}>
                                                        <div className="text-wrapper-3">camera on</div>
                                                    </button>)}

                                            </div>
                                        </div>
                                        <div className="overlap-wrapper">
                                            <div className="overlap-2">
                                                <button className="rectangle" onClick={takePhoto}>
                                                    <div className="text-wrapper-4">take photo</div>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="overlap-wrapper">
                                            <div className="overlap-3">
                                                <button className="rectangle-2" onClick={identify}>
                                                    <div className="text-wrapper-5">Identify</div>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="overlap-wrapper-anything">
                                            <div className="overlap-3a">
                                                <button className="rectangle-2" onClick={identify2}>
                                                    <div className="text-wrapper-5">Identify</div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-wrapper">
                                        <div className="overlap-2">
                                            <button className="rectangle-3">
                                                <div className="text-wrapper-6"><input type='file' accept='image/*' capture='camera' onChange={uploadImage} ref={fileInputRef} /></div>
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
                                    <input className="label" placeholder="   What are you intending to eat?" onChange={handleSearch3} />
                                    <div className="p-wrappa"><p>Current nutrition value is based on: <strong>{foodValue}</strong></p></div>

                                    {/* <img className="vector" alt="Vector" src={vector} /> */}
                                </div>
                                <div className="clicked-box-wrapper">
                                    <div className="clicked-box">
                                        <div className="details-box">
                                            <div className="box">
                                                <div className="overlap-group-3">
                                                    <div className="text-wrapper-12">weight (g)</div>
                                                    <div className="text-wrapper-13">sodium (mg)</div>
                                                    <div className="text-wrapper-14">calories (kcal)</div>
                                                    <div className="text-wrapper-15">{filteredSearch3.length > 0 && filteredSearch3[0].weight}</div>
                                                    <div className="text-wrapper-16">{filteredSearch3.length > 0 && filteredSearch3[0].sodium}</div>
                                                    <div className="text-wrapper-17">{filteredSearch3.length > 0 && filteredSearch3[0].kcal}</div>
                                                </div>
                                            </div>
                                            <div className="box-2">
                                                <div className="overlap-4">
                                                    <div className="text-wrapper-18">carbohydrate (g)</div>
                                                    <div className="text-wrapper-19">protein (g)</div>
                                                    <div className="text-wrapper-20">fat (g) </div>
                                                    <div className="text-wrapper-21">{filteredSearch3.length > 0 && filteredSearch3[0].carbohydrate}</div>
                                                    <div className="text-wrapper-22">{filteredSearch3.length > 0 && filteredSearch3[0].protein}</div>
                                                    <div className="text-wrapper-23">{filteredSearch3.length > 0 && filteredSearch3[0].fat}</div>
                                                </div>
                                            </div>
                                            <div className="box-3">
                                                <div className="overlap-5">
                                                    <div className="text-wrapper-18">Fibre (g)</div>
                                                    <div className="text-wrapper-24">saturated fat (g)</div>
                                                    <div className="text-wrapper-25">cholesterol (mg)</div>
                                                    <div className="text-wrapper-21">{filteredSearch3.length > 0 && filteredSearch3[0].dietaryfibre}</div>
                                                    <div className="text-wrapper-22">{filteredSearch3.length > 0 && filteredSearch3[0].saturatedfat}</div>
                                                    <div className="text-wrapper-23">{filteredSearch3.length > 0 && filteredSearch3[0].cholesterol}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="step3">
                        <div className="frame">
                            <p className="p">Who is the one eating {foodValue}?</p>
                            <div className="text-wrapper-2">step 3.</div>
                        </div>
                        <div className="user-choiceMR">
                            {userprofile.map((data, index) => {
                                return <div className="group" key={data.iduserprofile}>
                                    <img className="ellipse" alt="Ellipse" src={ellipse} value={index} onClick={() => toggleNameStyle(index)}
                                        style={nameStyles[index] || { color: 'black', fontWeight: '400' }} />
                                    <div className="text-wrapper" style={nameStyles[index]}>{data.name}</div>
                                </div>
                            })}


                        </div>
                    </div>
                    <div className="frame-wrapper">
                        <button className="frame-23" onClick={CreateMealRecord}>
                            <div className="text-wrapper-61">create meal now</div>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};
