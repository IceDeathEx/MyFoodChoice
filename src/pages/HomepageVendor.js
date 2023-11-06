import React, { useState, useEffect } from "react";
import "../css/HVstyle.css";
import foodImage from "../pics/1.png";
import logoImage from "../pics/kfc.png";
import { NavbarVendor } from "./NavbarVendor";
import CareCalories from "../server/config/CareCalories";

//Declare Global array var to store vendorid
//UseEffect to get the vendorname from table user by id
//Declare another global variable to store vendor name
//Another useEffect to get rest of the columns, quantity, price by vendorname

const HomepageVendor = () => {
     const id = JSON.parse(window.localStorage.getItem("account"));
     const [topSellingMenu, setTopSellingMenu] = useState([]);
     const [topSellingRecipe, setTopSellingRecipe] = useState([]);
     const [leastSellingItem, setleastSellingItem] = useState([]);
     const [vendorname, setvendorname] = useState(""); // State to store vendor name
     const [vendordetails, setvendordetails] = useState([]);
      useEffect(() => {
        // Make an Axios GET request to fetch top-selling items for each category
        CareCalories.get(`/api/topSellingMenu/${id}`)
            .then((response) => {
                setvendorname(response.data)
                CareCalories.get(`/api/topSellingRecipe/${id}`). then((response) => {
                    setTopSellingRecipe(response.data)
                })
                CareCalories.get(`/api/topSellingMenu/${id}`). then((response) => {
                    setTopSellingRecipe(response.data)
                })
                CareCalories.get(`/api/vendordetails/${id}`). then((response) => {
                    setvendordetails(response.data)
                })
                setTopSellingMenu(response.data); // Assuming the response contains top-selling data
            })
            .catch((error) => {
                console.error("Error fetching top-selling items: ", error);
            });

        CareCalories.get(`/api/topSellingRecipe/${id}`)
            .then((response) => {
                setTopSellingRecipe(response.data); // Assuming the response contains top-selling data
            })
            .catch((error) => {
                console.error("Error fetching top-selling items: ", error);
            });

        CareCalories.get(`/api/leastSellingItem/${id}`)
            .then((response) => {
                setleastSellingItem(response.data); // Assuming the response contains top-selling data
            })
            .catch((error) => {
                console.error("Error fetching top-selling items: ", error);
            });
    }, []);
    return (
        <div>
        <NavbarVendor/>


        <div className="homepage-vendor">
        <div className="div">
<div className="group">

<p className="hi-KFC">
  <span className="text-wrapper">
    Hi,
    <br />
  </span>
  {vendordetails.map((item, index) => (
    <span className="span" key={index}>
      {item.vendorname}
      <img
        className="kfc"
        src={item.vendorimg}
      />
    </span>
  ))}
</p>
          </div>
<div className="aframe">
<div className="aframe-2">
<div className="text-wrapper-2">Top Selling Menu</div>
<div className="frame-3">
<div className="frame-4">
<div className="text-wrapper-3">1</div>
<div className="video-card">
<div className="frame-5">
<div className="frame-6">
<img className="elementaa" alt="elementaa" src={foodImage} />
</div>
<div className="title">
<div className="text-wrapper-4">Food 1</div>
<div className="info">
<div className="component">
<div className="text-wrapper-5">191 Orders</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="frame-4">
<div className="text-wrapper-3">2</div>
<div className="video-card">
<div className="frame-5">
<div className="frame-6">
<div className="img-square">
<img className="img" alt="elementaa" src={foodImage} />
</div>
</div>
<div className="title">
<div className="text-wrapper-4">Food 1</div>
<div className="info">
<div className="component">
<div className="text-wrapper-5">191 Orders</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="frame-4">
<div className="text-wrapper-3">3</div>
<div className="video-card">
<div className="frame-5">
<div className="frame-6">
<img className="elementaa" alt="elementaa" src={foodImage}/>
</div>
<div className="title">
<div className="text-wrapper-4">Food 1</div>
<div className="info">
<div className="component">
<div className="text-wrapper-5">191 Orders</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="frame-4">
<div className="text-wrapper-6">4</div>
<div className="video-card">
<div className="frame-5">
<div className="frame-6">
<div className="img-square">
<img className="img" alt="elementaa" src={foodImage} />
</div>
</div>
<div className="title">
<div className="text-wrapper-4">Food 1</div>
<div className="info">
<div className="component">
<div className="text-wrapper-5">191 Orders</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="frame-4">
<div className="text-wrapper-6">5</div>
<div className="video-card">
<div className="frame-5">
<div className="frame-6">
<div className="img-square">
<img className="img" alt="elementaa" src={foodImage} />
</div>
</div>
<div className="title">
<div className="text-wrapper-4">Food 1</div>
<div className="info">
<div className="component">
<div className="text-wrapper-5">191 Orders</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="frame-4">
<div className="text-wrapper-6">6</div>
<div className="video-card">
<div className="frame-5">
<div className="frame-6">
<div className="img-square">
<img className="img" alt="elementaa" src={foodImage} />
</div>
</div>
<div className="title">
<div className="text-wrapper-4">Food 1</div>
<div className="info">
<div className="component">
<div className="text-wrapper-5">191 Orders</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="aframe-2">
<div className="text-wrapper-2">Top Selling Recipe</div>
<div className="frame-3">
<div className="frame-4">
<div className="text-wrapper-3">1</div>
<div className="video-card">
<div className="frame-5">
<div className="frame-6">
<img className="elementaa" alt="elementaa" src={foodImage} />
</div>
<div className="title">
<div className="text-wrapper-4">Food 1</div>
<div className="info">
<div className="component">
<div className="text-wrapper-5">191 Orders</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="frame-4">
<div className="text-wrapper-3">2</div>
<div className="video-card">
<div className="frame-5">
<div className="frame-6">
<div className="img-square">
<img className="img" alt="elementaa" src={foodImage} />
</div>
</div>
<div className="title">
<div className="text-wrapper-4">Food 1</div>
<div className="info">
<div className="component">
<div className="text-wrapper-5">191 Orders</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="frame-4">
<div className="text-wrapper-3">3</div>
<div className="video-card">
<div className="frame-5">
<div className="frame-6">
<img className="elementaa" alt="elementaa" src={foodImage} />
</div>
<div className="title">
<div className="text-wrapper-4">Food 1</div>
<div className="info">
<div className="component">
<div className="text-wrapper-5">191 Orders</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="frame-4">
<div className="text-wrapper-6">4</div>
<div className="video-card">
<div className="frame-5">
<div className="frame-6">
<div className="img-square">
<img className="img" alt="elementaa" src={foodImage} />
</div>
</div>
<div className="title">
<div className="text-wrapper-4">Food 1</div>
<div className="info">
<div className="component">
<div className="text-wrapper-5">191 Orders</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="frame-4">
<div className="text-wrapper-6">5</div>
<div className="video-card">
<div className="frame-5">
<div className="frame-6">
<div className="img-square">
<img className="img" alt="elementaa" src={foodImage} />
</div>
</div>
<div className="title">
<div className="text-wrapper-4">Food 1</div>
<div className="info">
<div className="component">
<div className="text-wrapper-5">191 Orders</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="frame-4">
<div className="text-wrapper-6">6</div>
<div className="video-card">
<div className="frame-5">
<div className="frame-6">
<div className="img-square">
<img className="img" alt="elementaa" src={foodImage} />
</div>
</div>
<div className="title">
<div className="text-wrapper-4">Food 1</div>
<div className="info">
<div className="component">
<div className="text-wrapper-5">191 Orders</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="cframe-7">
<div className="text-wrapper-7">Least Selling Items</div>
<div className="frame-8">
<div className="frame-9">
<div className="text-wrapper-8">70</div>
<div className="video-card">
<div className="frame-5">
<div className="frame-6">
<img className="elementaa" alt="elementaa" src={foodImage} />
</div>
<div className="title">
<div className="text-wrapper-4">Food 1</div>
<div className="info">
<div className="component">
<div className="text-wrapper-5">191 Orders</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="frame-9">
<div className="text-wrapper-8">69</div>
<div className="video-card">
<div className="frame-5">
<div className="frame-6">
<div className="img-square">
<img className="img" alt="elementaa" src={foodImage} />
</div>
</div>
<div className="title">
<div className="text-wrapper-4">Food 1</div>
<div className="info">
<div className="component">
<div className="text-wrapper-5">191 Orders</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="frame-9">
<div className="text-wrapper-8">68</div>
<div className="video-card">
<div className="frame-5">
<div className="frame-6">
<img className="elementaa" alt="elementaa" src={foodImage} />
</div>
<div className="title">
<div className="text-wrapper-4">Food 1</div>
<div className="info">
<div className="component">
<div className="text-wrapper-5">191 Orders</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="frame-9">
<div className="text-wrapper-6">67</div>
<div className="video-card">
<div className="frame-5">
<div className="frame-6">
<div className="img-square">
<img className="img" alt="elementaa" src={foodImage}/>
</div>
</div>
<div className="title">
<div className="text-wrapper-4">Food 1</div>
<div className="info">
<div className="component">
<div className="text-wrapper-5">191 Orders</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="frame-9">
<div className="text-wrapper-6">66</div>
<div className="video-card">
<div className="frame-5">
<div className="frame-6">
<div className="img-square">
<img className="img" alt="elementaa" src={foodImage} />
</div>
</div>
<div className="title">
<div className="text-wrapper-4">Food 1</div>
<div className="info">
<div className="component">
<div className="text-wrapper-5">191 Orders</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="frame-9">
<div className="text-wrapper-6">65</div>
<div className="video-card">
<div className="frame-5">
<div className="frame-6">
<div className="img-square">
<img className="img" alt="elementaa" src={foodImage}/>
</div>
</div>
<div className="title">
<div className="text-wrapper-4">Food 1</div>
<div className="info">
<div className="component">
<div className="text-wrapper-5">191 Orders</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
    );
};

export default HomepageVendor;