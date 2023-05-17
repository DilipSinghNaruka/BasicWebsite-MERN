import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./Contact.css"

function ContactUs() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

const userContact = async () => {
  try {
    const res = await fetch("/getdata", {
      method: "GET",
      headers: {
        "content-Type": "application/json",
      },
    });
    const data = await res.json();
    setUserData({...userData, name:data.name, email:data.email, phone:data.phone, });

    if (!res.status === 200) {
      const error = new Error(res.error);
      throw error;
    }
  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  userContact();
}, []);

  // const handleSubmit = (e)=>{
  //   e.prevenDefault();
  //   const ["name":value] = e.target
  // }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const contactForm = async(e) => {
    e.preventDefault();
    const {name,email,phone,message} = userData;
    const res = await fetch('/contact', {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,phone,message
      })
    })
    const data = await res.json();
    if(!data){
      console.log("message not send ");
    }else{
      alert("message send");
      setUserData({...userData, message:""})
    }
  };

  return (
    <div className="new">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h4>Address</h4>
            <p>1234 Main St, Suite 100</p>
            <p>Anytown, USA 12345</p>
          </div>
          <div className="col-sm-4">
            <h4>Phone</h4>
            <p>(123) 456-7890</p>
            <p>(987) 654-3210</p>
          </div>
          <div className="col-sm-4">
            <h4>Email</h4>
            <p>info@yourcompany.com</p>
            <p>support@yourcompany.com</p>
          </div>
        </div>
        <br />
        <form method="POST" className="contact-form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              value={userData.name}
              name="name"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              value={userData.email}
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Mobile:</label>
            <input
              type="tel"
              className="form-control"
              value={userData.phone}
              name="phone"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea
              className="form-control"
              rows="5"
              value={userData.message}
              name="message"
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={contactForm}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
