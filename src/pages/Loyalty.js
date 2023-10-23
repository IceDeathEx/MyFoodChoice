import React, { useState, useEffect } from 'react';
import "../css/loyalty.css";
import { useNavigate } from "react-router";
import dateFormat from 'dateformat';
import NavBarUser from './NavBarUser';
import CareCalories from "../server/config/CareCalories";

export const Loyalty = () => {
  const [loyaltyItems, setLoyaltyItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [user, setUser] = useState([]);
  const [checkoutCompleted, setCheckoutCompleted] = useState(false);
  const [isLoading, setisLoading] = useState(false)
  const navigate = useNavigate()
  const id = JSON.parse(window.localStorage.getItem("account"))
  // Function to fetch loyalty items from the server when the component mounts
  useEffect(() => {
    CareCalories.get('/api/loyaltyitem') // Replace with your API endpoint
      .then((response) => setLoyaltyItems(response.data))
      .catch((error) => console.error('Error fetching data:', error));

    CareCalories.get(`/api/getUser/${16}`)
      .then((res)=>{
        setUser(res.data)
      })
      setisLoading(true)
  }, []);

  // Function to handle item selection
  const handleItemClick = (item) => {
    setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
  };

  // Function to handle item removal
  const handleItemRemoval = (RemoveItem) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.filter((selectedItem) => selectedItem.id !== RemoveItem.id)
    );
  };

  // Function to calculate total points
  const calculateTotalPoints = () => {
    return selectedItems.reduce((total, item) => total + item.points, 0);
  };

  // Function to complete the checkout

  const handleReturn = () =>{
    setCheckoutCompleted(false)
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };
    const handleCheckout = () => {
      const pts = calculateTotalPoints()
      const date = new Date()
      const date2 = dateFormat(date, "yyyy-mm-dd HH:MM:ss")
      if(user[0].loyaltypoint > pts){
        const balance = user[0].loyaltypoint - pts
        
        CareCalories.put(`/api/updateloyaltypts/${id}`, {balance: balance})
        selectedItems.map((claimeditem) =>{
          CareCalories.post("/api/loyaltytransaction",{
            userid : id,
            itemname : claimeditem.l_name,
            point : claimeditem.points,
            qty : 1,
            date : date2
          })
        })
        navigate('/signup')
      }
      else{
        setCheckoutCompleted(true);
      }
      
    };

  return (
    <div>
      <NavBarUser/>
      {isLoading ? (
        <div className="loyalty">
        <div className="div">
          <div className="text-wrapper">Checkout</div>
          <div className="text-wrapper-2">Selected Items :</div>
          <div className="text-wrapper-3">Loyalty</div>
          <div className="text-wrapper-4">Your points : 3200</div>
          <div className="frame">
            {isLoading && loyaltyItems.map((data, index)=>{
                return <div className="loyalty-items" key={index+1}>
                <button className="button" onClick={() => handleItemClick(data)}>
                  <div className="text">{data.points} - Redeem</div>
                </button>
                <div className="text-wrapper-5">{data.l_name}</div>
                <div className="text-wrapper-6">{data.desc}</div>
                <div className="photobox"><img src={data.l_image} style={{"width": "283px", "height": "148px"}}></img></div>
                </div>
            })}
            
                <button className="div-wrapper" onClick={handleCheckout} >
                  <div className="text" >Checkout</div>
                </button>
  
                {isDialogOpen && (
                <dialog>
                  <div>Redeem successful!</div>
                  <button onClick={closeDialog}>Close</button>
                </dialog>
                )}
  
                
                <p className="text-wrapper-7">Click the button below to finalize your redemption.</p>
                {/* {user && (<p className="text-wrapper-8">Total Points left after checkout : {user[0].loyaltypoint - calculateTotalPoints()}</p>)} */}
                <div className="frame-2">
                {selectedItems.map((item, index) => {
                  return <div className="frame-3" key={index+1}>
                    <div className="text-wrapper-9" key={item.id}>{item.l_name}{' '}</div>
                    <button className="text-wrapper-10 btn" onClick={()=>handleItemRemoval(item)}>remove</button>
                  </div>
                })}
                </div>
              </div>
            </div>
          </div>
      ) : (
        <p>Still Loading...</p>
      )}

    
      </div>
          );
};

          export default Loyalty;
