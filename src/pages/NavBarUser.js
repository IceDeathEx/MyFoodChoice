import React from "react";
import "../css/NavBarUser.css";
import image from '../pics/Ellipse_1.png'
import image2 from '../pics/icon-cart.svg'
import { Link } from "react-router-dom";
//import { useAuth } from '../Utility/Auth';
import { useSignOut } from 'react-auth-kit'

const NavBarUser = () => {
    const signOut = useSignOut()
    // const Auth = useAuth()
    function handleLogout(){
      //Auth.logout()
      window.localStorage.removeItem('path')
      window.localStorage.removeItem('account')
      signOut()
    }
  return (
    <div className="allnavbar">
    <div className="element">
      <div className="care-calories">CARECALORIES.</div>
      <div className="navigation">
        <Link to="/homepage"><div className="home"><div className="text-wrapper">&nbsp;&nbsp;&nbsp;&nbsp;Home</div></div></Link>
        <Link to='/mealrecord'><div className="meal-record"><div className="text-wrapper">Add a Meal</div></div></Link>
        <Link to="/healthtips"><div className="health-tips"><div className="div">Health Tips</div></div></Link>
        <Link to="/recipe"><div className="recipe"><div className="text-wrapper-2">Recipe</div></div></Link>
        <Link to='/feedback'><div className="company"><div className="text-wrapper-3">Review</div></div></Link>
        <Link to='/orderfood/All/page/1'><div className="order-food"><div className="text-wrapper-4">Order Food</div></div></Link>
      </div>
      <Link to="/shoppingcart" ><img className="cart" alt="Cart" src={image2} /></Link>
      <div className="dropdown">
        <img className="ellipse dropbtn" alt="Ellipse" src={image} />
        <div className="dropdown-content">
          <Link to="/loyalty">Loyalty</Link>
          <Link to="/transaction">Transaction</Link>
          <Link to="/account">Account</Link>
          <Link to="/mealhistory">Meal Records</Link>
          <Link to="/" onClick={handleLogout}>Logout</Link>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default NavBarUser;
