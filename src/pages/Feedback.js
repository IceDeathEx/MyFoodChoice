import React, { useState } from "react";
import NavBarUser from "./NavBarUser";
import ReactStars from "react-rating-stars-component";
import "../css/reviewStyle.css";
import Axios from "axios";
import { useNavigate } from "react-router";

const Feedback = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
    setrating(newRating)
  };
  const [rating, setrating] = useState(null)
  const [title, setttile] = useState('')
  const [body, setbody] = useState('')
  const uid = JSON.parse(window.localStorage.getItem('account'))
  const navigate = useNavigate()
  function handleSubmit() {
    if(title === '' || body === '' || rating === null){
      console.log('Please fill in the fields to continue')
    }
    else{
      Axios.post(`http://localhost:3002/api/addreview/${uid}`, 
      {
      star: rating,
      title: title,
      body: body,
    })
    alert('Reviews successfully created.')
    navigate('/homepage')
    }
  }
  function onChangeBody(e) {
    setbody(e.target.value)
  }
  function onChangeTitle(e) {
    setttile(e.target.value)
  }
  return (
    <div>
      <NavBarUser />
      <div>
        <div className="review">
          <div className="review-wrapper">
            <div className="div">
              <div className="section">
                <div className="input-section">
                  <div className="name-input">
                    <div className="text-wrapper">Title</div>
                    <input className="enter-username" placeholder="Type the title here" type="text" onChange={onChangeTitle}>
                    </input>
                  </div>
                </div>
                <div className="other-comments">
                  <textarea className="comments" placeholder="Add your comments..." onChange={onChangeBody}>

                  </textarea>
                </div>
              </div>
              <div className="group">
                <button className="button-request-demo" onClick={handleSubmit}>
                  <div className="text-wrapper-2">submit</div>
                </button>
              </div>
              <div className="we-value-your">WE VALUE YOUR FEEDBACK!</div>
              <div className="text-wrapper-3">Give Us a Star</div>
              <div className="rectangle">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Feedback;
