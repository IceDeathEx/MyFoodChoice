import React from "react";
import "../css/ShoppingCartstyle.css";
import line from '../pics/Line_1.png';
import trash from '../pics/Trash_Can.png';
import line2 from '../pics/Line_2.png';
import { useState } from "react";
import check from "../pics/icon-circle-check.png"
import NavBarUser from "./NavBarUser";

const ShoppingCart = () => {
    const [showCreditCardForm, setShowCreditCardForm] = useState(false);
    const [showPayAtCounterForm, setShowPayAtCounterForm] = useState(false);

    const showCreditCard = () => {
        setShowCreditCardForm(true);
        setShowPayAtCounterForm(false);
    };

    const showPayAtCounter = () => {
        setShowCreditCardForm(false);
        setShowPayAtCounterForm(true);
    };

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };
    return (
        <div>
            <NavBarUser/>
        
        <div className="shopping-cart">
            <div className="div">
                <div className="overlap">
                    <div className="text-wrapper">Choose your payment preference</div>
                    <div className="text-wrapper-2">Card Details</div>
                    <div className="frame">
                        <div className="frame-2">
                            <div className="text-wrapper-3">Subtotal</div>
                            <div className="text-wrapper-4">$1,668</div>
                        </div>
                        <div className="frame-3">
                            <div className="text-wrapper-3">Total (Tax incl.)</div>
                            <div className="text-wrapper-4">$1,672</div>
                        </div>
                    </div>
                    <img className="line" alt="Line" src={line} />
                    <div className="buttonall">
                        <div className="overlap-group">
                            <button className="rectangle" onClick={openDialog}>
                            <div className="text-wrapper-5">$1,672</div>
                            <div className="text-wrapper-6">Checkout All</div>
                            </button>

                            {isDialogOpen && (
                            <dialog className="content" open>
                                <div className="titlle-wrapper">
                                <div className="titlle">Checkout Successful!</div>
                                </div>
                            <img className="icon-circle-check" alt="Icon circle check" src={check} />
                            <button onClick={closeDialog}>Close</button>
                            </dialog>
            )}
                        </div>
                    </div>
                    <div className="group">
                        <button className="div-wrapper" onClick={showCreditCard}>
                            <div className="text-wrapper-7">Credit Card</div>
                        </button>
                    </div>
                    <div className="overlap-wrapper">
                        <button className="div-wrapper" onClick={showPayAtCounter}>
                            <div className="text-wrapper-8">Pay at Counter</div>
                        </button>
                    </div>
                    {showCreditCardForm && (
                    <div className="group-2">
                        <div className="text-wrapper-9">Name on card</div>
                        <input className="overlap-2" type="text" placeholder="Full Name">
                        </input>
                        <div className="text-wrapper-11">Expiration date</div>
                        <input className="overlap-3" placeholder="mm/yy">
                        </input>
                        <div className="text-wrapper-13">CVV</div>
                        <input className="overlap-4" placeholder="123">
                        </input>
                        <div className="text-wrapper-14">Card Number</div>
                        <input className="overlap-5" placeholder="1111 2222 3333 4444">
                        </input>
                    </div>
                    )}
                </div>
                <div className="overlap-6">
                    <div className="text-wrapper-16">Breakfast Set</div>
                    <div className="text-wrapper-17">Extra cheese and topping</div>
                    <button>
                    <img className="trash-can" alt="Trash can" src={trash} />
                    </button>
                    <div className="text-wrapper-18">$300</div>
                    <input className="rectangle-2" type="number" placeholder="1" />
                </div>
                <a href="" className="back">&lt;Back</a>
                <div className="overlap-7">
                    <div className="text-wrapper-19">Shopping cart</div>
                    <p className="p">You have 2 item(s) in your cart</p>
                </div>
                <img className="img" alt="Line" src={line2} />
                <div className="overlap-8">
                    <div className="text-wrapper-20">Upgrade Account</div>
                    <p className="text-wrapper-21">account upgrade to better version</p>
                    <div className="text-wrapper-22">$300</div>
                    <button>
                    <img className="trash-can-2" alt="Trash can" src={trash} />
                    </button>
                    <input className="rectangle-3" placeholder="1" type="number" />
                </div>
            </div>
        </div>
    </div>                    
    );
};

export default ShoppingCart;