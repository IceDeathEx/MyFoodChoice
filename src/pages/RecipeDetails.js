import React, { useState, useEffect } from "react";
import "../css/RecipeDetailsstyle.css";
import foodPhoto from '../pics/rectangle-392.png'
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import NavBarUser from "./NavBarUser";
import CareCalories from "../server/config/CareCalories";

const RecipeDetails = () => {
    const id = useParams() // This is the id passed from previous page.
    const [recipeset, setrecipeset] = useState([])
    const [recipeingredient, setrecipeingredient] = useState([])
    const [recipestep, setrecipestep] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [recipe, setrecipe] = useState('')
    const [img, setimg] = useState('')
    const [recipearr, setrecipearr] = useState([])
    useEffect(() => {
        let x = ''
        CareCalories.get(`/api/getrecipesetbyid/${id.id}`)
            .then((res) => {
                setrecipeset(res.data)
                setrecipe(res.data[0].recipeid1)
                x = res.data[0].recipeid1
            })
        CareCalories.get("/api/getrecipestep")
            .then((res) => {
                setrecipestep(res.data)
            })
        CareCalories.get("/api/getrecipeingredient")
            .then((res) => {
                setrecipeingredient(res.data)
            })
        CareCalories.get("/api/getrecipe")
            .then((res) => {
                setrecipearr(res.data)
                setimg(res.data.filter((res)=> res.recipetitle === x)[0].recipeimage)
                
            })
        setIsLoading(false)
    }, [])
    const handleClick =  (e) => {
        setrecipe(e.target.value)
        setimg(recipearr.filter((res)=> res.recipetitle === e.target.value)[0].recipeimage)
    }
    return (
        <div>
            <NavBarUser />
            {recipeset[0] ? (
                <div className="recipeDetails">
                    <div className="div">
                        <img className="rectangle" alt="Rectangle" src={img} />
                        <div className="text-wrapper">{recipe}</div>
                        <Link to="/recipe" className="back">&lt; Back</Link>
                        <div className="recipe-list">
                            <div className="frame">
                                <div className="text-wrapper-2">{recipeset[0].settitle}</div>
                                <div className="text-wrapper-3">{recipeset[0].diettype}, {recipeset[0].healthcategory}</div>
                                {recipeset[0].recipeid1 && <div className="text-wrapper-4"><button className="btn" onClick={handleClick} value={recipeset[0].recipeid1}>{recipeset[0].recipeid1}</button></div>}
                                {recipeset[0].recipeid2 && <div className="text-wrapper-4"><button className="btn" onClick={handleClick} value={recipeset[0].recipeid2}>{recipeset[0].recipeid2}</button></div>}
                                {recipeset[0].recipeid3 && <div className="text-wrapper-4"><button className="btn" onClick={handleClick} value={recipeset[0].recipeid3}>{recipeset[0].recipeid3}</button></div>}
                                {recipeset[0].recipeid4 && <div className="text-wrapper-4"><button className="btn" onClick={handleClick} value={recipeset[0].recipeid4}>{recipeset[0].recipeid4}</button></div>}
                            </div>
                        </div>

                        <div className="text-wrapper-5">Ingredients.</div>
                        <div className="text-wrapper-6">Steps.</div>

                        <div className="flexcontainer">
                            {recipeingredient.filter((res) => res.recipetitle.toLowerCase() === recipe.toLowerCase()).map((data, index, arr) => {
                                const previous = arr[index - 1];
                                if (index === 0) {
                                    return <div key={index}>
                                        <h2>{data.foodcomponent}</h2>
                                        <p className="text"><span className="span">- {data.ingredient}</span></p>
                                    </div>
                                }
                                else if (data.foodcomponent === previous.foodcomponent) {
                                    return <div key={index}>
                                        <p className="text"><span className="span">- {data.ingredient}</span></p>
                                    </div>
                                }
                                else {
                                    return <div key={index}>
                                        <h2>{data.foodcomponent}</h2>
                                        <p className="text"><span className="span">- {data.ingredient}</span></p>
                                    </div>
                                }
                            })}
                        </div>

                        <div className="flexcontainer-2">
                            {recipestep.filter((res) => res.recipetitle.toLowerCase() === recipe.toLowerCase()).map((data, index) => {
                                return <div key={index}>
                                    <h2>Step. {data.stepno}</h2>
                                    <p className="text"><span className="span">- {data.step}</span></p>
                                </div>
                            })}
                        </div>
                        
                        {recipearr.filter((res)=> res.recipetitle.toLowerCase() === recipe.toLowerCase()).map((data,index)=>{
                                return <div className="details-box" key={index}>
                            
                                <div className="box">
                                    <div className="overlap-group">
                                        <div className="text-wrapper-7">protein(g)</div>
                                        <div className="text-wrapper-8">carbs(g)</div>
                                        <div className="text-wrapper-9">sugar(g)</div>
                                        <div className="text-wrapper-10">{data.protein}</div>
                                        <div className="text-wrapper-11">{data.carbohydrate}</div>
                                        <div className="text-wrapper-12">{data.sugar}</div>
                                    </div>
                                </div>
                                <div className="overlap-wrapper">
                                    <div className="overlap">
                                        <div className="text-wrapper-13">saturated fat(g)</div>
                                        <div className="text-wrapper-14">sodium(mg)</div>
                                        <div className="text-wrapper-15">cholesterol(mg)</div>
                                        <div className="text-wrapper-16">{data.saturatedfat}</div>
                                        <div className="text-wrapper-17">{data.sodium}</div>
                                        <div className="text-wrapper-18">{data.cholesterol}</div>
                                    </div>
                                </div>
                                <div className="overlap-wrapper">
                                    <div className="overlap-2">
                                        <div className="text-wrapper-13">Fibre(g)</div>
                                        <div className="text-wrapper-19">total fat(g)</div>
                                        <div className="text-wrapper-20">calories(kcal)</div>
                                        <div className="text-wrapper-16">{data.dietaryfibre}</div>
                                        <div className="text-wrapper-17">{data.fat}</div>
                                        <div className="text-wrapper-18">{data.calories}</div>
                                    </div>
                                </div>
                            </div>
                            })}
                        
                    </div>
                </div>
            ) : (
                <p>Still Loading</p>
            )
            }

        </div>
    );
};

export default RecipeDetails;
