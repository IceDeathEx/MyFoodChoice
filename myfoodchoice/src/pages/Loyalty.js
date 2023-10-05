import React, { useState, useEffect} from 'react';
import Axios from 'axios'; // Make sure Axios is installed in your project
import '../css/loyalty.css'; // Import your CSS stylesheet
import { NavBarUser } from './NavBarUser';
import { useNavigate } from "react-router";
import dateFormat from 'dateformat';

const Loyalty = () => {
  // State to store loyalty items from the database
  const [loyaltyItems, setLoyaltyItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [checkoutCompleted, setCheckoutCompleted] = useState(false);
  const id = JSON.parse(window.localStorage.getItem('account'))
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  

  // Function to fetch loyalty items from the server when the component mounts
  useEffect(() => {
    Axios.get('http://localhost:3002/api/loyaltyitem') // Replace with your API endpoint
      .then((response) => setLoyaltyItems(response.data))
      .catch((error) => console.error('Error fetching data:', error));
      //Getting the user data
    Axios.get(`http://localhost:3002/api/getUser/${id}`)
    .then((res) =>{ setUser(res.data)
      setLoading(true)
    })
    
  }, []);

  // Function to handle item selection
  const handleItemClick = (item) => {
    setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
  };

  // Function to handle item removal
  const handleItemRemoval = (itemToRemove) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.filter((selectedItem) => selectedItem.id !== itemToRemove.id)
    );
  };

  // Function to calculate total points
  const calculateTotalPoints = () => {
    return selectedItems.reduce((total, item) => total + item.points, 0);
  };

  // Function to complete the checkout
  const handleCheckout = () => {
    const pts = calculateTotalPoints()
    const date = new Date()
    const date2 = dateFormat(date, "yyyy-mm-dd HH:MM:ss")
    if(user[0].loyaltypoint > pts){
      const balance = user[0].loyaltypoint - pts
      
      Axios.put(`http://localhost:3002/api/updateloyaltypts/${id}`, {balance: balance})
      selectedItems.map((claimeditem) =>{
        Axios.post("http://localhost:3002/api/loyaltytransaction",{
          userid : id,
          itemname : claimeditem.l_name,
          point : claimeditem.points,
          qty : 1,
          date : date2
        })
      })
      navigate('/homepage')
    }
    else{
      setCheckoutCompleted(true);
    }
    
  };

  const handleReturn = () =>{
    setCheckoutCompleted(false)
  }

  return (
    <div>
      <NavBarUser /> {/* Assuming you have a Navbar component */}
      <div className="divcss">
        {loading && <h1>Hi, {user[0].name}, you have {user[0].loyaltypoint} loyalty points</h1>}
        <h2>Loyalty Reward Page</h2>
        <p>Select items to redeem using your loyalty points.</p>

        <div className="loyalty-items-wrapper">
          {loyaltyItems.map((item) => (
            <div key={item.id} className="loyalty-item">
              <h3>{item.l_name}</h3>
              {item.l_image && <img src={item.l_image} alt={item.l_image} />}
              <p>Description: {item.desc}</p>
              <p>Points required: {item.points}</p>
              <button onClick={() => handleItemClick(item)}>Redeem</button>
            </div>
          ))}
        </div>

        <div className="loyalty-summary">
          <h3>Selected Items:</h3>
          <ul>
            {selectedItems.map((item) => (
              <li key={item.id}>
                {item.l_name}{' '}
                <button onClick={() => handleItemRemoval(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total Points: {calculateTotalPoints()}</p>
        </div>

        {!checkoutCompleted && (
          <div className="checkout-section">
            <h3>Checkout</h3>
            <p>Click the button below to finalize your redemption:</p>
            <button onClick={handleCheckout}>Redeem</button>
          </div>
        )}

        {checkoutCompleted && (
          <div className="checkout-completed">
            <p>You do not have sufficient loyalty points.</p>
            <button onClick={handleReturn}>Click here to continue to redeem</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Loyalty;
