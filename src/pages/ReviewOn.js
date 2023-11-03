import React, {useState, useEffect} from "react";
import "../css/ReviewOnstyle.css";
import ReactStars from "react-rating-stars-component";
import Navbar1 from "./Navbar1";
import CareCalories from "../server/config/CareCalories";

const ReviewOn = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const [isLoading, setisloading] = useState(false)
  const [reviews, setreviews] = useState([])
  useEffect (()=>{
    CareCalories.get("/api/getreviews")
    .then((res)=>{
      setreviews(res.data)
      console.log(res.data)
    })
    setisloading(true)
  },[])
  return (
    <div className="all">
      <Navbar1 />

      <div className="review-on-boarding">
        <div className="div">
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper">Our review.</div>
              <p className="p">see and prove it yourself.</p>
            </div>
          </div>
          <div className="frame">
            <div className="frame-2">
              
              {isLoading && reviews.map((data, index) =>{
                return <div className="job-offer" key={index+1}>
                <div className="group-wrapper">
                  <div className="div-wrapper">
                    <div className="text-wrapper-2">{data.name}</div>
                  </div>
                </div>
                <div className="group-2">
                  <div className="group-3">
                    <p className="text-wrapper-3">{data.reviewbody}</p>
                    <p className="text-wrapper-6">{data.reviewtitle}</p>
                  </div>
                </div>
                <div className="rectangle">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={40}
                    isHalf={true}
                    value={data.reviewstar}
                    edit={false}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />

                </div>
              </div>
              })}
              

              {/* <div className="job-offer">
                <div className="group-wrapper">
                  <div className="div-wrapper">
                    <div className="text-wrapper-2">John Doe</div>
                  </div>
                </div>
                <div className="group-2">
                  <div className="group-3">
                    <p className="text-wrapper-3">“The Best APP I Have ever use in my life”</p>
                  </div>
                </div>
                <div className="rectangle">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={40}
                    isHalf={true}
                    value={2}
                    edit={false}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />

                </div>
              </div>
              <div className="job-offer">
                <div className="group-wrapper">
                  <div className="div-wrapper">
                    <div className="text-wrapper-2">John Doe</div>
                  </div>
                </div>
                <div className="group-2">
                  <div className="group-3">
                    <p className="text-wrapper-3">“The Best APP I Have ever use in my life”</p>
                  </div>
                </div>
                <div className="rectangle">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={40}
                    isHalf={true}
                    value={2}
                    edit={false}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />

                </div>
              </div>
              <div className="job-offer">
                <div className="group-wrapper">
                  <div className="div-wrapper">
                    <div className="text-wrapper-2">John Doe</div>
                  </div>
                </div>
                <div className="group-2">
                  <div className="group-3">
                    <p className="text-wrapper-3">“The Best APP I Have ever use in my life”</p>
                  </div>
                </div>
                <div className="rectangle">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={40}
                    isHalf={true}
                    value={2}
                    edit={false}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />

                </div>
              </div>
              <div className="job-offer">
                <div className="group-wrapper">
                  <div className="div-wrapper">
                    <div className="text-wrapper-2">John Doe</div>
                  </div>
                </div>
                <div className="group-2">
                  <div className="group-3">
                    <p className="text-wrapper-3">“The Best APP I Have ever use in my life”</p>
                  </div>
                </div>
                <div className="rectangle">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={40}
                    isHalf={true}
                    value={2}
                    edit={false}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />

                </div>
              </div> */}
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <p className="what-you-waiting-for">
                  What You Waiting for?
                  <br />
                  Start your healthy life with
                </p>
                <div className="text-wrapper-4">CareCalories.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewOn;