import React from "react";
import "../css/ShoppingCartstyle.css";
import line from '../pics/Line_1.png';
import trash from '../pics/Trash_Can.png';
import line2 from '../pics/Line_2.png';
import { useState, useEffect } from "react";
import check from "../pics/icon-circle-check.png"
import NavBarUser from "./NavBarUser";
import { useNavigate } from "react-router";
import dateFormat from 'dateformat';
import CareCalories from "../server/config/CareCalories";

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
    const [card, setcard] = useState(null)
    const [cvv, setcvv] = useState(null)
    const [expiry, setexpiry] = useState(null)
    const [name, setname] = useState('')
    const handleCreditCard = (e) =>{
        setcard(e.target.value)
    }
    const handleCVV = (e) =>{
        setcvv(e.target.value)
    }
    const handleExp = (e) =>{
        setexpiry(e.target.value)
    }

    function luhnCheck(cardNumber) {
        var sum = 0;
        var doubleUp = false;
        for (var i = cardNumber.length - 1; i >= 0; i--) {
            var digit = parseInt(cardNumber.charAt(i), 10);
            if (doubleUp) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            sum += digit;
            doubleUp = !doubleUp;
        }
        return (sum % 10) === 0;
    }
    // USE THIS CREDIT CARD NO. 4012888888881881

    const openDialog = () => {
        var today = new Date()
        //setIsDialogOpen(true);
        if(payment === ''){
            alert('Please select a payment method.')
        }
        else if(payment === 'Credit Card'){
            if(name === ''){
                alert('Please enter a name.')
            }
            var isValidCardNumber = /^\d{13,19}$/.test(card) && luhnCheck(card);

            // Expiration date validation (MM/YY format)
            var isValidExpirationDate = /^((0[1-9])|(1[0-2]))\/\d{2}$/.test(expiry);

            // CVV validation (3 or 4 digits)
            var isValidCVV = /^\d{3,4}$/.test(cvv);
            //console.log(isValidCardNumber, isValidCVV, isValidExpirationDate)
            // Display validation results
            if (isValidCardNumber && isValidExpirationDate && isValidCVV && name) {
                //console.log("Credit card information is valid.");
                transaction.map((item)=>{
                    CareCalories.put(`/api/updatetransaction/${uid}`, {
                        transstatus: 'Paid',
                        transid: item.transid,
                        transdate: dateFormat(today, "yyyy-mm-dd HH:MM:ss"),
                        payment: 'Credit Card'
                    })
                })
                if(transaction.filter((res)=> res.transitemname === 'Upgrade').length > 0){
                    CareCalories.put(`/api/updateuserpremiumstatus/${uid}`, {
                        premium: 'premium'
                    })
                }
                alert("Transaction successfully went through.")
                navigate('/homepage')
            } else {
                alert("Invalid credit card information. Please check the placeholder values example.");
            }

        }
        else if(payment === 'Counter'){
            transaction.map((item)=>{
                CareCalories.put(`/api/updatetransaction/${uid}`, {
                    transstatus: 'Unpaid',
                    transid: item.transid,
                    transdate: dateFormat(today, "yyyy-mm-dd HH:MM:ss"),
                    payment: 'Counter'
                })
            })
            navigate('/homepage')
        }
        else{
            alert('Some Error happening.')
        }
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    const uid = JSON.parse(window.localStorage.getItem("account"))
    const [transaction, settransaction] = useState([])
    const [totalprice, settotalprice] = useState([])
    const [payment, setpayment] = useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        CareCalories.get(`/api/getshoppingcart/${uid}`)
        .then((data)=>{
            settransaction(data.data)
        })
        CareCalories.get(`/api/gettotalprice/${uid}`)
        .then((data)=>{
            settotalprice(data.data)
        })
        setIsLoading(true)
    })

    const handleDelete = (item) => {
        CareCalories.delete(`/api/deletetransactionrecord/${item.transid}`)
    }
    const [isLoading, setIsLoading] = useState(false)

    const handleQtyChange = (item, e) => {
        CareCalories.put(`/api/updatetransactionrecord/${item.transid}`,{transqty: e.target.value})
    }
    return (
        <div className="all">
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
                        <input className="overlap-2" type="text" placeholder="Full Name" onChange={(e)=> setname(e.target.value)} />
                        <div className="text-wrapper-11">Expiration date</div>
                        <input className="overlap-3" placeholder="mm/yy" onChange={handleExp}/>
                        <div className="text-wrapper-13">CVV</div>
                        <input className="overlap-4" type="number" placeholder="123" onChange={handleCVV}/>
                        <div className="text-wrapper-14">Card Number</div>
                        <input className="overlap-5" placeholder="1111 2222 3333 4444" onChange={handleCreditCard}/>
                    </div>
                    )}
                </div>
                {transaction && transaction.map((item, index)=>{
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
                
                
                <h1>Shopping Cart</h1>
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