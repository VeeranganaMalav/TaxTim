import React from "react";
import HomePageImg from "../images/HomePage (600).png";
import "../css/HomePage.css";
import { useState } from "react";
const HomePage = () => {
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <div className="container">
        <div className="img-container">
          <img width="100%" src={HomePageImg} alt="homepageimg" />
          <div className="text-overlay">
            <h3>
              THE FASTEST, EASIEST WAY
              <br /> TO DO YOUR TAX RETURNS.
            </h3>
          </div>
        </div>
        <div className="form-container">
          <h2>Sign up for the easy<br/> way to do tax returns.</h2>
          <p>Sign up for free and only pay as submit your tax</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="input1"
              value={formData.input1}
              onChange={handleInputChange}
              placeholder="Name & Surname"
            />
            <input
              type="email"
              name="input2"
              value={formData.input2}
              onChange={handleInputChange}
              placeholder="Email Address"
            />
            <input
              type="number"
              name="input3"
              value={formData.input3}
              onChange={handleInputChange}
              placeholder="Contact No"
            />
            <select
              name="input4"
              value={formData.input4}
              onChange={handleInputChange}
              placeholder="Input 4"
            >
              <option value="">Type of Tax</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <button type="submit">Start My Tax Return</button>
          </form>
         <p>By submitting this form I agree to TaxTim's Terms.</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
