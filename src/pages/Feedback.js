import React from "react";
import NavBarUser from "./NavBarUser";
import ReactStars from "react-rating-stars-component";
import "../css/reviewStyle.css";

const Feedback = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
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
                                <input className="enter-username" placeholder="Type the title here" type="text">
                                </input>
                            </div>
                        </div>
                        <div className="other-comments">
                            <textarea className="comments" placeholder="Add your comments...">
                              
                            </textarea>
                        </div>
                    </div>
                    <button className="group">
                        <button className="button-request-demo">
                            <div className="text-wrapper-2">submit</div>
                        </button>
                    </button>
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
