import React from "react";
import "../css/NavbarVstyle.css";
import { Link } from "react-router-dom";
import { useSignOut } from 'react-auth-kit'
import { useNavigate } from 'react-router';

export const NavbarVendor = () => {
    const signOut = useSignOut()
    const navigate = useNavigate()
    // const Auth = useAuth()
    function handleLogout(){
      //Auth.logout()
      window.localStorage.removeItem('path')
      window.localStorage.removeItem('account')
      signOut()
      navigate('/')
    }
    return (
      <div className="allnavbar">
        <nav className="navbar-vendor">
<div className="div">
<div className="carecalories">CARECALORIES.</div>
<div className="navigation">
<Link to="/vendor" className="product">
<div className="text-wrapper"> Home</div>
</Link>
<Link to="/createfoodmenu" className="div-wrapper">
<div className="text-wrapper">Food Menu</div>
</Link>
</div>
<div className="group">
<div className="overlap-group-wrapper">
<button className="overlap-group" onClick={handleLogout}>
<div className="text-wrapper-4">Logout</div>
</button>
</div>
</div>
</div>
</nav>
</div>
    );
};
