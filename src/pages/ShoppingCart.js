import React from "react";
import "../css/ShoppingCartstyle.css";
import line from '../pics/Line_1.png';
import trash from '../pics/Trash_Can.png';
import line2 from '../pics/Line_2.png';
import { useState, useEffect } from "react";
import check from "../pics/icon-circle-check.png"
import NavBarUser from "./NavBarUser";
import Axios from "axios";

const ShoppingCart = () => {
    const [showCreditCardForm, setShowCreditCardForm] = useState(false);
    const [showPayAtCounterForm, setShowPayAtCounterForm] = useState(false);

    const showCreditCard = () => {
        setShowCreditCardForm(true);
        setShowPayAtCounterForm(false);
        setpayment('Credit Card')
    };

    const showPayAtCounter = () => {
        setShowCreditCardForm(false);
        setShowPayAtCounterForm(true);
        setpayment('Counter')
    };

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => {
        setIsDialogOpen(true);
        if(payment === ''){
            console.log('Please select a payment method.')
        }
        else if(payment === 'Credit Card'){

        }
        else if(payment === 'Counter'){
            
        }
        else{
            console.log('Some Error happening.')
        }
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    const uid = JSON.parse(window.localStorage.getItem("account"))
    const [transaction, settransaction] = useState([])
    const [totalprice, settotalprice] = useState([])
    const [payment, setpayment] = useState('')
    useEffect(()=>{
        Axios.get(`http://localhost:3002/api/getshoppingcart/${uid}`)
        .then((data)=>{
            settransaction(data.data)
        })
        Axios.get(`http://localhost:3002/api/gettotalprice/${uid}`)
        .then((data)=>{
            settotalprice(data.data)
        })
        setIsLoading(true)
    })

    const handleDelete = (item) => {
        Axios.delete(`http://localhost:3002/api/deletetransactionrecord/${item.transid}`)
    }
    const [isLoading, setIsLoading] = useState(false)

    const handleQtyChange = (item, e) => {
        Axios.put(`http://localhost:3002/api/updatetransactionrecord/${item.transid}`,{transqty: e.target.value})
    }
    return (
        <div>
            <NavBarUser/>
        {isLoading && totalprice[0] ? (
            <div className="shopping-cart">
            <div className="div">
                <div className="overlap">
                    <div className="text-wrapper">Choose your payment preference</div>
                    <div className="text-wrapper-2">Card Details</div>
                    <div className="frame">
                        <div className="frame-2">
                            <div className="text-wrapper-3">Subtotal</div>
                            <div className="text-wrapper-4">${(Math.round(totalprice[0].total * 100) / 100).toFixed(2)}</div>
                        </div>
                        <div className="frame-3">
                            <div className="text-wrapper-3">Total (Tax incl.)</div>
                            <div className="text-wrapper-4">${(Math.round(totalprice[0].total * 100 * 1.2) / 100).toFixed(2)}</div>
                        </div>
                    </div>
                    <img className="line" alt="Line" src={line} />
                    <div className="buttonall">
                        <div className="overlap-group">
                            <button className="rectangle" onClick={openDialog}>
                            <div className="text-wrapper-5">${(Math.round(totalprice[0].total * 100 * 1.2) / 100).toFixed(2)}</div>
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
                {transaction.map((item, index)=>{
                    if(item.transcategory === 'Recipe' || item.transcategory === 'Upgrade'){
                        return <div className={`overlap-0${index+1}`} key={index+1}>
                    <div className="text-wrapper-16">{item.transitemname}<br/>{item.transitemvendor}</div>
                    <div className="text-wrapper-17">{item.transcategory}</div>
                    <button className="btn" onClick={() => handleDelete(item)}>
                    <img className="trash-can" alt="Trash can" src={trash} />
                    </button>
                    <div className="text-wrapper-18">${(Math.round(item.transitemprice * 100) / 100).toFixed(2)}</div>
                    <p className="rectangle-2">{item.transqty}</p>
                </div>
                    }
                    else{
                        return <div className={`overlap-0${index+1}`} key={index+1}>
                    <div className="text-wrapper-16">{item.transitemname}<br/>{item.transitemvendor}</div>
                    <div className="text-wrapper-17">{item.transcategory}</div>
                    <button className="btn" onClick={() => handleDelete(item)}>
                    <img className="trash-can" alt="Trash can" src={trash} />
                    </button>
                    <div className="text-wrapper-18">${(Math.round(item.transitemprice * item.transqty * 100) / 100).toFixed(2)}</div>
                    <input className="rectangle-2" type="number" placeholder={item.transqty} onChange={(e)=> handleQtyChange(item, e)} />
                </div>
                    }
                    
                })}
                
                
                <h1>Shoppe Cart</h1>
                <div className="overlap-7">
                    <p className="p">You have {transaction.length} item(s) in your cart</p>
                </div>
                <img className="img" alt="Line" src={line2} />
                
                
            </div>
        </div>
        ) : (
            <p>Still Loading...</p>
        )}
        
    </div>                    
    );
};

export default ShoppingCart;