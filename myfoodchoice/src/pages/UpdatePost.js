import React,{useState, useEffect} from 'react';
import Axios from 'axios'
import '../App.css'
import { Link, useParams } from 'react-router-dom';

function UpdatePost() {
    
    const [postList,setPostList]=useState([]);
    const {id} = useParams();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        Axios.get(`http://localhost:3002/api/read/${id}`).then((data)=>{
        setPostList(data.data)
        });
        },[])

    function handleClick () {
        Axios.put(`http://localhost:3002/api/update/${id}`, {name: name, password: password, id: id})
    }

    return (
        <div className="CreatePost">
            <table>
                <thead>
                    <tr>
                        <th>Old Name</th>
                        <th>Old Password</th>
                        <th>New Name</th>
                        <th>New Password</th>
                        <th>Update operations</th>
                    </tr>
                </thead>
                <tbody>
                    {postList.map((val,key)=>(
                        <tr key={val.id}>
                            <td>{val.name}</td>
                            <td>{val.password}</td>
                            <td><input onChange={(e)=> setName(e.target.value)}></input></td>
                            <td><input onChange={(e)=> setPassword(e.target.value)}></input></td>
                            <td><Link to='/'><button onClick={handleClick}>Update record</button></Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )}

export default UpdatePost