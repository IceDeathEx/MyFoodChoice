import React, { useState } from "react";
import "../css/ManageVendor.css";
import kfc from "../pics/kfc.png";
import glass from "../pics/vector3.png";
import NavbarSa from "./NavbarSA";

const ManageVendor = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <div>
            <NavbarSa />


            <div className="manage-vendor">
                <div className="div">
                    <div className="overlap"><button className="text-wrapper btn" onClick={() => setToggle(false)}>User</button></div>
                    <div className="overlap-group"><button className="text-wrapper-2 btn" onClick={() => setToggle(true)}>Vendor</button></div>

                    {toggle && <div className="vendorPage">
                        <div className="text-wrapper-3">Create Account for Vendor</div>
                        <div className="text-wrapper-4">List of Vendor</div>
                        <img className="kfc" alt="Kfc" src={kfc} />
                        <div className="frame">
                            <div className="frame-2">
                                <div className="frame-3">
                                    <div className="frame-4">
                                        <input className="rectangle" />
                                        <div className="text-wrapper-5">Name*</div>
                                    </div>
                                    <div className="frame-5">
                                        <input className="rectangle" />
                                        <div className="text-wrapper-6">Password*</div>
                                    </div>
                                    <div className="frame-6">
                                        <input className="rectangle" />
                                        <div className="text-wrapper-7">Address</div>
                                    </div>
                                </div>
                                <div className="frame-7">
                                    <div className="frame-8">
                                        <input className="rectangle" />
                                        <div className="text-wrapper-8">Email*</div>
                                    </div>
                                    <div className="frame-9">
                                    <div className="text-wrapper-9SA">Specialty</div>
                                        <select className="rectangle">
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="fiat">Fiat</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <button className="buttonSA">
                                <div className="text">Create Account</div>
                            </button>
                        </div>


                        <div className="rectangle-2" >
                            {/* table here*/}
                        </div>

                        <div className="frame-10SA">
                            <button className="div-wrapperSA">
                                <div className="text-2">import image</div>
                            </button>
                            <div className="text-wrapper-10">kfc.png</div>
                        </div>
                        <div className="frame-11">
                            <input className="label" />
                            <img className="icon-magnifying" alt="Icon magnifying" src={glass} />
                        </div>
                    </div>}

                    {!toggle && <div className="user">
                        <div className="user-group">
                            <div className="user-text-wrapper">List of User Account</div>
                            <div className="user-rectangle" />
                            <div className="user-frame">
                                <input className="user-label" />
                                <img className="user-icon-magnifying" alt="Icon magnifying" src={glass} />
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default ManageVendor;



