import React, { useEffect, useState } from "react";
import "../css/RecipeListstyle.css";
import NavBarUser from "./NavBarUser";
import { useNavigate } from "react-router";
import dateFormat from 'dateformat';
import { Link } from "react-router-dom";
import line_4 from "../pics/Line_4.svg";
import CareCalories from "../server/config/CareCalories";
import { Line, Circle } from 'rc-progress';
//import ProgressBar from 'react-bootstrap/ProgressBar';
//import 'bootstrap/dist/css/bootstrap.min.css';
const RecipeList = () => {
    const [recipeset, setrecipeset] = useState([])
    const [recipeset2, setrecipeset2] = useState([])
    const [toggle, settoggle] = useState(false)
    const [upcondition, setupcondition] = useState([])
    const [condition, setcondition] = useState('')
    const id = JSON.parse(window.localStorage.getItem("account"))
    const navigate = useNavigate()
    const [transaction, settransaction] = useState([])
    const [transactionpaid, settransactionpaid] = useState([])
    const [userprofile, setuserprofile] = useState([])
    const [usernutrient, setusernutrient] = useState([])
    const [usertotalcalories, setusertotalcalories] = useState([])
    const currentDate = new Date()
    const [protein, setprotein] = useState([])
    const [carbohydate, setcarbohydate] = useState([])
    const [fat, setfat] = useState([])
    const [satfat, setsatfat] = useState([])
    const [cholesterol, setcholesterol] = useState([])
    const [sodium, setsodium] = useState([])
    const [dietaryfibre, setdietaryfibre] = useState([])
    useEffect(() => {
        //Get the set items are out
        CareCalories.get("/api/getrecipeset")
            .then((res) => {
                setrecipeset(res.data)
            })
        CareCalories.get(`/api/getUserProfile/${id}`)
            .then((data) => {
                const unique = [...new Set(data.data.map((item) => item.conditions))]
                setupcondition(unique)
                setcondition(data.data[0].conditions)
                setuserprofile(data.data)
            })
        CareCalories.get(`/api/getshoppingcart/${id}`)
            .then((data) => {
                settransaction(data.data)
            })
        CareCalories.get(`/api/gettransactionpaid/${id}`)
            .then((data) => {
                settransactionpaid(data.data)
            })
        CareCalories.get(`/api/getmealrecordfullinfo/${id}`, { params: { upid: 1, mrdate: dateFormat(currentDate, 'yyyy/mm/dd') } })
            .then((data) => {
                setusernutrient(data.data)
               // console.log(data.data)
               if(data.data.length !== 0){
                setprotein(data.data[0].protein / 500 * 100)
                setcarbohydate(data.data[0].carbohydate / 500 * 100)
                setfat(data.data[0].fat / 50 * 100)
                setsatfat(data.data[0].saturatedfat / 50 * 100)
                setsodium(data.data[0].sodium / 1000 * 100)
                setcholesterol(data.data[0].cholesterol / 1000 * 100)
                setdietaryfibre(data.data[0].dietaryfibre / 20 * 100)
               }
               else{
                setprotein(0)
                setcarbohydate(0)
                setfat(0)
                setsatfat(0)
                setsodium(0)
                setcholesterol(0)
                setdietaryfibre(0)
               }

            })
        CareCalories.get(`/api/totalcalories/${id}`, {
            params:{upid: 1, mrdate: dateFormat(currentDate, 'yyyy/mm/dd')}
            })
            .then((data) =>{
                setusertotalcalories(data.data)
                //console.log(data.data)
            })

    }, [])
    const handleCondition = (e) => {
        setcondition(e.target.value)
    }
    const handleSearch = (e) => {
        if (e.target.value === null) {
            settoggle(false)
        }
        else {
            setrecipeset2(recipeset.filter((res) => res.recipeid1.toLowerCase().includes(e.target.value)))
            settoggle(true)
        }

    }
    const handleOrder = (item) => {
        if (transaction.filter((res) => res.transitemid === item.setid && res.transcategory === 'Recipe').length === 0) {
            var today = new Date()
            CareCalories.post(`/api/createtransaction/${id}`, {
                uid: id,
                transitemid: item.setid,
                transitemname: item.settitle,
                transitemprice: item.recipesetprice,
                transqty: 1,
                transdate: dateFormat(today, "yyyy-mm-dd HH:MM:ss"),
                transitemvendor: 'Care Calories',
                transstatus: 'Ongoing',
                payment: 'Counter',
                transcategory: 'Recipe'
            })
            navigate('/shoppingcart')
            //window.location.reload()
        }
        else {
            console.log('Already added')
        }

    }
    const handleUserSwap = (e) => {
        console.log(e.target.value)
        CareCalories.get(`/api/getmealrecordfullinfo/${id}`, { params: { upid: e.target.value, mrdate: dateFormat(currentDate, 'yyyy/mm/dd') } })
            .then((data) => {
                setusernutrient(data.data)
               // console.log(data.data)
               if(data.data.length !==0){
                setprotein(data.data[0].protein / 500 * 100)
                setcarbohydate(data.data[0].carbohydate / 500 * 100)
                setfat(data.data[0].fat / 50 * 100)
                setsatfat(data.data[0].saturatedfat / 50 * 100)
                setsodium(data.data[0].sodium / 1000 * 100)
                setcholesterol(data.data[0].cholesterol / 1000 * 100)
                setdietaryfibre(data.data[0].dietaryfibre / 20 * 100)
               }
               else{
                setprotein(0)
                setcarbohydate(0)
                setfat(0)
                setsatfat(0)
                setsodium(0)
                setcholesterol(0)
                setdietaryfibre(0)
               }

            })
        CareCalories.get(`/api/totalcalories/${id}`, {
            params:{upid: e.target.value, mrdate: dateFormat(currentDate, 'yyyy/mm/dd')}
            })
            .then((data) =>{
                setusertotalcalories(data.data)
                //console.log(data.data)
            })

    }
    const handleRecc = (e) => {
        //console.log(userprofile)
        if(e){
            setcondition(userprofile.filter((res)=> res.iduserprofile === e)[0].conditions)
        }

    }
    return (
        <div className="all">
            <NavBarUser />
            {upcondition ? (
                <div className="recipe-on-login-sign">
                    <div className="div">
                        <div className="text-wrapper-3">don’t worry,<br />  we show the best for you</div>
                        <div className="overlap">
                            <div className="recipe">
                                {recipeset.filter((filter) => filter.healthcategory === condition || filter.healthcategory === 'All').slice(0, 6).map((data, index) => {
                                    if (transactionpaid.filter((number) => number.transitemid === data.setid).length > 0) {
                                        return <div className={`div-${index + 2}`} key={index + 1}>
                                            <div className="recipe-com">
                                                <div className="frame-2">
                                                    <div className="frame-wrapper">
                                                        <div className="frame-3">
                                                            <div className="text-wrapper-5">{data.settitle}</div>
                                                            <div className="text-wrapper-6">{data.diettype}, {data.healthcategory}</div>
                                                            <div className="text-wrapper-7">{data.recipeid1}</div>
                                                            <div className="text-wrapper-7">{data.recipeid2}</div>
                                                            <div className="text-wrapper-7">{data.recipeid3}</div>
                                                            <div className="text-wrapper-7">{data.recipeid4}</div>
                                                        </div>
                                                    </div>
                                                    <Link to={`/recipedetails/${data.setid}`}><button className="button">
                                                        <div className="text">Read Now</div>
                                                    </button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    else {
                                        return <div className={`div-${index + 2}`} key={index + 1}>
                                            <div className="recipe-com">
                                                <div className="frame-2">
                                                    <div className="frame-wrapper">
                                                        <div className="frame-3">
                                                            <div className="text-wrapper-5">{data.settitle}</div>
                                                            <div className="text-wrapper-6">{data.diettype}, {data.healthcategory}</div>
                                                            <div className="text-wrapper-7">{data.recipeid1}</div>
                                                            <div className="text-wrapper-7">{data.recipeid2}</div>
                                                            <div className="text-wrapper-7">{data.recipeid3}</div>
                                                            <div className="text-wrapper-7">{data.recipeid4}</div>
                                                        </div>
                                                    </div>
                                                    <button className="button" onClick={() => handleOrder(data)}>
                                                        <div className="text">$ {data.recipesetprice} - Order Now  </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                })}
                            </div>
                        </div>

                        <div className="drpbox">
                            <div className="recom">
                                <div className="recomtext-wrapper">Recommendations</div>
                                <div className="recomframe">
                                    {userprofile.map((profiles, index) => {
                                        return <div className="recomgroup" key={index}>
                                            <img className="recomline" alt="Line" src={line_4} />
                                            <button onClick={() =>handleRecc(profiles.iduserprofile)} className="btn"><div className="recomdiv">{profiles.name}</div></button>
                                        </div>
                                    })}
                                </div>
                            </div>
                            <div className="macroDetails">

                                <select className="accountselect" onChange={handleUserSwap}>
                                    {userprofile.map((profiles, index) => {
                                        return <option key={index} value={index+1}>{profiles.name}</option>
                                    })}

                                </select>
                                <h1>Daily Avg consumed.</h1>

                                <p>Calories(g): {usertotalcalories[0] ? usertotalcalories[0].kcal.toFixed(0) : 0}/2000 ({usertotalcalories[0] ? (usertotalcalories[0].kcal / 2000 * 100).toFixed(2) : 0}%)</p>
                                <Line percent={usertotalcalories[0] ? usertotalcalories[0].kcal / 2000 * 100 : 0} strokeWidth={4} strokeColor={
                                    usertotalcalories[0] && usertotalcalories[0].kcal / 2000 * 100 >= 100
                                        ? "#FF0000" // Red if more than 100%
                                        : usertotalcalories[0] && usertotalcalories[0].kcal / 2000 * 100 >= 90
                                            ? "#FFBA00" // Orange if 90% or more
                                            : "#00FF00" // Green for other cases
                                } />

                                <p>Protein(g): {usernutrient[0] ? usernutrient[0].protein.toFixed(2):0}/500 ({usernutrient[0] ? protein.toFixed(2):0}%)</p>
                                <Line percent={usernutrient[0] ? usernutrient[0].protein / 500 * 100:0} strokeWidth={4} strokeColor={
                                    usernutrient[0] && usernutrient[0].protein / 500 * 100 >= 100
                                        ? "#FF0000" // Red if more than 100%
                                        : usernutrient[0] && usernutrient[0].protein / 500 * 100 >= 90
                                            ? "#FFBA00" // Orange if 90% or more
                                            : "#00FF00" // Green for other cases
                                } />

                                <p>Carbohydrate(g): {usernutrient[0] ? usernutrient[0].carbohydate.toFixed(2):0}/500 ({usernutrient[0] ? carbohydate.toFixed(2):0}%)</p>
                                <Line percent={usernutrient[0] ? usernutrient[0].carbohydate / 500 * 100:0} strokeWidth={4} strokeColor={
                                    usernutrient[0] && usernutrient[0].carbohydate / 500 * 100 >= 100
                                        ? "#FF0000" // Red if more than 100%
                                        : usernutrient[0] && usernutrient[0].carbohydate / 500 * 100 >= 90
                                            ? "#FFBA00" // Orange if 90% or more
                                            : "#00FF00" // Green for other cases
                                } />

                                <p>Fat(g): {usernutrient[0] ? usernutrient[0].fat.toFixed(2):0}/50 ({usernutrient[0] ? fat.toFixed(2): 0}%)</p>
                                <Line percent={usernutrient[0] ? usernutrient[0].fat / 50 * 100:0} strokeWidth={4} strokeColor={
                                    usernutrient[0] && usernutrient[0].fat / 50 * 10 >= 100
                                        ? "#FF0000" // Red if more than 100%
                                        : usernutrient[0] && usernutrient[0].fat / 50 * 10 >= 90
                                            ? "#FFBA00" // Orange if 90% or more
                                            : "#00FF00" // Green for other cases
                                } />

                                <p>Saturated Fat(g): {usernutrient[0] ? usernutrient[0].saturatedfat.toFixed(2):0}/50 ({usernutrient[0] ? satfat.toFixed(2):0}%)</p>
                                <Line percent={usernutrient[0] ? usernutrient[0].saturatedfat / 50 * 100:0} strokeWidth={4} strokeColor={
                                    usernutrient[0] && usernutrient[0].saturatedfat / 50 * 100 >= 100
                                        ? "#FF0000" // Red if more than 100%
                                        : usernutrient[0] && usernutrient[0].saturatedfat / 50 * 100 >= 90
                                            ? "#FFBA00" // Orange if 90% or more
                                            : "#00FF00" // Green for other cases
                                } />

                                <p>Sodium(mg): {usernutrient[0] ? usernutrient[0].sodium.toFixed(2):0}/1000 ({usernutrient[0] ? sodium.toFixed(2):0}%)</p>
                                <Line percent={usernutrient[0] ? usernutrient[0].sodium / 1000 * 100:0} strokeWidth={4} strokeColor={
                                    usernutrient[0] && usernutrient[0].sodium /1000 * 100>= 100
                                        ? "#FF0000" // Red if more than 100%
                                        : usernutrient[0] && usernutrient[0].sodium /1000 * 100>= 90
                                            ? "#FFBA00" // Orange if 90% or more
                                            : "#00FF00" // Green for other cases
                                } />

                                <p>Cholesterol(mg): {usernutrient[0] ? usernutrient[0].cholesterol.toFixed(2):0}/1000 ({usernutrient[0] ? cholesterol.toFixed(2):0}%)</p>
                                <Line percent={usernutrient[0] ? usernutrient[0].cholesterol / 1000 * 100:0} strokeWidth={4} strokeColor={
                                    usernutrient[0] && usernutrient[0].cholesterol /1000 * 100 >= 100
                                        ? "#FF0000" // Red if more than 100%
                                        : usernutrient[0] && usernutrient[0].cholesterol /1000 * 100>= 90
                                            ? "#FFBA00" // Orange if 90% or more
                                            : "#00FF00" // Green for other cases
                                } />

                                <p>Dietary Fibre(g): {usernutrient[0] ? usernutrient[0].dietaryfibre.toFixed(2):0}/20 ({usernutrient[0] ? dietaryfibre.toFixed(2):0}%)</p>
                                <Line percent={usernutrient[0] ? usernutrient[0].dietaryfibre / 20 * 100:0} strokeWidth={4} strokeColor={
                                    usernutrient[0] && usernutrient[0].dietaryfibre / 20 * 100>= 100
                                        ? "#FF0000" // Red if more than 100%
                                        : usernutrient[0] && usernutrient[0].dietaryfibre / 20 * 100>= 90
                                            ? "#FFBA00" // Orange if 90% or more
                                            : "#00FF00" // Green for other cases
                                } />
                            </div>

                        </div>
                        <div className="recipe-2">

                            {!toggle && recipeset.map((data, index) => {
                                if (transactionpaid.filter((number) => number.transitemid === data.setid).length > 0) {
                                    return <div className={`div-${index + 2}`} key={index + 1}>
                                        <div className="recipe-com">
                                            <div className="frame-2">
                                                <div className="frame-wrapper">
                                                    <div className="frame-3">
                                                        <div className="text-wrapper-5">{data.settitle}</div>
                                                        <div className="text-wrapper-6">{data.diettype}, {data.healthcategory}</div>
                                                        <div className="text-wrapper-7">{data.recipeid1}</div>
                                                        <div className="text-wrapper-7">{data.recipeid2}</div>
                                                        <div className="text-wrapper-7">{data.recipeid3}</div>
                                                        <div className="text-wrapper-7">{data.recipeid4}</div>
                                                    </div>
                                                </div>
                                                <Link to={`/recipedetails/${data.setid}`}><button className="button">
                                                    <div className="text">Read Now</div>
                                                </button></Link>
                                            </div>
                                        </div>
                                    </div>
                                }
                                else {
                                    return <div className={`div-${index + 2}`} key={index + 1}>
                                        <div className="recipe-com">
                                            <div className="frame-2">
                                                <div className="frame-wrapper">
                                                    <div className="frame-3">
                                                        <div className="text-wrapper-5">{data.settitle}</div>
                                                        <div className="text-wrapper-6">{data.diettype}, {data.healthcategory}</div>
                                                        <div className="text-wrapper-7">{data.recipeid1}</div>
                                                        <div className="text-wrapper-7">{data.recipeid2}</div>
                                                        <div className="text-wrapper-7">{data.recipeid3}</div>
                                                        <div className="text-wrapper-7">{data.recipeid4}</div>
                                                    </div>
                                                </div>
                                                <button className="button" onClick={() => handleOrder(data)}>
                                                    <div className="text">$ {data.recipesetprice} - Order Now  </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                }

                            })}
                            {toggle && recipeset2.map((data, index) => {
                                if (transactionpaid.filter((number) => number.transitemid === data.setid).length > 0) {
                                    return <div className={`div-${index + 2}`} key={index + 1}>
                                        <div className="recipe-com">
                                            <div className="frame-2">
                                                <div className="frame-wrapper">
                                                    <div className="frame-3">
                                                        <div className="text-wrapper-5">{data.settitle}</div>
                                                        <div className="text-wrapper-6">{data.diettype}, {data.healthcategory}</div>
                                                        <div className="text-wrapper-7">{data.recipeid1}</div>
                                                        <div className="text-wrapper-7">{data.recipeid2}</div>
                                                        <div className="text-wrapper-7">{data.recipeid3}</div>
                                                        <div className="text-wrapper-7">{data.recipeid4}</div>
                                                    </div>
                                                </div>
                                                <Link to={`/recipedetails/${data.setid}`}><button className="button">
                                                    <div className="text">Read Now</div>
                                                </button></Link>
                                            </div>
                                        </div>
                                    </div>
                                }
                                else {

                                }
                                return <div className={`div-${index + 2}`} key={index + 1}>
                                    <div className="recipe-com">
                                        <div className="frame-2">
                                            <div className="frame-wrapper">
                                                <div className="frame-3">
                                                    <div className="text-wrapper-5">{data.settitle}</div>
                                                    <div className="text-wrapper-6">{data.diettype}, {data.healthcategory}</div>
                                                    <div className="text-wrapper-7">{data.recipeid1}</div>
                                                    <div className="text-wrapper-7">{data.recipeid2}</div>
                                                    <div className="text-wrapper-7">{data.recipeid3}</div>
                                                    <div className="text-wrapper-7">{data.recipeid4}</div>
                                                </div>
                                            </div>
                                            <button className="button" onClick={() => handleOrder(data)}>
                                                <div className="text">$ {data.recipesetprice} - Order Now  </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className="text-wrapper-8">other recipes.
                            <input type="search" onChange={handleSearch} />
                        </div>
                    </div>
                </div>
            ) : (
                <p>Still Loading</p>
            )}

        </div>
    );
};

export default RecipeList;