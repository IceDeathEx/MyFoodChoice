import React, {useEffect, useState} from "react";
import "../css/FoodOrderstyle.css";
import icon from '../pics/Icon.png';
import NavBarUser from "./NavBarUser";
import Axios from "axios";
import line_4 from "../pics/Line_4.svg"
import Pagination from "./Pagination"
import { useParams } from "react-router";

const FoodOrder = () => {

    //Array to store the api details
    const [orderfood, setorderfood] = useState([])
    const [orderfood2, setorderfood2] = useState([])
    const [filterdata, setfilterdata] = useState([])

    //Declare search conditions and filter conditions
    const [filter1, setfilter1] = useState('')
    const [filter2, setfilter2] = useState('')

    //Redirecting to different page
    const id = useParams() // This is the id passed from previous page.
    
    
    //Load Page
    const [isLoading, setIsLoading] = useState(false)
    const [currentPosts2, setCurrentPosts2] = useState([])
    const [filtersearch, setfiltersearch] = useState(false)

    //Use useEffect to load initial rendering
    useEffect(()=>{
        Axios.get("http://localhost:3002/api/getorderfood")
        .then((res)=>{
            setorderfood(res.data)
            setorderfood2(res.data)
            const unique = [...new Set(res.data.map((item) => item.ofname))]
            setfilterdata(unique)
            setCurrentPosts(res.data.slice(indexOfFirstPost, indexOfLastPost))
            setIsLoading(true)
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
        }
        else{
            setfiltersearch(false)
            setCurrentPosts(orderfood2.filter((data)=> data.ofname === e.target.value).slice(indexOfFirstPost, indexOfLastPost))
        }
    }

    //Pagination
    const [currentPage, setCurrentPage] = useState(id.id)
    const [postsPerPage] = useState(12);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const [currentPosts, setCurrentPosts] = useState([])
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const[order, setorder] = useState([])

    //Handle The order by storing it in database
    const handleOrder = (e) => {
        setorder(orderfood2.filter((data)=> data.ofid === e.target.value))
        //Axios.post()
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
                        <div className="frame-3">
                        {!filtersearch && currentPosts.map((data, index)=>{
                            return      <div className={`element-${index+1}`} key={index+1}>
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
                                            <button className="button" value={data.ofid} onClick={handleOrder}>
                                                <div className="text-2">Order Now</div>
                                            </button>
                                        </div>
                        })}
                        {filtersearch && currentPosts2.map((data, index)=>{
                            return      <div className={`element-${index+1}`} key={index+1}>
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
                                            <button className="button">
                                                <div className="text-2">Order Now</div>
                                            </button>
                                        </div>
                        })}
                        <Pagination postsPerPage={postsPerPage} totalPosts={orderfood.length} paginate={paginate} />
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