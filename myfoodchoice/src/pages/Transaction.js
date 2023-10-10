import React, {useEffect, useState} from 'react';
import NavBarUser from './NavBarUser';
import Axios from "axios";
import dateFormat from 'dateformat';

const Transaction = () => {
    const [loyaltydb, setloyaltydb] = useState([])
    const [loyaltydb2, setloyaltydb2] = useState([])
    const [tranhistdb, sethistdb] = useState([])
    const id = JSON.parse(window.localStorage.getItem("account"))
    const [filterloyalty, setFilterloyalty] = useState(false)

    useEffect(()=>{
        Axios.get(`http://localhost:3002/api/loyaltytransaction/${id}`)
        .then((data)=>{
            setloyaltydb(data.data)
        })
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
    return (
        <div>
            <NavBarUser/>
            <div className="divcss">
              <h2>Loyalty Transaction section</h2>
              <label>Search for record via item name: </label>
              <input type="search" onChange={handleLoyaltyName}/>
              <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Item name</th>
                        <th>Points deducted</th>
                        <th>Quantity</th>
                        <th>Datetime purchased</th>
                    </tr>
                </thead>
                <tbody>
                    {!filterloyalty && loyaltydb.reverse().map((data, index)=>{
                        return  <tr key={index+1}>
                                    <td>{index+1}</td>
                                    <td>{data.itemname}</td>
                                    <td>{data.point}</td>
                                    <td>{data.qty}</td>
                                    <td>{dateFormat(data.date, "dddd, mmmm dS, yyyy, h:MM:ss TT Z")}</td>
                                </tr>
                    })}
                    {filterloyalty && loyaltydb2.reverse().map((data, index)=>{
                        return  <tr key={index+1}>
                                    <td>{index+1}</td>
                                    <td>{data.itemname}</td>
                                    <td>{data.point}</td>
                                    <td>{data.qty}</td>
                                    <td>{dateFormat(data.date, "dddd, mmmm dS, yyyy, h:MM:ss TT Z")}</td>
                                </tr>
                    })}
                </tbody>
            </table>


                <h2>Transaction history section</h2>
                <label>Search for record: </label><input type="search"/>
            <table>
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Item name</th>
                        <th>Cost of Transaction</th>
                        <th>DateTime of Purchase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>FitBit Watch</td>
                        <td>100000 LP</td>
                        <td>9 Sep 2023 15:00 GMT+8</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>FP 20</td>
                        <td>1000LP</td>
                        <td>9 Sep 2023 15:00 GMT+8</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Vegan Steak Recipe</td>
                        <td>$3.99</td>
                        <td>9 Sep 2023 15:00 GMT+8</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>2023 Summer recipes</td>
                        <td>$15.99</td>
                        <td>9 Sep 2023 15:00 GMT+8</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>FP 10</td>
                        <td>500 LP</td>
                        <td>9 Sep 2023 15:00 GMT+8</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default Transaction;