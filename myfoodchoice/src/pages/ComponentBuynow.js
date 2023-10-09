import React, { useState, useEffect } from 'react';
import '../css/StyleBuyNow.css';
import Axios from 'axios';
import icon from '../pics/Icon.png';
import OrderNow from './OrderNow';
import {Link} from "react-router-dom";

const ComponentBuynow = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3002/api/orderfood')
      .then((response) => setFoodItems(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="frame">
      {foodItems.map((item, index) => (
        <div key={index} className={`element-${index + 1}`}>
          <div className="image-title">
            <div className="rectangle-wrapper">
              <img className="rectangle" alt="Rectangle" src={item.foodimg} />
            </div>
            <div className="name-location-price">
              <div className="name-location">
                <div className="name">{item.desc}</div>
                <div className="location">
                  <img className="icon" src={icon} alt="Icon" />
                  <div className="text">{item.location}</div>
                </div>
              </div>
              <div className="price">
                <div className="div">${item.price}</div>
              </div>
            </div>
          </div>
          <Link to="/ordernow">
          <button className="button">
            <div className="text-2">Order Now</div>
          </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ComponentBuynow;
