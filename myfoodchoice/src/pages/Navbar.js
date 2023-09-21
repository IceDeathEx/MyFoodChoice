import React from 'react';
import { Link, Routes} from 'react-router-dom'
import '../css/styleHomePageNavbar.css'
import { useAuth } from '../Utility/Auth';
function Navbar() {
    const Auth = useAuth()
    function handleLogout(){
        Auth.logout()
    }
    //For karen to visualize
    console.log(Auth.user)
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
                    <Link to="/" onClick={handleLogout}>Logout</Link>
                </div>
            </div>
        );
    
}

export default Navbar;