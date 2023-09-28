import React, { useState, useEffect } from 'react';
import Axios from 'axios'; // Make sure Axios is installed in your project
import '../css/loyalty.css'; // Import your CSS stylesheet
import { NavBarUser } from './NavBarUser';

const Loyalty = () => {
  // State to store loyalty items from the database
  const [loyaltyItems, setLoyaltyItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [checkoutCompleted, setCheckoutCompleted] = useState(false);

  // Function to fetch loyalty items from the server when the component mounts
  useEffect(() => {
    Axios.get('http://localhost:3002/api/loyaltyitem') // Replace with your API endpoint
      .then((response) => setLoyaltyItems(response.data))
      .catch((error) => console.error('Error fetching data:', error));
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
    // Implement your checkout logic here
    // Send selected items to the server for processing, update user's points, etc.
    // After successful checkout, set checkoutCompleted to true.
    setCheckoutCompleted(true);
  };

  return (
    <div>
      <NavBarUser /> {/* Assuming you have a Navbar component */}
      <div className="divcss">
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
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        )}

        {checkoutCompleted && (
          <div className="checkout-completed">
            <p>Your redemption has been completed. Thank you!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Loyalty;
