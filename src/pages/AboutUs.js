import React from "react";
import "../css/AboutUsstyle.css";
import image2 from "../pics/image-2.png";
import image1 from "../pics/image-1.png";
import Navbar1 from "./Navbar1";

const AboutUs = () => {
    return (
        <div className="all">
            <Navbar1/>
       
        <div className="about-us">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <div className="overlap">
                        <div className="div">
                            <div className="overlap-2">
                                <img className="image" alt="Image" src={image1} />
                                <img className="img" alt="Image" src={image2} />
                            </div>
                            <div className="text-wrapper">Our Goals</div>
                            <p className="top-and-sensational">
                                Top and sensational health mobile application in Singapore in 3<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;years time.
                                <br />
                                To reach out to the international market within 5 years of release.
                                <br />
                                To have 100,000 users by the end of the first year of release.
                                <br />
                                To encourage users on the amount of calories needed for themselves.
                                <br />
                                To enhance the healthy living habits in modern-day society.
                            </p>
                        </div>
                        <div className="text-wrapper-2">Our vision</div>
                        <p className="our-aspiration-is-to">
                            Our aspiration is to position ourselves as the foremost mobile
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;application dedicated to delivering
                            comprehensive and perceptive
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;culinary guidance, accompanied by captivating
                            wellness advice, thereby
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;enabling users to cultivate and maintain a
                            nourishing and
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;health-conscious culinary regimen,
                            meticulously customized to their
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;distinct health parameters. Our overarching
                            objective is to contribute
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to the cultivation and fortification of
                            wholesome living practices in
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the context of contemporary society.
                        </p>
                    </div>
                    <div className="text-wrapper-3">Contact Us</div>
                    <p className="p">Tel: 6666 7777 | Mobile: 9999 8888 | Email: CareCalories@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
    );
};
export default AboutUs;