import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../css/loyalty.css';
import FP10 from "../pics/FP10.jpg";
import FP20 from "../pics/Fairprice20.jpg";
import Fitbit from "../pics/Fitbit.jpg";

const Loyalty = () => {
  // Static array of loyalty items (IMG not working)
  const loyaltyItems = [
    {
      id: 1,
      name: 'FP 10',
      description: 'This is a $10 FP voucher',
      points: 500,
      image: FP10,
    },
    {
      id: 2,
      name: 'FP 20',
      description: 'This is a $20 FP Voucher',
      points: 1000,
      image: FP20,
    },
    {
      id: 3,
      name: 'FitBit Watch',
      description: 'This is a fitness tracking watch made by qwer company',
      points: 10000,
      image: Fitbit,
    },
  ];

  // State to track selected items
  const [selectedItems, setSelectedItems] = useState([]);
  // State to track if the checkout is completed
  const [checkoutCompleted, setCheckoutCompleted] = useState(false);

  // Function to handle item selection
  const handleItemClick = (item) => {
    setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
  };

  // Function to handle item removal
  const handleItemRemoval = (item) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.filter((selectedItem) => selectedItem.id !== item.id)
    );
  };

  // Function to calculate total points
  const calculateTotalPoints = () => {
    return selectedItems.reduce((total, item) => total + item.points, 0);
  };

  // Function to complete the checkout
  const handleCheckout = () => {
    // Perform checkout logic here, such as updating user's points, etc.
    // After successful checkout, set checkoutCompleted to true.
    setCheckoutCompleted(true);
  };

  return (
    <div>
      <Navbar />
      <div className="divcss">
        <h2>Loyalty Reward Page</h2>
        <p>Select items to redeem using your loyalty points.</p>

        <ul className="loyalty-items-list">
          {loyaltyItems.map((item) => (
        <li key={item.id} className="loyalty-item">
          <h3>{item.name}</h3>
          {item.image && <img src={item.image} alt={item.name} />}
          <p>Description: {item.description}</p>
          <p>Points required: {item.points}</p>
          <button onClick={() => handleItemClick(item)}>Redeem</button>
        </li>
))}

        </ul>

        <div className="loyalty-summary">
          <h3>Selected Items:</h3>
          <ul>
            {selectedItems.map((item) => (
              <li key={item.id}>
                {item.name}{' '}
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
