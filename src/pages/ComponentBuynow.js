import React, { useState, useEffect } from 'react';
import '../css/StyleBuyNow.css';
import icon from '../pics/Icon.png';
import { useNavigate } from "react-router";
import dateFormat from 'dateformat';
import CareCalories from "../server/config/CareCalories";

const ComponentBuynow = () => {
  const [foodItems, setFoodItems] = useState([]);
  const id = JSON.parse(window.localStorage.getItem("account"))
  const navigate = useNavigate()
  const [transaction, settransaction] = useState([])

  useEffect(() => {
    CareCalories.get('/api/orderfood')
      .then((response) => setFoodItems(response.data))
      .catch((error) => console.error('Error fetching data:', error));
      CareCalories.get(`/api/getshoppingcart/${id}`)
      .then((data)=>{
          settransaction(data.data)
      })
  }, []);

  const handleOrder = (item) => {
    if(transaction.filter((res)=> res.transitemid === item.ofid && res.transcategory === 'Food' ).length === 0){
        var today = new Date()
        CareCalories.post(`/api/createtransaction/${id}`, { 
            uid: id, 
            transitemid: item.ofid,
            transitemname: item.ofname,
            transitemprice: item.ofprice,
            transqty: 1, 
            transdate: dateFormat(today, "yyyy-mm-dd HH:MM:ss"), 
            transitemvendor: item.ofvendor,
            transstatus: 'Ongoing', 
            payment: 'Counter',
            transcategory: 'Food'
            })

        navigate('/shoppingcart')
        //window.location.reload()
    }
    else{
        console.log('Already added')
    }
    
}
  return (
    <div className="all">
    <div className="frame">
      {foodItems.slice(0,4).map((item, index) => {
          return <div key={index} className={`element-${index + 1}`}>
          <div className="image-title">
            <div className="rectangle-wrapper">
              <img className="rectangle" alt="Rectangle" src={item.ofimg} />
            </div>
            <div className="name-location-price">
              <div className="name-location">
                <div className="name">{item.ofname}</div>
                <div className="location">
                  <img className="icon" src={icon} alt="Icon" />
                  <div className="text">{item.ofvendor}</div>
                </div>
              </div>
              <div className="price">
                <div className="div">${(Math.round(item.ofprice * 100) / 100).toFixed(2)}</div>
              </div>
            </div>
          </div>
          <button className="button" onClick={() => handleOrder(item)}>
            <div className="text-2">Order Now</div>
          </button>
        </div>
        
      })}
    </div>
    </div>
  );
};

export default ComponentBuynow;