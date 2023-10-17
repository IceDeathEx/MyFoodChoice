import React, {useEffect, useState} from "react";
import "../css/FoodOrderstyle.css";
import icon from '../pics/Icon.png';
import NavBarUser from "./NavBarUser";
import Axios from "axios";
import line_4 from "../pics/Line_4.svg"
import Pagination from "./Pagination"
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import dateFormat from 'dateformat';

const FoodOrder = () => {

    //Array to store the api details
    const [orderfood, setorderfood] = useState([])
    const [orderfood2, setorderfood2] = useState([])
    const [filterdata, setfilterdata] = useState([])
    const [transaction, settransaction] = useState([])

    //Declare search conditions and filter conditions
    const [filter1, setfilter1] = useState('')
    const [filter2, setfilter2] = useState('')

    //Redirecting to different page
    const id = useParams() // This is the id passed from previous page.
    const navigate = useNavigate()
    const uid = JSON.parse(window.localStorage.getItem("account"))

    //Load Page
    const [isLoading, setIsLoading] = useState(false)
    const [currentPosts2, setCurrentPosts2] = useState([])
    const [filtersearch, setfiltersearch] = useState(false)
    const [totalPosts, setTotalPosts] = useState(null)

    //Use useEffect to load initial rendering
    useEffect(()=>{
        Axios.get("http://localhost:3002/api/getorderfood")
        .then((res)=>{
            setorderfood(res.data)
            if(id.category === 'All'){
                setorderfood2(res.data)
            }
            else{
                setorderfood2(res.data.filter((res)=> res.ofname === id.category))
            }
            
            const unique = [...new Set(res.data.map((item) => item.ofname))]
            setfilterdata(unique)
            setTotalPosts(res.data.length)
            setCurrentPosts(res.data.slice(indexOfFirstPost, indexOfLastPost))
            setIsLoading(true)
        })
        Axios.get(`http://localhost:3002/api/getshoppingcart/${uid}`)
        .then((data)=>{
            settransaction(data.data)
        })
    },[])

    const handleSearch = (e) => {
        setfilter1(e.target.value)
        if(e.target.value === null){
            setCurrentPosts(orderfood2.slice(indexOfFirstPost, indexOfLastPost))
            setfiltersearch(false)
        }
        else{
            setCurrentPosts2(currentPosts.filter((data)=> data.ofvendor.toLowerCase().includes(e.target.value.toLowerCase())))
            setfiltersearch(true)
        }
        
    }
    const handleFilter = (e) => {
        setfilter2(e.target.value)
        if(e.target.value === 'All'){
            setfiltersearch(false)
            setorderfood(orderfood2)
            setCurrentPosts(orderfood2.slice(indexOfFirstPost, indexOfLastPost))
            setTotalPosts(orderfood2.length)
            if(currentPosts.length < 13){
                navigate(`/orderfood/${e.target.value}/page/1`)
            }
            else{
                navigate(`/orderfood/${e.target.value}/page/${id.id}`)
            }
            
        }
        else{
            setfiltersearch(false)
            setCurrentPosts(orderfood2.filter((data)=> data.ofname === e.target.value).slice(indexOfFirstPost, indexOfLastPost))
            setTotalPosts(currentPosts.length)
            if(currentPosts.length < 13){
                navigate(`/orderfood/${e.target.value}/page/1`)
            }
            else{
                navigate(`/orderfood/${e.target.value}/page/${id.id}`)
            }
        }
    }

    //Pagination
    const [currentPage, setCurrentPage] = useState(id.id)
    const [postsPerPage] = useState(12);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const [currentPosts, setCurrentPosts] = useState([])
    const paginate = pageNumber => setCurrentPage(pageNumber);

    //Handle The order by storing it in database
    const handleOrder = (item) => {
        if(transaction.filter((res)=> res.transitemid === item.ofid && res.transcategory === 'Food' ).length === 0){
            var today = new Date()
            Axios.post(`http://localhost:3002/api/createtransaction/${uid}`, { 
                uid: uid, 
                transitemid: item.ofid,
                transitemname: item.ofname,
                transitemprice: item.ofprice,
                transqty: 1, 
                transdate: dateFormat(today, "yyyy-mm-dd HH:MM:ss"), 
                transitemvendor: item.ofvendor,
                transstatus: 'Ongoing', 
                payment: 'Counter',
                transcategory: 'Food'
                })
    
            navigate('/shoppingcart')
            //window.location.reload()
        }
        else{
            console.log('Already added')
        }
        
    }
    
    return (
        
        <div>
            <NavBarUser/>
            {isLoading ? (
                <div className="food-order">
                <div className="div">
                    <input className="overlap-group" placeholder="what you looking for?" type="text" onChange={handleSearch}>
                        
                    </input>
                    <div className="frame">
                        <div className="frame-2">
                            <div className="text-wrapper-2">List</div>
                            {filterdata.map((data, index)=>{
                                return <div key={index}>
                                    <button className="text-wrapper-3 btn" value={data} onClick={handleFilter}>{data}</button><br/>
                                    <img className="line" alt="Line" src={line_4} />
                                </div>
                            })}
                            <div>
                                    <button className="text-wrapper-3 btn" value="All" onClick={handleFilter}>Show All</button><br/>
                                    <img className="line" alt="Line" src={line_4} />
                                </div>
                        </div>
                        <div className="frame-box">
                        {!filtersearch && currentPosts.map((data, index)=>{
                            return      <div className={`ele-${index+1}`} key={index+1}>
                                            <div className="image-title">
                                                <div className="rectangle-wrapper">
                                                    <img className="rectangle" alt="Rectangle" src={data.ofimg} />
                                                </div>
                                                <div className="name-location-price">
                                                    <div className="name-location">
                                                        <div className="name">{data.ofname}</div>
                                                        <div className="location">
                                                        <img className="icon" src={icon} alt={icon}/>
                                                            <div className="text">{data.ofvendor}</div>
                                                        </div>
                                                    </div>
                                                    <div className="price">
                                                        <div className="text-wrapper-6">${(Math.round(data.ofprice * 100) / 100).toFixed(2)}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="button" value={data.ofid} onClick={() => handleOrder(data)}>
                                                <div className="text-2">Order Now</div>
                                            </button>
                                        </div>
                        })}
                        {filtersearch && currentPosts2.map((data, index)=>{
                            return      <div className={`ele-${index+1}`} key={index+1}>
                                            <div className="image-title">
                                                <div className="rectangle-wrapper">
                                                    <img className="rectangle" alt="Rectangle" src={data.ofimg} />
                                                </div>
                                                <div className="name-location-price">
                                                    <div className="name-location">
                                                        <div className="name">{data.ofname}</div>
                                                        <div className="location">
                                                        <img className="icon" src={icon} alt={icon}/>
                                                            <div className="text">{data.ofvendor}</div>
                                                        </div>
                                                    </div>
                                                    <div className="price">
                                                        <div className="text-wrapper-6">${(Math.round(data.ofprice * 100) / 100).toFixed(2)}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="button" value={data.ofid} onClick={() => handleOrder(data)}>
                                                <div className="text-2">Order Now</div>
                                            </button>
                                        </div>
                        })}
                        <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate} />
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            ) : (
                <p>It's still loading...</p>
            )}
        
        </div>
    );
};

export default FoodOrder;