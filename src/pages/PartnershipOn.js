import React, {useEffect, useState} from "react";
import "../css/PartnershipOnstyle.css";
import encik from "../pics/download-1.png";
import spaghetti from "../pics/spaghetti.gif";
import rice from "../pics/rice.gif";
import Navbar1 from "./Navbar1";
import { useNavigate } from "react-router";
import CareCalories from "../server/config/CareCalories";

const PartnershipOn = () => {
    const [vendor, setvendor] = useState ([])
    const navigate = useNavigate()
    const [isloading, setisloading] = useState(false)
    useEffect(()=>{
        CareCalories.get("/api/getvendors")
        .then((res)=>{
            setvendor(res.data)
        })
        setisloading(true)
    },[])
    function handleSubmit(){
        alert('Form submitted!')
        navigate('/')
    }
    return (
        <div>
            <Navbar1 />

            <div className="partnership-on">
                <div className="div">
                    <div className="group">
                        <div className="text-wrapper">Be part of us.</div>
                        <div className="text-wrapper-2">our partners.</div>
                    </div>
                    <div className="group-2">
                        <p className="text-wrapper-3">Why u should be part of us?</p>
                        <p className="p">
                            enhance your business with Singapore’s First Calorie Tracker together with a Food Order System
                        </p>
                    </div>
                    <div className="group-3">
                        <div className="text-wrapper-3">Contact Us</div>
                        <p className="text-wrapper-4">Fill your interest here then we will reach back with a good news!</p>
                    </div>
                    <div className="frame">
                        {vendor.map((data, index) =>{
                            if (index % 2 !== 0) {
                                return null; // You need to return something in this case
                            } else {
                                return (
                                    <div className="frame-2" key={index}>
                                        <div className="job-offer">
                                            <img className="download" alt="Download" src={data.vendorimg} />
                                            <div className="group-wrapper">
                                                <div className="group-4">
                                                    <div className="text-wrapper-5">{data.vendorname}</div>
                                                    <div className="text-wrapper-6">{data.vendorspecialty}</div>
                                                    <p className="text-wrapper-7">{data.vendoraddress}</p>
                                                </div>
                                            </div>
                                        </div>
                        
                                        <div className="job-offer">
                                            <img className="download" alt="Download" src={vendor[index + 1].vendorimg} />
                                            <div className="group-wrapper">
                                                <div className="group-4">
                                                    <div className="text-wrapper-5">{vendor[index + 1].vendorname}</div>
                                                    <div className="text-wrapper-6">{vendor[index + 1].vendorspecialty}</div>
                                                    <p className="text-wrapper-7">{vendor[index + 1].vendoraddress}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                        })}
                        

                    </div>
                    <div className="group-5">
                        <p className="revolutionary">
                            <span className="span">
                                Revolutionary Innovation <br />
                            </span>
                            <span className="text-wrapper-8">
                                Join us to be part of a groundbreaking innovation in Singapore – the first-ever calorie tracker and food
                                order application. Stay ahead of the curve and revolutionize the way people approach healthy living
                            </span>
                        </p>
                        <p className="health-and-wellness">
                            <span className="span">
                                Health and Wellness Focus
                                <br />
                            </span>
                            <span className="text-wrapper-9">
                                In a world that&#39;s increasingly health-conscious, our application is dedicated to promoting a healthier
                                lifestyle. By joining us, you can be a part of this positive change in society.
                            </span>
                        </p>
                        <p className="marketing-and">
                            <span className="span">Marketing and Exposure</span>
                            <span className="text-wrapper-10">
                                : <br />
                            </span>
                            <span className="text-wrapper-9">
                                Benefit from the marketing and exposure that comes with being part of the first calorie tracker and food
                                order application in Singapore. Leverage our platform to increase your visibility
                            </span>
                        </p>
                        <p className="customer-engagement">
                            <span className="span">
                                Customer Engagement
                                <br />
                            </span>
                            <span className="text-wrapper-9">
                                Join us to engage with customers who are actively seeking healthier food options. We provide a platform
                                where your offerings can be easily discovered by those who prioritize their health
                            </span>
                        </p>
                    </div>
                    <img className="spaghetti" alt="Spaghetti" src={spaghetti} />
                    <img className="rice" alt="Rice" src={rice} />
                    <div className="group-6">
                        <textarea className="rectangle" placeholder="Enter your business email" />
                        <textarea className="rectangle-2" placeholder="Describe your business here...." />
                        <button className="div-wrapper" onClick={handleSubmit}>
                            <div className="text-wrapper-11">Submit</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnershipOn;
