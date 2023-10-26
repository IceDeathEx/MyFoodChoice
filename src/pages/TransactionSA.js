import React, { useEffect, useState } from "react";
import "../css/TSAstyle.css";
import glass from "../pics/vector3.png"
import NavbarSa from "./NavbarSA";
import CareCalories from "../server/config/CareCalories";
import dateFormat from "dateformat";


const TransactionSA = () => {
    const [transaction, settransaction] = useState([])
    const [transaction2, settransaction2] = useState([])
    useEffect(() => {
        CareCalories.get("/api/getalltransactionwithname")
            .then((res) => {
                settransaction(res.data)
                console.log(res.data)
            })
    }, [])
    const [filter, setfilter] = useState(false);
    function handleChange(e){
        if(e.target.value.length === 0){
            setfilter(false)
        }
        else{
            setfilter(true)
            settransaction2(transaction.filter((item)=> item.email.toLowerCase().includes(e.target.value.toLowerCase())))
            
        }
        
    }
    return (
        <div>
            <NavbarSa />
            <div className="transaction">
                <div className="div">
                    <div className="rectangleTS" >
                        {<table>
                            <thead>
                                <tr>
                                    <th>Transaction ID</th>
                                    <th>User's ID</th>
                                    <th>User's Email</th>
                                    <th>Item' name</th>
                                    <th>Item's price</th>
                                    <th>Item's qty</th>
                                    <th>Total price</th>
                                    <th>Date Purchased</th>
                                    <th>Status</th>
                                    <th>Payment</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {!filter && transaction.map((record, index)=>{
                                    return <tr key={index}>
                                    <td>{record.transid}</td>
                                    <td>{record.uid}</td>
                                    <td>{record.email}</td>
                                    <td>{record.transitemname}</td>
                                    <td>{record.transitemprice}</td>
                                    <td>{record.transqty}</td>
                                    <td>{record.transqty}</td>
                                    <td>{dateFormat(record.transdate, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</td>
                                    <td>{record.transstatus}</td>
                                    <td>{record.payment}</td>
                                </tr>
                                })}
                                {filter && transaction2.map((record, index)=>{
                                    return <tr key={index}>
                                    <td>{record.transid}</td>
                                    <td>{record.uid}</td>
                                    <td>{record.email}</td>
                                    <td>{record.transitemname}</td>
                                    <td>{record.transitemprice}</td>
                                    <td>{record.transqty}</td>
                                    <td>{record.transqty}</td>
                                    <td>{dateFormat(record.transdate, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</td>
                                    <td>{record.transstatus}</td>
                                    <td>{record.payment}</td>
                                </tr>
                                })}
                                
                            </tbody>
                        </table>}
                    </div>
                    <div className="frameTS">
                        <input className="label" onChange={handleChange} placeholder='Search by Email'/>
                        <img className="icon-magnifying" alt="Icon magnifying" src={glass} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionSA;
