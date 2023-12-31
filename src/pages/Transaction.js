import React, {useEffect, useState} from 'react';
import NavBarUser from './NavBarUser';
import dateFormat from 'dateformat';
import CareCalories from "../server/config/CareCalories";
import "../css/TSstyle.css";

const Transaction = () => {
    const [loyaltydb, setloyaltydb] = useState([])
    const [loyaltydb2, setloyaltydb2] = useState([])
    const id = JSON.parse(window.localStorage.getItem("account"))
    const [filterloyalty, setFilterloyalty] = useState(false)
    const [filterTrans, setFilterTrans] = useState(false)
    const [transaction, settransaction] = useState([])
    const [transaction2, settransaction2] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        CareCalories.get(`/api/loyaltytransaction/${id}`)
        .then((data)=>{
            setloyaltydb(data.data.reverse())
        })
        CareCalories.get(`/api/gettransactionpaidandunpaid/${id}`)
        .then((data)=>{
            settransaction(data.data.reverse())
            console.log(data.data)
        })
        setIsLoading(true)
    },[])
    const handleLoyaltyName = (e) =>{
        if(e.target.value === null){
            setFilterloyalty(false)
        }
        else{
            setFilterloyalty(true)
            setloyaltydb2(loyaltydb.filter((res)=> res.itemname.toLowerCase().includes(e.target.value)))
        }
    }
    const handleTransactionName = (e) => {
        if(e.target.value === null){
            setFilterTrans(false)
        } 
        else {
            setFilterTrans(true)
            settransaction2(transaction.filter((res)=> res.transitemname.toLowerCase().includes(e.target.value)))
        }
    }
    return (
        <div className="all">
            <NavBarUser/>
            {isLoading ? (
                <div className="divcss">
                    <div className='table1'>
                <h2>Loyalty Transaction section</h2>
                <label>Search for record via item name: </label>
                <input type="search" name="1" onChange={handleLoyaltyName}/>
                <table className='center'>
                  <thead>
                      <tr>
                          <th className='1'>ID</th>
                          <th>Item name</th>
                          <th>Points deducted</th>
                          <th>Quantity</th>
                          <th>Datetime purchased</th>
                      </tr>
                  </thead>
                  <tbody>
                      {!filterloyalty && loyaltydb.map((data, index)=>{
                          return  <tr key={index+1}>
                                      <td className='one'>{index+1}</td>
                                      <td>{data.itemname}</td>
                                      <td>{data.point}</td>
                                      <td>{data.qty}</td>
                                      <td>{dateFormat(data.date, "dddd, mmmm dS, yyyy, h:MM:ss TT Z")}</td>
                                  </tr>
                      })}
                      {filterloyalty && loyaltydb2.map((data, index)=>{
                          return  <tr key={index+1}>
                                      <td className='one'>{index+1}</td>
                                      <td>{data.itemname}</td>
                                      <td>{data.point}</td>
                                      <td>{data.qty}</td>
                                      <td>{dateFormat(data.date, "dddd, mmmm dS, yyyy, h:MM:ss TT Z")}</td>
                                  </tr>
                      })}
                  </tbody>
              </table>
              </div>
              <div className='table2'>
                  <h2 >Transaction history section</h2>
                  <label>Search for record: </label>
                  <input type="search" name="2" onChange={handleTransactionName}/>
              <table className='center'>
                  <thead>
                      <tr> 
                          <th>ID</th>
                          <th>Item Name</th>
                          <th>Price</th>
                          <th>Qty</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Category</th>
                      </tr>
                  </thead>
                  <tbody>
                      {!filterTrans && transaction.map((data, index)=>{
                              return  <tr key={index+1}> 
                                          <td>{index+1}.</td>
                                          <td>{data.transitemname}</td>
                                          <td>{data.transitemprice}</td>
                                          <td>{data.transqty}</td>
                                          <td>{dateFormat(data.transdate, "dddd, mmmm dS, yyyy, h:MM:ss TT Z")}</td>
                                          <td>{data.transstatus}</td>
                                          <td>{data.transcategory}</td>
                                      </tr>
                          })}
                    {filterTrans && transaction2.map((data, index)=>{
                              return  <tr key={index+1}> 
                                          <td>{index+1}.</td>
                                          <td>{data.transitemname}</td>
                                          <td>{data.transitemprice}</td>
                                          <td>{data.transqty}</td>
                                          <td>{dateFormat(data.transdate, "dddd, mmmm dS, yyyy, h:MM:ss TT Z")}</td>
                                          <td>{data.transstatus}</td>
                                          <td>{data.transcategory}</td>
                                      </tr>
                          })}
                  </tbody>
              </table>
              </div>
              </div>
            ) :(
                <p>Still Loading...</p>
            )}
            
            
        </div>
    );
};

export default Transaction;