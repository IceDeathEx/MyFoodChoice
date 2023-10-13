import React from "react";
import "../css/ShoppingCartstyle.css";
import line from '../pics/Line_1.png';
import trash from '../pics/Trash_Can.png';
import line2 from '../pics/Line_2.png';
import NavBarUser from "./NavBarUser";

const ShoppingCart = () => {
    // Have a user order session table to store the items, which means whenever user clicks on OrderNow, the item will be stored into it.
    // Order Now includes Recipe, OrderFood and upgrade account.
    // Payment page, Redeem, Check out? Do without the loyalty points deduction. Every $ dollars paid is equivalent to 10 LP accumulated. 
    // Since Mr Ee say can do without the credit card verification, might explore that
    // Once customer have confirmed their order, it is stored in the transaction record. // might implement a status page like paid / unpaid so that i dont have to create two db tables
    return (
        <div>
            <NavBarUser/>
        
        <div className="shopping-cart">
            <div className="div">
                <div className="overlap">
                    <div className="text-wrapper">Choose your payment preference</div>
                    <div className="text-wrapper-2">Food</div>
                    <div className="text-wrapper-3">Loyalty</div>
                    <div className="text-wrapper-4">Card Details</div>
                    <div className="text-wrapper-5">Subtotal</div>
                    <div className="text-wrapper-6">$1,668</div>
                    <div className="text-wrapper-7">$1,672</div>
                    <div className="text-wrapper-8">Total (Tax incl.)</div>
                    <div className="text-wrapper-9">Your Point</div>
                    <div className="text-wrapper-10">3200 LP</div>
                    <div className="text-wrapper-11">$4</div>
                    <div className="text-wrapper-12">$1,672</div>
                    <div className="text-wrapper-13">Points that deducted</div>
                    <div className="text-wrapper-14">Points Left</div>
                    <div className="overlap-group">
                        <div className="text-wrapper-15">Pay at Counter</div>
                    </div>
                    <img className="line" alt="Line" src={line} />
                    <div className="buttonall">
                        <div className="overlap-group-2">
                            <button className="rectangle">
                            <div className="text-wrapper-16">$1,672 + 3200 LP</div>
                            <div className="text-wrapper-17">Checkout All</div>
                            </button>
                        </div>
                    </div>
                    <div className="buttonpay">
                        <div className="overlap-group-2">
                            <button className="rectangle-2">
                            <div className="text-wrapper-18">$1,672</div>
                            <div className="text-wrapper-19">Pay</div>
                            </button>
                        </div>
                    </div>
                    <div className="buttonredeem">
                        <div className="overlap-group-2">
                            <button className="rectangle-3">
                            <div className="text-wrapper-20">$1,672</div>
                            <div className="text-wrapper-21">Redeem</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="overlap-2">
                    <div className="text-wrapper-22">Breakfast Set</div>
                    <div className="text-wrapper-23">Extra cheese and toping</div>
                    <button>
                    <img className="trash-can-2" alt="Trash can" src={trash} />
                    </button>
                    <div className="text-wrapper-24">$300</div>
                    <div >
                    <input  className="rectangle-4" type="number" min={0}/>
                    </div>
                </div>
                <a href="" className="back">&lt;Back</a>
                <div className="overlap-3">
                    <div className="text-wrapper-25">Shopping cart</div>
                    <p className="p">You have 3 item in your cart</p>
                </div>
                <img className="img" alt="Line" src={line2} />
                <div className="overlap-4">
                    <div className="text-wrapper-26">Upgrade Account</div>
                    <p className="text-wrapper-27">account upgrade to better version</p>
                    <div className="text-wrapper-28">$300</div>
                    <button>
                    <img className="trash-can-2" alt="Trash can" src={trash} />
                    </button>
                    <div >
                    <input className="rectangle-5" type="number" min={0}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ShoppingCart;