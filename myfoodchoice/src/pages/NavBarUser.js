import React from "react";
import "../css/NavBarUser.css";
import image from '../pics/Ellipse_1.png'
import image2 from '../pics/icon-cart.svg'
import { Link } from "react-router-dom";
//import { useAuth } from '../Utility/Auth';
import { useSignOut } from 'react-auth-kit'

export const NavBarUser = () => {
    const signOut = useSignOut()
    // const Auth = useAuth()
    function handleLogout(){
      //Auth.logout()
      window.localStorage.removeItem('path')
      signOut()
    }
  return (
    <div className="element">
      <div className="care-calories">CARECALORIES.</div>
      <div className="navigation">
        <Link to="/homepage"><div className="home"><div className="text-wrapper">&nbsp;&nbsp;&nbsp;&nbsp;Home</div></div></Link>
        <Link to='/mealrecord'><div className="meal-record"><div className="text-wrapper">Meal Record</div></div></Link>
        <Link to="/healthtips"><div className="health-tips"><div className="div">Health Tips</div></div></Link>
        <Link to="/recipe"><div className="recipe"><div className="text-wrapper-2">Recipe</div></div></Link>
        <Link to='/feedback'><div className="company"><div className="text-wrapper-3">Feedback</div></div></Link>
        <Link to='/orderfood'><div className="order-food"><div className="text-wrapper-4">Order Food</div></div></Link>
      </div>
      <Link to="/" onClick={handleLogout}><img className="cart" alt="Cart" src={image2} /></Link>
      <Link to="/" onClick={handleLogout}><img className="ellipse" alt="Ellipse" src={image} /></Link>
    </div>
  );
};

