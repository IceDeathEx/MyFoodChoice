import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import '../App.css'
import { Link, useParams } from 'react-router-dom';

function Read() {
  const [postList,setPostList]=useState([]);
  const {id} = useParams();
    useEffect(()=>{
    Axios.get(`http://localhost:3002/api/read/${id}`).then((data)=>{
    setPostList(data.data)
    });
    },[]) 
    function handleClick(){
        Axios.delete(`http://localhost:3002/api/delete/${id}`)
        .then(res => {  
            console.log(res);  
            console.log(res.data);  
        })
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Password</th>
                        <th>Gender</th>
                        <th>AccountType</th>
                        <th>Read Operations</th>
                        <th>Delete Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {postList.map((val,key)=>(
                    <tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.email}</td>
                        <td>{val.name}</td>
                        <td>{val.password}</td>
                        <td>{val.gender}</td>
                        <td>{val.accountType}</td>
                        <td><Link to='/'><button>Go back to Main page</button></Link></td>
                        <td><Link to='/'><button onClick={handleClick}>Delete record</button></Link></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )}
export default Read;