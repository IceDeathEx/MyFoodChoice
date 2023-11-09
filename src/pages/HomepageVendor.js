import React, { useState, useEffect } from "react";
import "../css/HVstyle.css";
import foodImage from "../pics/1.png";
import foodImage2 from "../pics/2.png";
import foodImage3 from "../pics/3.png";
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
              // Make an Axios GET request to fetch vendor details
              CareCalories.get(`/api/vendordetails/${id}`)
                .then((response) => {
                  const vendorname = response.data[0].vendorname;
                  setvendorname(vendorname);
                  setvendordetails(response.data);
                  // Make an Axios GET request to fetch top-selling menu items
              CareCalories.get(`/api/topSellingMenu/${response.data[0].vendorname}`)
                .then((response) => {
                  setTopSellingMenu(response.data);

                })
                .catch((error) => {
                  console.error("Error fetching top-selling menu items: ", error);
                });
               // Make an Axios GET request to fetch top-selling recipe items
              CareCalories.get(`/api/topSellingRecipe/${response.data[0].vendorname}`)
                .then((response) => {
                  setTopSellingRecipe(response.data);
                  console.log(response.data)
                })
                .catch((error) => {
                  console.error("Error fetching top-selling recipe items: ", error);
                });

              // Make an Axios GET request to fetch least selling items
              CareCalories.get(`/api/leastSellingItem/${response.data[0].vendorname}`)
                .then((response) => {
                  setleastSellingItem(response.data);

                })
                .catch((error) => {
                  console.error("Error fetching least selling items: ", error);
                });
                })
                .catch((error) => {
                  console.error("Error fetching vendor details: ", error);
                });




            }, []);
    return (
        <div className="all">
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
{topSellingMenu.sort((a, b) => b.orderCount - a.orderCount).slice(0, 6).map((topSellingMenus, index) => (
<div key={index} className="frame-4">
<div className="text-wrapper-3">{index + 1}</div>
<div className="video-card">
<div className="frame-5">
<div className="frame-6">
<img className="elementaa" alt="elementaa" src={topSellingMenus.ofimg} />
</div>
<div className="title">
<div className="text-wrapper-4">{topSellingMenus.transitemname}</div>
<div className="info">
<div className="component">
<div className="text-wrapper-5">{topSellingMenus.totalqty}</div>
</div>
</div>
</div>
</div>
</div>
</div>
))}

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
<div className="text-wrapper-4">KFC Chicken Rice</div>
<div className="info">
<div className="component">
<div className="text-wrapper-5">5</div>
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
<img className="elementaa" alt="elementaa" src={foodImage2} />
</div>
<div className="title">
<div className="text-wrapper-4">Chicken Bucket</div>
<div className="info">
<div className="component">
<div className="text-wrapper-5">2</div>
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
<img className="elementaa" alt="elementaa" src={foodImage3} />
</div>
<div className="title">
<div className="text-wrapper-4">Curry Chicken Rice</div>
<div className="info">
<div className="component">
<div className="text-wrapper-5">1</div>
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
{leastSellingItem.sort((a, b) => b.orderCount - a.orderCount).slice(0, 6).map((leastSellingItems, index) => (
<div key={index} className="frame-9">
<div className="text-wrapper-8">{index + 1}</div>
<div className="video-card">
<div className="frame-5">
<div className="frame-6">
<img className="elementaa" alt="elementaa" src={leastSellingItems.ofimg} />
</div>
<div className="title">
<div className="text-wrapper-4">{leastSellingItems.transitemname}</div>
<div className="info">
<div className="component">
<div className="text-wrapper-5">{leastSellingItems.totalqty}</div>
</div>
</div>
</div>
</div>
</div>
</div>
))}

</div>
</div>
</div>
</div>
</div>
</div>
    );
};

export default HomepageVendor;