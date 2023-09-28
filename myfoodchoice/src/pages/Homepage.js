import React, {useState, useEffect } from 'react';
import { PopUpModalLogin1 } from './PopUpModalLogin1';
import { NavBarUser } from './NavBarUser';

import ComponentBuynow from './ComponentBuynow';

function Homepage() {
    const [once, setOnce] = useState(false)
    const path = JSON.parse(window.localStorage.getItem('path'));
    useEffect(()=>{
        if(path){
            setOnce(true)
            window.localStorage.setItem('path', JSON.stringify(null))
        }
        else{
            setOnce(false)
        }
    },[])
        return (
            <div>
                
                <NavBarUser />
                
                <div className="divcss">
                    {once && <PopUpModalLogin1/>}
                    <ComponentBuynow/>
                </div>
                
            </div>
        );
    
}

export default Homepage;