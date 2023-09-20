import React from 'react';
import { Link, Routes} from 'react-router-dom'
import '../css/styleHomePageNavbar.css'
function Navbar() {
        return (
            <div>
                <div className='navbar2'>
                    <Link to="/homepage">Home</Link>
                    <Link to="/mealrecord">Meal Record</Link>
                    <Link to="/healthtips">Health Tips</Link>
                    <Link to="/recipe">Recipe</Link>
                    <Link to="/account">Account</Link>
                    <Link to="/transaction">Transaction</Link>
                    <Link to="/feedback">Feedback</Link>
                    <Link to="/loyalty">Loyalty</Link>
                    <Link to="/partnership">Partnership</Link>                  
                    <Link to="/">Logout</Link>
                </div>
            </div>
        );
    
}

export default Navbar;