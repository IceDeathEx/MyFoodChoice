import React, {useEffect, useState} from 'react';
import NavBarUser from './NavBarUser';
import Axios from "axios";
import dateFormat from 'dateformat';

const MealHistory = () => {
    const id = JSON.parse(window.localStorage.getItem("account"))
    const [mealrecorddb, setmealrecorddb] = useState([])
    const [mealrecorddb3, setmealrecorddb3] = useState([])
    const [userprofile, setuserprofile] = useState([])
    const [condition1, setcondition1] = useState(null) //Condition1 is the user profile name
    const [condition2, setcondition2] = useState('') //Condition2 is the user type in field
    useEffect(()=>{
        Axios.get(`http://localhost:3002/api/getmealrecordfullinfo/${id}`)
        .then((data)=>{
            setmealrecorddb(data.data)
            setmealrecorddb3(data.data.filter((res)=> res.upid === 1))
            setcondition1(data.data.filter((res)=> res.upid === 1)[0].name)
        })
        Axios.get(`http://localhost:3002/api/getUserProfile/${id}`)
            .then((data) => {
                setuserprofile(data.data)
            })
        
    },[])
    const handleMealRecordName = (e) =>{
        setcondition2(e.target.value)
        if(e.target.value === ''){
            //Do nothing
        }
        else{
            setmealrecorddb3(mealrecorddb.filter((res)=> res.name === condition1 && res.fname.toLowerCase().includes(e.target.value.toLowerCase())))
        }
    }
    const handleUPChange = (e) =>{
        setcondition1(e.target.value)
        if(condition2 === ''){
            setmealrecorddb3(mealrecorddb.filter((res)=> res.name === e.target.value))

        }
        else{
            setmealrecorddb3(mealrecorddb.filter((res)=> res.name === e.target.value && res.fname.toLowerCase().includes(condition2.toLowerCase())))
        }
        
    }
    return ( 
        <div>
            <NavBarUser/>
            <h1>Meal Record</h1>
            <label>Search for record via food name: </label>
            <input type="search" onChange={handleMealRecordName}/><br/>
            <label>Select a userprofile name:</label>
            {/*Need to loop through the names of the userprofile so need to grab userprofile name by user id */}
            <select onChange={handleUPChange}>
                {userprofile.map((data,index)=>{
                    return <option value={data.id} key={index}>{data.name}</option>
                })}
            </select>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Food Name</th>
                        <th>DateTime</th>
                        <th>Meal</th>
                        <th>Calories<br/>(kcal)</th>

                        <th>Carbohydrate<br/>(g)</th>
                        <th>Protein<br/>(g)</th>
                        <th>Fat<br/>(g)</th>
                        <th>Cholesterol<br/>(mg)</th>
                        <th>Saturated Fat<br/>(g)</th>
                        
                        <th>Sodium<br/>(mg)</th>
                        <th>Weight<br/>(g)</th>
                        <th>Dietary Fibre<br/>(g)</th>
                    </tr>
                </thead>
                <tbody>
                    {/* !filtermealrecord &&  */mealrecorddb3.reverse().map((data, index)=>{
                        return  <tr key={index+1}>
                                    <td>{index+1}</td>
                                    <td>{data.fname}</td>
                                    <td>{dateFormat(data.mrdate, "dddd, mmmm dS, yyyy, h:MM:ss TT Z")}</td>
                                    <td>{data.meal}</td>
                                    <td>{data.kcal}</td>

                                    <td>{data.carbohydrate}</td>
                                    <td>{data.protein}</td>
                                    <td>{data.fat}</td>
                                    <td>{data.cholesterol}</td>
                                    <td>{data.saturatedfat}</td>

                                    <td>{data.sodium}</td>
                                    <td>{data.weight}</td>
                                    <td>{data.dietaryfibre}</td>
                                </tr>
                    })}
                </tbody>
            </table>
        </div>
     );
}
 
export default MealHistory;