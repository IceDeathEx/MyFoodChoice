import React from "react";
import "../css/NavBarSAstyle.css";
import button from "../pics/Rectangle-25.svg";
import { Link } from "react-router-dom";
import { useSignOut } from 'react-auth-kit'
import { useNavigate } from 'react-router';

const NavbarSa = () => {
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
        <div className="all">
        <div className="NSnavbar-SA">
            <div className="NScarecalories">CARECALORIES.</div>
            <div className="NSframe">
                <Link to="/sysadm" className="NStext-wrapper">Manage</Link>
                <Link to="/sysadmtransaction" className="NSdiv">Transaction</Link>
            </div>
            <div className="NSframe-2">
                <button className="NSrectangle" alt="Rectangle" src={button} onClick={handleLogout}>
                <div className="NStext-wrapper-2">Logout</div>
                </button>
            </div>
        </div>
        </div>
    );
};
export default NavbarSa;
