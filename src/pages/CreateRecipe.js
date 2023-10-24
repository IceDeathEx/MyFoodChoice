import React from "react";
import "../css/CRstyle.css";
import a from "../pics/image-1.png";
import b from '../pics/image-2.png';
import c from "../pics/rectanglepict.png";
import d from "../pics/plus_1.png";
import { NavbarVendor } from "./NavbarVendor";

const CreaterecipeVendor = () => {
    return (
        <div>
        <NavbarVendor/>
        <div className="createrecipe-vendor">
            <div className="div">
                <div className="overlap">
                    <div className="text-wrapper">create recipe</div>
                    <img className="rectangle" alt="Rectangle" src={c} />
                    <button className="button">
                        <div className="text">import image</div>
                    </button>
                    <div className="text-wrapper-2">800px x 300px</div>
                    <div className="overlap-group">
                        <div className="details-box">
                            <div className="box">
                                <div className="overlap-group-2">
                                    <div className="text-wrapper-3">protein</div>
                                    <div className="text-wrapper-4">carbs</div>
                                    <div className="text-wrapper-5">sugar</div>
                                </div>
                            </div>
                            <div className="overlap-wrapper">
                                <div className="overlap-2">
                                    <div className="text-wrapper-6">saturated fat</div>
                                    <div className="text-wrapper-7">sodium</div>
                                    <div className="text-wrapper-8">cholesterol</div>
                                </div>
                            </div>
                            <div className="overlap-wrapper">
                                <div className="overlap-3">
                                    <div className="text-wrapper-6">Fibre</div>
                                    <div className="text-wrapper-9">total fat</div>
                                    <div className="text-wrapper-10">natrium</div>
                                </div>
                            </div>
                            <input className="rectangle-2" />
                            <div className="text-wrapper-11">g</div>
                            <input  className="rectangle-3" />
                            <div className="text-wrapper-12">g</div>
                            <input  className="rectangle-4" />
                            <div className="text-wrapper-13">g</div>
                            <input  className="rectangle-5" />
                            <div className="text-wrapper-14">g</div>
                            <input className="rectangle-6" />
                            <div className="text-wrapper-15">g</div>
                            <input  className="rectangle-7" />
                            <div className="text-wrapper-16">g</div>
                            <input  className="rectangle-8" />
                            <div className="text-wrapper-17">g</div>
                            <input  className="rectangle-9" />
                            <div className="text-wrapper-18">g</div>
                            <input  className="rectangle-10" />
                            <div className="text-wrapper-19">g</div>
                        </div>
                        <div className="overlap-4">
                            <img className="image" alt="Image" src={b} />
                            <img className="img" alt="Image" src={a} />
                        </div>
                    </div>
                </div>
                <div className="text-wrapper-20">food list</div>
                <div className="text-wrapper-21">Step</div>
                <div className="text-wrapper-22">Ingredients</div>
                <div className="frame">
                    <div className="name-input">
                        <div className="text-wrapper-23">Recipe Title</div>
                        <input type="text" className="enter-username">
                        
                        </input>
                    </div>
                    <div className="name-input">
                        <div className="text-wrapper-23">Diet Type</div>
                        <input type="text" className="enter-username">
                        
                        </input>
                    </div>
                </div>
                <div className="name-input-2">
                    <div className="text-wrapper-23">Choose your food type</div>
                    <select className="enter-username">
                    <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="overlap-5">
                    <div className="name-input-3">
                        <div className="text-wrapper-23">Food Name</div>
                        <input type="text" className="enter-username-2" />
                    </div>
                </div>
                <div className="frame-2">
                    <div className="comments">
                    <input type="text" className="add-your-comments-wrapper" placeholder="Steps">
                        </input>
                        <img className="plus" alt="Plus" src={d} />
                    </div>
                    <div className="comments">
                        <input type="text" className="add-your-comments-wrapper" placeholder="Steps">
                        </input>
                        <img className="plus" alt="Plus" src={d} />
                    </div>
                </div>
                <button className="div-wrapper">
                    <div className="text-2">Post This Recipe</div>
                </button>
                <div className="frame-3">
                    <div className="comments-2">
                        <textarea className="overlap-6" placeholder="Ingredients Title">
                            
                        </textarea>
                        <img className="plus-2" alt="Plus" src={d} />
                        <textarea className="overlap-group-3" placeholder="Ingredients Details">
                            
                        </textarea>
                    </div>
                    <div className="comments-2">
                    <textarea className="overlap-6" placeholder="Ingredients Title">
                            
                            </textarea>
                        <img className="plus-2" alt="Plus" src={d} />
                        <textarea className="overlap-group-3" placeholder="Ingredients Details">
                            
                        </textarea>
                    </div>
                </div>
                <div className="text-wrapper-24">30 Steps Max.</div>
            </div>
        </div>
    </div>
    );
};
export default CreaterecipeVendor;
