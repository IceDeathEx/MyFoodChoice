import React, {useState} from "react";
import "../css/UCstyle.css";
import ellipse from '../pics/ellipse-2.png';

const UserChoice = () => {
    const [nameStyle, setNameStyle] = useState({color: '#567710', fontWeight: '400',});
    const toggleNameStyle = () => {
      setNameStyle((prevStyle) => {
  if (prevStyle.color === '#567710') {
    return{
      color: '#567710',
      fontWeight: 'bold',
    };
  } else {
    return{
      color: '#567710', fontWeight: '400',
    };
  }
  });
    };
    return (
        <div className="user-choiceMR">
            <div className="group">
                <img className="ellipse" alt="Ellipse" src={ellipse} onClick={toggleNameStyle
                    } />
                <div className="text-wrapper" style={nameStyle}>John</div>
            </div>
            <div className="group">
                <img className="ellipse" alt="Ellipse" src={ellipse} />
                <div className="div">John</div>
            </div>
            <div className="group">
                <img className="ellipse" alt="Ellipse" src={ellipse} />
                <div className="div">John</div>
            </div>
            <div className="group">
                <img className="ellipse" alt="Ellipse" src={ellipse} />
                <div className="div">John</div>
            </div>
            <div className="group-2">
                <img className="ellipse" alt="Ellipse" src={ellipse} />
                <div className="div">John</div>
            </div>
        </div>
    );
};

export default UserChoice;
