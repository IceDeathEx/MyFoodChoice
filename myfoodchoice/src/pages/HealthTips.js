import React, { useState, useEffect } from "react";
import "../css/styleHT.css";
import { NavBarUser } from "./NavBarUser";
import Axios from "axios";
import dateFormat from 'dateformat';
import Modal from 'react-modal';

// Styling of the Modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

//Actual Component
const HealthTips = () => {
  //Declaration of variables 
  const [htData, sethtdata] = useState([]);
  const [filtered, setFiltered] = useState('');
  const [htData2, sethtdata2] = useState([]);

  //Usage of useEffect
  useEffect(() => {
    Axios.get('http://localhost:3002/api/getHealthTips')
      .then((data) => {
        sethtdata(data.data)
        sethtdata2(data.data)
      })
  }, [])

  //Modal when page loads, is set to false
  const [modalIsOpen, setIsOpen] = React.useState(false);

  //What to do when i onClick openModal function
  function openModal(e) {
    e.preventDefault()
    setFiltered(e.target.value)
    setIsOpen(true);
  }

  //Inside the modal, there is a button to close the modal 
  function closeModal() {
    setIsOpen(false);
  }

  //This is to handle the dropdown menu
function handleChange(e){
  e.preventDefault()
  if(e.target.value === 'Show All'){
    sethtdata2(htData)
  }
  else{
    sethtdata2(htData.filter((data) => data.category === e.target.value))
  }
  
}

  return (
    <div>
      <NavBarUser />
      <div className="healthtips-on-login">
        <div className="div">
          {htData2.map((res, i) => {
            return <div className={"frame-" + i++} key={res.id}>
              <div className="text-wrapper">{dateFormat(res.date, "dddd, mmmm dS, yyyy")}</div>
              <div className="text-wrapper-2">{res.title}</div>
              <div className="overlap-group">
                <button onClick={openModal} className="text-wrapper-3 btn" value={res.id}>See more...</button>
                <p className="p">{res.shortmsg}{res.shortmsg}{res.shortmsg}{res.shortmsg}{res.shortmsg}{res.shortmsg}{res.shortmsg}{res.shortmsg}{res.shortmsg}{res.shortmsg}{res.shortmsg}</p>
              </div>
            </div>
          })}

          <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
            {htData.filter((data) => data.id.toString() === filtered).map((res)=>{
              return  <div className="frame-0" key={res.id}>
                        <img src={res.image} alt={res.image}/>
                        <div className="text-wrapper">{dateFormat(res.date, "dddd, mmmm dS, yyyy")}</div>
                        <div className="text-wrapper-2"> <h1>{res.title}</h1></div>
                        <div className="overlap-group"><p className="p">{res.message}</p></div>
                      </div>
            })}
            <button onClick={closeModal}>Close</button>
          </Modal>

          <div className="navbar">
            <select className="drp-list" onChange={handleChange}>
              <option value='Sports'>Sports</option>
              <option value='Weight Loss'>Weight Loss</option>
              <option value='Lifestyle'>Lifestyle</option>
              <option value='Food'>Food</option>
              <option value= "Show All">Show All</option>
            </select>
          </div>

          <div className="searchbar"><input type="text" className="overlap" placeholder="what you looking for?"></input></div>
        </div>
      </div>
    </div>
  );
};

export default HealthTips;