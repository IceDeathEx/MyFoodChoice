import React, { useEffect, useState } from "react";
import "../css/RecipeListstyle.css";
import NavBarUser from "./NavBarUser";
import Axios from "axios";
import { Link } from "react-router-dom";

const RecipeList = () => {
    const [recipeset, setrecipeset] = useState([])
    const [recipeset2, setrecipeset2] = useState([])
    const [toggle, settoggle] = useState(false)
    const [upcondition, setupcondition] = useState([])
    const [condition, setcondition] = useState('')
    const id = JSON.parse(window.localStorage.getItem("account"))
    const purchase1 = [12,5,6] //NEED TO CHANGE TO ARRAY OF TRANSACTION USER BY ID
    useEffect(() => {
        //Get the set items are out
        Axios.get("http://localhost:3002/api/getrecipeset")
            .then((res) => {
                setrecipeset(res.data)
            })
        Axios.get(`http://localhost:3002/api/getUserProfile/${id}`)
            .then((data) => {
                const unique = [...new Set(data.data.map((item) => item.conditions))]
                setupcondition(unique)
                console.log(upcondition)
                setcondition(data.data[0].conditions)
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
    // Create dropdown based on the user profiles medical conditions
    return (
        <div>
            <NavBarUser />
            {upcondition ? (
                <div className="recipe-on-login-sign">
                    <div className="div">
                        <div className="text-wrapper-3">don’t worry....</div>
                        <div className="text-wrapper-4">?</div>
                        <select className="label" onClick={handleCondition}>
                            {upcondition.map((data, index) => {
                                return <option key={index + 1} value={data}>{index + 1}. {data}</option>
                            })}
                        </select>
                        <div className="overlap">
                            <div className="recipe">
                                {recipeset.filter((filter) => filter.healthcategory === condition || filter.healthcategory === 'All').map((data, index) => {
                                    if (purchase1.filter((number) => number === data.setid).length > 0) {
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
                                                    <button className="button">
                                                        <div className="text">$ {data.recipesetprice} - Order Now  </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                })}
                            </div>
                        </div>
                        <div className="recipe-2">

                            {!toggle && recipeset.map((data, index) => {
                                if (purchase1.filter((number) => number === data.setid).length > 0) {
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
                                else{
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
                                            <button className="button">
                                                <div className="text">$ {data.recipesetprice} - Order Now  </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                }
                                
                            })}
                            {toggle && recipeset2.map((data, index) => {
                                if (purchase1.filter((number) => number === data.setid).length > 0) {
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
                                else{

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
                                            <button className="button">
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