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
            })
        CareCalories.get(`/api/getshoppingcart/${id}`)
            .then((data) => {
                settransaction(data.data)
            })
        CareCalories.get(`/api/gettransactionpaid/${id}`)
            .then((data) => {
                settransactionpaid(data.data)
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
    // Create dropdown based on the user profiles medical conditions
    return (
        <div className="all">
            <NavBarUser />
            {upcondition ? (
                <div className="recipe-on-login-sign">
                    <div className="div">
                        <div className="text-wrapper-3">don’t worry,<br/>  we show the best for you</div>
                       
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
<div className="recomtext-wrapper">List</div>
<div className="recomframe">
<div className="recomgroup">
<img className="recomline" alt="Line" src={line_4} />
<div className="recomdiv">Encik Tan’s</div>
</div>
<div className="recomgroup">
<img className="recomline" alt="Line" src={line_4} />
<div className="recomdiv">Encik Tan’s</div>
</div>
<div className="recomgroup">
<img className="recomline" alt="Line" src={line_4}  />
<div className="recomdiv">Encik Tan’s</div>
</div>
<div className="recomgroup">
<img className="recomline" alt="Line" src={line_4}  />
<div className="recomdiv">Encik Tan’s</div>
</div>
</div>
</div>
                            <div className="macroDetails">

                            <select className="accountselect">
                                <option>Nicholas</option>
                                <option>Nicholas</option>
                                <option>Nicholas</option>
                                <option>Nicholas</option>
                                </select>
                                <p>Natrium 70%</p>
                            <Line percent={70} strokeWidth={4} strokeColor="#FF0000" /> 
                            <p>Natrium 70%</p>
                            <Line percent={10} strokeWidth={4} strokeColor="#ADF7b6" />
                            <p>Natrium 70%</p>
                            <Line percent={60} strokeWidth={4} strokeColor="#FFEE93" />
                            <p>Natrium 70%</p>
                            <Line percent={60} strokeWidth={4} strokeColor="#D3D3D3" />
                            <p>Natrium 70%</p>
                            <Line percent={10} strokeWidth={4} strokeColor="#D3D3D3" />
                            <p>Natrium 70%</p>
                            <Line percent={10} strokeWidth={4} strokeColor="#D3D3D3" />
                            <p>Natrium 70%</p>
                            <Line percent={10} strokeWidth={4} strokeColor="#D3D3D3" />
                            <p>Natrium 70%</p>
                            <Line percent={10} strokeWidth={4} strokeColor="#D3D3D3" />
                            <p>Natrium 70%</p>
                            <Line percent={10} strokeWidth={4} strokeColor="#D3D3D3" />

                            </div>
                            {/* <ProgressBar now={61.5} label={61.5} />
                            <ProgressBar variant="warning" now={61.5} label={61.5} />
                            <ProgressBar variant="danger" now={199 / 3} label={199 / 3} /> */}
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