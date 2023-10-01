import '../css/userHP.css';
import a from '../pics/ellipse-2.png';
import b from '../pics/Vector2.png';
import { useState } from 'react';

const UserHP = () => {

  const [nameStyle, setNameStyle] = useState({color: 'black', fontWeight: '400',});
  const toggleNameStyle = () => {
    setNameStyle((prevStyle) => {
if (prevStyle.color === 'black') {
  return{
    color: 'green',
    fontWeight: 'bold',
  };
} else {
  return{
    color: 'black', fontWeight: '400',
  };
}
});
  };
  return (

            <div className="users-HP">
                <div className="text-wrapper">users.</div>
                <div className="frameUser">
                    <div className="group">
                        <img id="profile" className="ellipse" alt="Ellipse" src={a} onClick={toggleNameStyle
                    } />
                        <div id="name" className="div" style={nameStyle}>John</div>
                    </div>
                    <div className="group">
                        <img id="profile" className="ellipse" alt="Ellipse" src={a} />
                        <div id="name1" className="text-wrapper-2">John</div>
                    </div>
                    <div className="group">
                        <img id="profile" className="ellipse" alt="Ellipse" src={a} />
                        <div id="name2" className="text-wrapper-2">John</div>
                    </div>
                    <div className="group">
                        <img id="profile" className="ellipse" alt="Ellipse" src={a} />
                        <div id="name" className="text-wrapper-2">John</div>
                    </div>
                    <div className="group">
                        <img id="profile" className="ellipse" alt="Ellipse" src={a} />
                        <div id="name" className="text-wrapper-2">John</div>
                    </div>
                    <div className="frame-wrapper">
                        <div id="add" className="div-wrapper">
                            <div className="vector-wrapper">
                                <img className="vector" alt="Vector" src={b} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                        <div className="text-wrapper-3">Your Weight Progress</div>
                    </div>
                </div>
                <div className="data-vi" />
                
            </div>
            
        );
    };
    
export default UserHP;