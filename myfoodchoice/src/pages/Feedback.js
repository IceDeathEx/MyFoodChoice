import React from "react";
import NavBarUser from "./NavBarUser";
import '../css/styleHomePageNavbar.css'
const Feedback = () => {
  return (
    <div>
      <NavBarUser />
      <div>
        <h2>Feedback Page</h2>
      </div>
      <form>
        <div className="container">
          <label htmlFor="lname">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Insert title here..."
          ></input>

          <label htmlFor="Content">Content of Feedback</label>
          <textarea
            id="Content"
            name="Content"
            placeholder="Insert feedback here.."
          ></textarea>

          <input type="submit" value="Submit"></input>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
