import React, { useState, useEffect } from "react";
import "../css/styleHT.css";
import NavBarUser from "./NavBarUser";
import dateFormat from 'dateformat';
import Modal from 'react-modal';
import CareCalories from "../server/config/CareCalories";

// Styling of the Modal
const customStyles = {
  content: {
    top: '2px',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    margin: '0 auto',
    transform: 'scale(0.9)',
  },
};

//Actual Component
const HealthTips = () => {
  //Declaration of variables 
  const [htData, sethtdata] = useState([]);
  const [filtered, setFiltered] = useState('');
  const [htData2, sethtdata2] = useState([]);
  const [condition1, setcondition1] = useState(null) //Filter by Random Category
  const [condition2, setcondition2] = useState('')// Filter by Short Message
  const [isLoading, setIsLoading] = useState(false)
  //Usage of useEffect
  useEffect(() => {
    CareCalories.get('/api/getHealthTips')
      .then((data) => {
        sethtdata(data.data)
        sethtdata2(data.data)
      })
      setcondition1('Show All')
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
  setcondition1(e.target.value)
  if(e.target.value === 'Show All'){
    sethtdata2(htData.filter((data)=> data.shortmsg.toLowerCase().includes(condition2.toLowerCase())))
  }
  else{
    sethtdata2(htData.filter((data) => data.category === e.target.value && data.shortmsg.toLowerCase().includes(condition2.toLowerCase())))
  } 
}
const handleSearch = (e) =>{
  setcondition2(e.target.value)
  if(e.target.value === null){
    if(condition1 === 'Show All'){
      sethtdata2(htData)
    }
    else{
      sethtdata2(htData.filter((data) => data.category === condition1))
      
    }
    
  }
  else{
    if(condition1 === 'Show All'){
      sethtdata2(htData.filter((data) => data.shortmsg.toLowerCase().includes(e.target.value.toLowerCase())))
    }
    else{
      sethtdata2(htData.filter((data) => data.category === condition1 && data.shortmsg.toLowerCase().includes(e.target.value.toLowerCase())))
    }
    
  }
}

  return (
    <div className="all">
    {!isLoading ? (<div>
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
                        <img className='modaledit' src={res.image} alt={res.image}/>
                        <div className="text-wrapper">{dateFormat(res.date, "dddd, mmmm dS, yyyy")}</div>
                        <div className="text-wrapper-2"> <h1>{res.title}</h1></div>
                        <div className="overlap-group"><p className="p">{res.message}</p></div>
                      </div>
            })}
            <button onClick={closeModal}>Close</button>
          </Modal>

          <div className="filter">
            <select className="drplist" onChange={handleChange}>
              <option value= "Show All">Show All</option>
              <option value='Sports'>Sports</option>
              <option value='Weight Loss'>Weight Loss</option>
              <option value='Lifestyle'>Lifestyle</option>
              <option value='Food'>Food</option>
              
            </select>
          </div>

          <div className="searchbar"><input type="search" onChange={handleSearch} className="overlap" placeholder="what you looking for?"></input></div>
        </div>
      </div>
      </div>
    ): (<p>Loading in progress</p>)}
    </div>
  );
};

export default HealthTips;