import React from "react";
import "../css/FoodOrderstyle.css";
import image from '../pics/rectangle-336.png'
import icon from '../pics/Icon.png';
import NavBarUser from "./NavBarUser";

const FoodOrder = () => {
    // Create Food table
    // Discuss with Jed on Price for Recipe
    // Create dynamic search bar
    // Create Dynamic List
    // Create pagination 
    return (
        <div>
            <NavBarUser/>
        <div className="food-order">
            <div className="div">
                <input className="overlap-group" placeholder="what you looking for?" type="text">
                    
                </input>
                <div className="frame">
                    <div className="frame-2">
                        <div className="text-wrapper-2">List</div>
                        <a href="" className="text-wrapper-3">Encik Tan’s</a>
                        <img className="line" alt="Line" src="line-4.svg" />
                        <a href="" className="text-wrapper-4">KFC</a>
                        <img className="line" alt="Line" src="line-4.svg" />
                        <a href="" className="text-wrapper-3">Wendy’s</a>
                        <img className="line" alt="Line" src="line-4.svg" />
                        <a href="" className="text-wrapper-5">Subway</a>
                        <img className="img" alt="Line" src="line-4.svg" />
                    </div>
                    <div className="frame-3">
                        <div className="elements">
                            <div className="image-title">
                                <div className="rectangle-wrapper">
                                    <img className="rectangle" alt="Rectangle" src={image} />
                                </div>
                                <div className="name-location-price">
                                    <div className="name-location">
                                        <div className="name">Cheese Burger</div>
                                        <div className="location">
                                        <img className="icon" src={icon} alt={icon}/>
                                            <div className="text">Subway</div>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <div className="text-wrapper-6">$3.88</div>
                                    </div>
                                </div>
                            </div>
                            <button className="button">
                                <div className="text-2">Order Now</div>
                            </button>
                        </div>
                        <div className="element-2">
                            <div className="image-title">
                                <div className="rectangle-wrapper">
                                    <img className="rectangle" alt="Rectangle" src={image} />
                                </div>
                                <div className="name-location-price">
                                    <div className="name-location">
                                        <div className="name">Cheese Burger</div>
                                        <div className="location">
                                        <img className="icon" src={icon} alt={icon}/>
                                            <div className="text">Subway</div>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <div className="text-wrapper-6">$3.88</div>
                                    </div>
                                </div>
                            </div>
                            <button className="button">
                                <div className="text-2">Order Now</div>
                            </button>
                        </div>
                        <div className="element-3">
                            <div className="image-title">
                                <div className="rectangle-wrapper">
                                    <img className="rectangle" alt="Rectangle" src={image} />
                                </div>
                                <div className="name-location-price">
                                    <div className="name-location">
                                        <div className="name">Cheese Burger</div>
                                        <div className="location">
                                        <img className="icon" src={icon} alt={icon}/>
                                            <div className="text">Subway</div>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <div className="text-wrapper-6">$3.88</div>
                                    </div>
                                </div>
                            </div>
                            <button className="button">
                                <div className="text-2">Order Now</div>
                            </button>
                        </div>
                        <div className="element-4">
                            <div className="image-title">
                                <div className="rectangle-wrapper">
                                    <img className="rectangle" alt="Rectangle" src={image} />
                                </div>
                                <div className="name-location-price">
                                    <div className="name-location">
                                        <div className="name">Cheese Burger</div>
                                        <div className="location">
                                        <img className="icon" src={icon} alt={icon}/>
                                            <div className="text">Subway</div>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <div className="text-wrapper-6">$3.88</div>
                                    </div>
                                </div>
                            </div>
                            <button className="button">
                                <div className="text-2">Order Now</div>
                            </button>
                        </div>
                        <div className="element-5">
                            <div className="image-title">
                                <div className="rectangle-wrapper">
                                    <img className="rectangle" alt="Rectangle" src={image} />
                                </div>
                                <div className="name-location-price">
                                    <div className="name-location">
                                        <div className="name">Cheese Burger</div>
                                        <div className="location">
                                        <img className="icon" src={icon} alt={icon}/>
                                            <div className="text">Subway</div>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <div className="text-wrapper-6">$3.88</div>
                                    </div>
                                </div>
                            </div>
                            <button className="button">
                                <div className="text-2">Order Now</div>
                            </button>
                        </div>
                        <div className="element-6">
                            <div className="image-title">
                                <div className="rectangle-wrapper">
                                    <img className="rectangle" alt="Rectangle" src={image} />
                                </div>
                                <div className="name-location-price">
                                    <div className="name-location">
                                        <div className="name">Cheese Burger</div>
                                        <div className="location">
                                        <img className="icon" src={icon} alt={icon}/>
                                            <div className="text">Subway</div>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <div className="text-wrapper-6">$3.88</div>
                                    </div>
                                </div>
                            </div>
                            <button className="button">
                                <div className="text-2">Order Now</div>
                            </button>
                        </div>
                        <div className="element-7">
                            <div className="image-title">
                                <div className="rectangle-wrapper">
                                    <img className="rectangle" alt="Rectangle" src={image} />
                                </div>
                                <div className="name-location-price">
                                    <div className="name-location">
                                        <div className="name">Cheese Burger</div>
                                        <div className="location">
                                        <img className="icon" src={icon} alt={icon}/>
                                            <div className="text">Subway</div>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <div className="text-wrapper-6">$3.88</div>
                                    </div>
                                </div>
                            </div>
                            <button className="button">
                                <div className="text-2">Order Now</div>
                            </button>
                        </div>
                        <div className="element-8">
                            <div className="image-title">
                                <div className="rectangle-wrapper">
                                    <img className="rectangle" alt="Rectangle" src={image} />
                                </div>
                                <div className="name-location-price">
                                    <div className="name-location">
                                        <div className="name">Cheese Burger</div>
                                        <div className="location">
                                        <img className="icon" src={icon} alt={icon}/>
                                            <div className="text">Subway</div>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <div className="text-wrapper-6">$3.88</div>
                                    </div>
                                </div>
                            </div>
                            <button className="button">
                                <div className="text-2">Order Now</div>
                            </button>
                        </div>
                        <div className="element-9">
                            <div className="image-title">
                                <div className="rectangle-wrapper">
                                    <img className="rectangle" alt="Rectangle" src={image} />
                                </div>
                                <div className="name-location-price">
                                    <div className="name-location">
                                        <div className="name">Cheese Burger</div>
                                        <div className="location">
                                        <img className="icon" src={icon} alt={icon}/>
                                            <div className="text">Subway</div>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <div className="text-wrapper-6">$3.88</div>
                                    </div>
                                </div>
                            </div>
                            <button className="button">
                                <div className="text-2">Order Now</div>
                            </button>
                        </div>
                        <div className="element-10">
                            <div className="image-title">
                                <div className="rectangle-wrapper">
                                    <img className="rectangle" alt="Rectangle" src={image} />
                                </div>
                                <div className="name-location-price">
                                    <div className="name-location">
                                        <div className="name">Cheese Burger</div>
                                        <div className="location">
                                        <img className="icon" src={icon} alt={icon}/>
                                            <div className="text">Subway</div>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <div className="text-wrapper-6">$3.88</div>
                                    </div>
                                </div>
                            </div>
                            <button className="button">
                                <div className="text-2">Order Now</div>
                            </button>
                        </div>
                        <div className="element-11">
                            <div className="image-title">
                                <div className="rectangle-wrapper">
                                    <img className="rectangle" alt="Rectangle" src={image} />
                                </div>
                                <div className="name-location-price">
                                    <div className="name-location">
                                        <div className="name">Cheese Burger</div>
                                        <div className="location">
                                        <img className="icon" src={icon} alt={icon}/>
                                            <div className="text">Subway</div>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <div className="text-wrapper-6">$3.88</div>
                                    </div>
                                </div>
                            </div>
                            <button className="button">
                                <div className="text-2">Order Now</div>
                            </button>
                        </div>
                        <div className="element-12">
                            <div className="image-title">
                                <div className="rectangle-wrapper">
                                    <img className="rectangle" alt="Rectangle" src={image} />
                                </div>
                                <div className="name-location-price">
                                    <div className="name-location">
                                        <div className="name">Cheese Burger</div>
                                        <div className="location">
                                        <img className="icon" src={icon} alt={icon}/>
                                            <div className="text">Subway</div>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <div className="text-wrapper-6">$3.88</div>
                                    </div>
                                </div>
                            </div>
                            <button className="button">
                                <div className="text-2">Order Now</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default FoodOrder;