import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "../css/FVstyle.css";
import { NavbarVendor } from "./NavbarVendor";
import CareCalories from "../server/config/CareCalories";

const FoodVendor = () => {
  const navigate = useNavigate();
  const id = JSON.parse(window.localStorage.getItem("account"));
  const [ofname, setofname] = useState("");
  const [ofprice, setofprice] = useState("");
  const [ofid, setofid] = useState("");

  const [imageURL, setImageURL] = useState("");
  const [imagebin, setimagebin] = useState("");
  const [vendorname, setvendorname] = useState("");
  const [foodItems, setFoodItems] = useState([]);
  const [name, setname] = useState("");

  useEffect(() => {
    CareCalories.get(`/api/getVendorName1/${id}`)
      .then((response) => {
        const name = response.data[0].name;
        setname(name);

        CareCalories.get(`/api/foodItems/${name}`)
          .then((foodResponse) => {
            setFoodItems(foodResponse.data);
            console.log(foodResponse.data);
          })
          .catch((foodError) => {
            console.error("Error fetching food items: ", foodError);
          });
      })
      .catch((error) => {
        console.error("Error fetching vendor name: ", error);
      });
  }, []);

  const handleUploadImg = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      const url = URL.createObjectURL(e.target.files[0]);
      setImageURL(url);
      setimagebin(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };

  const handleChange = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if any of the required fields are blank
    if (!ofname || !ofprice || !imagebin) {
      alert("Please fill in all required fields: Food Name, Price, and choose a file.");
      return;
    } else {
      alert("Food successfully added!");
      setofname("");
      setofprice("");
      setImageURL("");
      setimagebin("");
      window.location.reload();
    }

    CareCalories.post(`/api/postfood`, {
      ofname: ofname,
      ofprice: ofprice,
      ofimg: imagebin,
      ofvendor: name,
    })
      .catch((error) => {
        // Handle the error if the post request fails
        console.error(error);
      });
  };

  const handleDelete = (ofid) => {
    CareCalories.delete(`/api/DeletefoodItems/${ofid}`)
      .then((response) => {
        alert("Food successfully deleted!");
        // Reload the page or fetch the updated list of food items
        window.location.reload();
      })
      .catch((error) => {
        // Handle the error if the delete request fails
        console.error(error);
      });
    // console.log (orderid)
  };

  return (
    <div>
      <NavbarVendor />

      <div className="food-vendor">
        <div className="div">
          <div className="text-wrapper">posted food</div>
          <div className="text-wrapper-2">post a food</div>
          <div className="frame">
            {foodItems.map((item, index) => (
              <div key={index} className="elementaaa">
                <div className="image-title">
                  <div className="rectangle-wrapper">
                    <img className="rectangle" alt="Rectangle" src={item.ofimg} />
                  </div>
                  <div className="name-location-price">
                    <div className="name-location">
                      <div className="name">{item.ofname}</div>
                    </div>
                    <div className="price">
                      <div className="text-wrapper-3">${item.ofprice}</div>
                    </div>
                  </div>
                </div>
                <button className="button" onClick={() => handleDelete(item.ofid)}>
                  <div className="text-2">Delete Now</div>
                </button>
              </div>
            ))}
          </div>
        
          <button className="div-wrapperFV" onClick={handleChange}>
            <div className="text-2">Post Food</div>
          </button>
          <div className="frame-2">
            <div className="text-3">
              <input
                type="file"
                placeholder="Choose an image."
                accept="image/*"
                onChange={handleUploadImg}
              />
            </div>

            <div className="img-wrapper">
              <img className="rectangle" src={imageURL} />
            </div>
          </div>
          <div className="frame-3">
            <div className="name-input">
              <div className="text-wrapper-5">Food Name</div>
              <input
                className="enter-username"
                type="text"
                value={ofname}
                onChange={(e) => setofname(e.target.value)}
              ></input>
            </div>
            <div className="name-input">
              <div className="text-wrapper-5">Price</div>
              <input
                className="enter-username"
                type="text"
                value={ofprice}
                onChange={(e) => setofprice(e.target.value)}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodVendor;
