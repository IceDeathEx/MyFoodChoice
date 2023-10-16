import "../css/styleModalLogin1.css";
import React, { useState, useEffect } from 'react';
import image from '../pics/Frame_33.svg';

export const PopUpModalLogin1 = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (isVisible) {
          const timer = setTimeout(() => {
            setIsVisible(false);
          }, 3000);

          return () => clearTimeout(timer);
    }
  }, []);


  return (
    <>
    {isVisible && (
    <div className="popup-modal">
        
      <img className="frame" alt="Frame" src={image} />
      <div className="div-wrapper">
        <div className="text-wrapper">Account login successful</div>
      </div>
    </div>
    )}
    </>
  );
};