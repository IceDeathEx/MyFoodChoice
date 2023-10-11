import React from "react";
import "../css/RecipeListstyle.css";
import NavBarUser from "./NavBarUser";
import { useNavigate } from "react-router";

const RecipeList = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/recipedetails")
    }
    // Create dropdown based on the user profiles medical conditions
    
    //Create dynamic webpage
    return (
        <div>
            <NavBarUser/>
        
        <div className="recipe-on-login-sign">
            
            <div className="div">
                
                
                <div className="text-wrapper-3">don’t worry....</div>
                <div className="text-wrapper-4">?</div>
                <select className="label" > 
                    <option>Diabetic</option>
                    <option>Cancer</option>
                </select>
                <div className="overlap">
                    <div className="div-2">
                        <div className="frame-2">
                            <div className="frame-wrapper">
                                <div className="frame-3">
                                    <div className="text-wrapper-5">Encik Tan’s Fav</div>
                                    <div className="text-wrapper-6">Keto Diet</div>
                                    <div className="text-wrapper-7">Food 1</div>
                                    <div className="text-wrapper-7">Food 2</div>
                                    <div className="text-wrapper-7">Food 3</div>
                                    <div className="text-wrapper-7">Snack</div>
                                </div>
                            </div>
                            <button className="button" onClick={handleClick} >
                                <div className="text">Order Now</div>
                            </button>
                        </div>
                    </div>
                    <div className="div-3">
                        <div className="frame-2">
                            <div className="frame-wrapper">
                                <div className="frame-3">
                                    <div className="text-wrapper-5">Encik Tan’s Fav</div>
                                    <div className="text-wrapper-6">Keto Diet</div>
                                    <div className="text-wrapper-7">Food 1</div>
                                    <div className="text-wrapper-7">Food 2</div>
                                    <div className="text-wrapper-7">Food 3</div>
                                    <div className="text-wrapper-7">Snack</div>
                                </div>
                            </div>
                            <button className="button">
                                <div className="text">Order Now</div>
                            </button>
                        </div>
                    </div>
                    <div className="div-4">
                        <div className="frame-2">
                            <div className="frame-wrapper">
                                <div className="frame-3">
                                    <div className="text-wrapper-5">Encik Tan’s Fav</div>
                                    <div className="text-wrapper-6">Keto Diet</div>
                                    <div className="text-wrapper-7">Food 1</div>
                                    <div className="text-wrapper-7">Food 2</div>
                                    <div className="text-wrapper-7">Food 3</div>
                                    <div className="text-wrapper-7">Snack</div>
                                </div>
                            </div>
                            <button className="button">
                                <div className="text">Order Now</div>
                            </button>
                        </div>
                    </div>
                    <div className="div-5">
                        <div className="frame-2">
                            <div className="frame-wrapper">
                                <div className="frame-3">
                                    <div className="text-wrapper-5">Encik Tan’s Fav</div>
                                    <div className="text-wrapper-6">Keto Diet</div>
                                    <div className="text-wrapper-7">Food 1</div>
                                    <div className="text-wrapper-7">Food 2</div>
                                    <div className="text-wrapper-7">Food 3</div>
                                    <div className="text-wrapper-7">Snack</div>
                                </div>
                            </div>
                            <button className="button">
                                <div className="text">Order Now</div>
                            </button>
                        </div>
                    </div>
                    <div className="div-6">
                        <div className="frame-2">
                            <div className="frame-wrapper">
                                <div className="frame-3">
                                    <div className="text-wrapper-5">Encik Tan’s Fav</div>
                                    <div className="text-wrapper-6">Keto Diet</div>
                                    <div className="text-wrapper-7">Food 1</div>
                                    <div className="text-wrapper-7">Food 2</div>
                                    <div className="text-wrapper-7">Food 3</div>
                                    <div className="text-wrapper-7">Snack</div>
                                </div>
                            </div>
                            <button className="button">
                                <div className="text">Order Now</div>
                            </button>
                        </div>
                    </div>
                    <div className="div-7">
                        <div className="frame-2">
                            <div className="frame-wrapper">
                                <div className="frame-3">
                                    <div className="text-wrapper-5">Encik Tan’s Fav</div>
                                    <div className="text-wrapper-6">Keto Diet</div>
                                    <div className="text-wrapper-7">Food 1</div>
                                    <div className="text-wrapper-7">Food 2</div>
                                    <div className="text-wrapper-7">Food 3</div>
                                    <div className="text-wrapper-7">Snack</div>
                                </div>
                            </div>
                            <button className="button">
                                <div className="text">Order Now</div>
                            </button>
                        </div>
                    </div>
                    <div className="recipe">
                        <div className="div-2">
                            <div className="frame-2">
                                <div className="frame-wrapper">
                                    <div className="frame-3">
                                        <div className="text-wrapper-5">Encik Tan’s Fav</div>
                                        <div className="text-wrapper-6">Keto Diet</div>
                                        <div className="text-wrapper-7">Food 1</div>
                                        <div className="text-wrapper-7">Food 2</div>
                                        <div className="text-wrapper-7">Food 3</div>
                                        <div className="text-wrapper-7">Snack</div>
                                    </div>
                                </div>
                                <button className="button" onClick={handleClick}>
                                <div className="text">Read Now</div>
                                </button>
                            </div>
                        </div>
                        <div className="div-3">
                            <div className="frame-2">
                                <div className="frame-wrapper">
                                    <div className="frame-3">
                                        <div className="text-wrapper-5">Encik Tan’s Fav</div>
                                        <div className="text-wrapper-6">Keto Diet</div>
                                        <div className="text-wrapper-7">Food 1</div>
                                        <div className="text-wrapper-7">Food 2</div>
                                        <div className="text-wrapper-7">Food 3</div>
                                        <div className="text-wrapper-7">Snack</div>
                                    </div>
                                </div>
                                <button className="button">
                                    <div className="text">Order Now</div>
                                </button>
                            </div>
                        </div>
                        <div className="div-4">
                            <div className="frame-2">
                                <div className="frame-wrapper">
                                    <div className="frame-3">
                                        <div className="text-wrapper-5">Encik Tan’s Fav</div>
                                        <div className="text-wrapper-6">Keto Diet</div>
                                        <div className="text-wrapper-7">Food 1</div>
                                        <div className="text-wrapper-7">Food 2</div>
                                        <div className="text-wrapper-7">Food 3</div>
                                        <div className="text-wrapper-7">Snack</div>
                                    </div>
                                </div>
                                <button className="button">
                                    <div className="text">Order Now</div>
                                </button>
                            </div>
                        </div>
                        <div className="div-5">
                            <div className="frame-2">
                                <div className="frame-wrapper">
                                    <div className="frame-3">
                                        <div className="text-wrapper-5">Encik Tan’s Fav</div>
                                        <div className="text-wrapper-6">Keto Diet</div>
                                        <div className="text-wrapper-7">Food 1</div>
                                        <div className="text-wrapper-7">Food 2</div>
                                        <div className="text-wrapper-7">Food 3</div>
                                        <div className="text-wrapper-7">Snack</div>
                                    </div>
                                </div>
                                <button className="button">
                                    <div className="text">Order Now</div>
                                </button>
                            </div>
                        </div>
                        <div className="div-6">
                            <div className="frame-2">
                                <div className="frame-wrapper">
                                    <div className="frame-3">
                                        <div className="text-wrapper-5">Encik Tan’s Fav</div>
                                        <div className="text-wrapper-6">Keto Diet</div>
                                        <div className="text-wrapper-7">Food 1</div>
                                        <div className="text-wrapper-7">Food 2</div>
                                        <div className="text-wrapper-7">Food 3</div>
                                        <div className="text-wrapper-7">Snack</div>
                                    </div>
                                </div>
                                <button className="button">
                                    <div className="text">Order Now</div>
                                </button>
                            </div>
                        </div>
                        <div className="div-7">
                            <div className="frame-2">
                                <div className="frame-wrapper">
                                    <div className="frame-3">
                                        <div className="text-wrapper-5">Encik Tan’s Fav</div>
                                        <div className="text-wrapper-6">Keto Diet</div>
                                        <div className="text-wrapper-7">Food 1</div>
                                        <div className="text-wrapper-7">Food 2</div>
                                        <div className="text-wrapper-7">Food 3</div>
                                        <div className="text-wrapper-7">Snack</div>
                                    </div>
                                </div>
                                <button className="button">
                                    <div className="text">Order Now</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recipe-2">
                    <div className="div-2">
                        <div className="recipe-com">
                            <div className="frame-2">
                                <div className="frame-wrapper">
                                    <div className="frame-3">
                                        <div className="text-wrapper-5">Encik Tan’s Fav</div>
                                        <div className="text-wrapper-6">Keto Diet</div>
                                        <div className="text-wrapper-7">Food 1</div>
                                        <div className="text-wrapper-7">Food 2</div>
                                        <div className="text-wrapper-7">Food 3</div>
                                        <div className="text-wrapper-7">Snack</div>
                                    </div>
                                </div>
                                <button className="button">
                                    <div className="text">Order Now</div>
                                </button>
                            </div>
                        </div>
                        <div className="recipe-com">
                            <div className="frame-2">
                                <div className="frame-wrapper">
                                    <div className="frame-3">
                                        <div className="text-wrapper-5">Encik Tan’s Fav</div>
                                        <div className="text-wrapper-6">Keto Diet</div>
                                        <div className="text-wrapper-7">Food 1</div>
                                        <div className="text-wrapper-7">Food 2</div>
                                        <div className="text-wrapper-7">Food 3</div>
                                        <div className="text-wrapper-7">Snack</div>
                                    </div>
                                </div>
                                <button className="button">
                                    <div className="text">Order Now</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="div-3">
                        <div className="recipe-com">
                            <div className="frame-2">
                                <div className="frame-wrapper">
                                    <div className="frame-3">
                                        <div className="text-wrapper-5">Encik Tan’s Fav</div>
                                        <div className="text-wrapper-6">Keto Diet</div>
                                        <div className="text-wrapper-7">Food 1</div>
                                        <div className="text-wrapper-7">Food 2</div>
                                        <div className="text-wrapper-7">Food 3</div>
                                        <div className="text-wrapper-7">Snack</div>
                                    </div>
                                </div>
                                <button className="button">
                                    <div className="text">Order Now</div>
                                </button>
                            </div>
                        </div>
                        <div className="recipe-com">
                            <div className="frame-2">
                                <div className="frame-wrapper">
                                    <div className="frame-3">
                                        <div className="text-wrapper-5">Encik Tan’s Fav</div>
                                        <div className="text-wrapper-6">Keto Diet</div>
                                        <div className="text-wrapper-7">Food 1</div>
                                        <div className="text-wrapper-7">Food 2</div>
                                        <div className="text-wrapper-7">Food 3</div>
                                        <div className="text-wrapper-7">Snack</div>
                                    </div>
                                </div>
                                <button className="button">
                                    <div className="text">Order Now</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="div-4">
                        <div className="recipe-com">
                            <div className="frame-2">
                                <div className="frame-wrapper">
                                    <div className="frame-3">
                                        <div className="text-wrapper-5">Encik Tan’s Fav</div>
                                        <div className="text-wrapper-6">Keto Diet</div>
                                        <div className="text-wrapper-7">Food 1</div>
                                        <div className="text-wrapper-7">Food 2</div>
                                        <div className="text-wrapper-7">Food 3</div>
                                        <div className="text-wrapper-7">Snack</div>
                                    </div>
                                </div>
                                <button className="button">
                                    <div className="text">Order Now</div>
                                </button>
                            </div>
                        </div>
                        <div className="recipe-com">
                            <div className="frame-2">
                                <div className="frame-wrapper">
                                    <div className="frame-3">
                                        <div className="text-wrapper-5">Encik Tan’s Fav</div>
                                        <div className="text-wrapper-6">Keto Diet</div>
                                        <div className="text-wrapper-7">Food 1</div>
                                        <div className="text-wrapper-7">Food 2</div>
                                        <div className="text-wrapper-7">Food 3</div>
                                        <div className="text-wrapper-7">Snack</div>
                                    </div>
                                </div>
                                <button className="button">
                                    <div className="text">Order Now</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="div-5">
                        <div className="recipe-com">
                            <div className="frame-2">
                                <div className="frame-wrapper">
                                    <div className="frame-3">
                                        <div className="text-wrapper-5">Encik Tan’s Fav</div>
                                        <div className="text-wrapper-6">Keto Diet</div>
                                        <div className="text-wrapper-7">Food 1</div>
                                        <div className="text-wrapper-7">Food 2</div>
                                        <div className="text-wrapper-7">Food 3</div>
                                        <div className="text-wrapper-7">Snack</div>
                                    </div>
                                </div>
                                <button className="button">
                                    <div className="text">Order Now</div>
                                </button>
                            </div>
                        </div>
                        <div className="recipe-com">
                            <div className="frame-2">
                                <div className="frame-wrapper">
                                    <div className="frame-3">
                                        <div className="text-wrapper-5">Encik Tan’s Fav</div>
                                        <div className="text-wrapper-6">Keto Diet</div>
                                        <div className="text-wrapper-7">Food 1</div>
                                        <div className="text-wrapper-7">Food 2</div>
                                        <div className="text-wrapper-7">Food 3</div>
                                        <div className="text-wrapper-7">Snack</div>
                                    </div>
                                </div>
                                <button className="button">
                                    <div className="text">Order Now</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="div-6">
                        <div className="recipe-com">
                            <div className="frame-2">
                                <div className="frame-wrapper">
                                    <div className="frame-3">
                                        <div className="text-wrapper-5">Encik Tan’s Fav</div>
                                        <div className="text-wrapper-6">Keto Diet</div>
                                        <div className="text-wrapper-7">Food 1</div>
                                        <div className="text-wrapper-7">Food 2</div>
                                        <div className="text-wrapper-7">Food 3</div>
                                        <div className="text-wrapper-7">Snack</div>
                                    </div>
                                </div>
                                <button className="button">
                                    <div className="text">Order Now</div>
                                </button>
                            </div>
                        </div>
                        <div className="recipe-com">
                            <div className="frame-2">
                                <div className="frame-wrapper">
                                    <div className="frame-3">
                                        <div className="text-wrapper-5">Encik Tan’s Fav</div>
                                        <div className="text-wrapper-6">Keto Diet</div>
                                        <div className="text-wrapper-7">Food 1</div>
                                        <div className="text-wrapper-7">Food 2</div>
                                        <div className="text-wrapper-7">Food 3</div>
                                        <div className="text-wrapper-7">Snack</div>
                                    </div>
                                </div>
                                <button className="button">
                                    <div className="text">Order Now</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="div-7">
                        <div className="recipe-com">
                            <div className="frame-2">
                                <div className="frame-wrapper">
                                    <div className="frame-3">
                                        <div className="text-wrapper-5">Encik Tan’s Fav</div>
                                        <div className="text-wrapper-6">Keto Diet</div>
                                        <div className="text-wrapper-7">Food 1</div>
                                        <div className="text-wrapper-7">Food 2</div>
                                        <div className="text-wrapper-7">Food 3</div>
                                        <div className="text-wrapper-7">Snack</div>
                                    </div>
                                </div>
                                <button className="button">
                                    <div className="text">Order Now</div>
                                </button>
                            </div>
                        </div>
                        <div className="recipe-com">
                            <div className="frame-2">
                                <div className="frame-wrapper">
                                    <div className="frame-3">
                                        <div className="text-wrapper-5">Encik Tan’s Fav</div>
                                        <div className="text-wrapper-6">Keto Diet</div>
                                        <div className="text-wrapper-7">Food 1</div>
                                        <div className="text-wrapper-7">Food 2</div>
                                        <div className="text-wrapper-7">Food 3</div>
                                        <div className="text-wrapper-7">Snack</div>
                                    </div>
                                </div>
                                <button className="button">
                                    <div className="text">Order Now</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-wrapper-8">other recipes.
                <select className="label" > 
                    <option>Diabetic</option>
                    <option>Cancer</option>
                </select>
                </div>
            </div>
        </div>
    </div>
    );
};

export default RecipeList;