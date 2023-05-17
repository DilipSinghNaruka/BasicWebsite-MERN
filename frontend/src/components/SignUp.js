import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import "./SignUp.css";



// in this i spend my 8 hour just bcz of an error error is 
////localhost:8080/register 422 (Unprocessable Entity) 
// fist i try and add proxy in react json file 
// the orignal solution is my frind name section of each input is not same to backend just like i am fill here name = mobile and in backend i feel phone that why i confused here 

function SignUp() {
  const navigate = useNavigate();
  // here we are using usestate like this bcz he is given error ->tp://localhost:8080/register 422 (Unprocessable Entity) so its solution is down

  // const [formData, setFormData] = useState({
  //   name: "",
  //   work: "",
  //   email: "",
  //   mobile: "",
  //   password: "",
  //   cpassword: "",
  // });

  const [formData, setFormData] = useState({
    name: "",
    work: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  // here we are using fetch api

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Do something with the form data
    const { name, work, email, phone, password, cpassword } = formData;
    // console.log(formData);
    const res = await fetch("http://127.0.0.1:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // formData,
        name,
        email,
        work,
        phone,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    console.log(data);
    if (
      data.error === "Fill All Input Columns" ||
      data.error === "Password and Cpassword is not matched"
    ) {
      window.alert(" invalid Registration ");
    } else {
      window.alert("Registration Successfull");
      navigate("/signin");
    }
  };

  // here we are using axios to send data in backend
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8080/register",
  //       formData
  //     );

  //     console.log(response.data);
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (e) {
  //     console.log(e);
  //   }

  // const data = await response.json();

  //   if (data.status === 401 || !data  ) {
  //     window.alert("Invalid Registration");

  //   } else {
  //      window.alert("Registration Successful");
  //      navigate("/login");

  //   }
  // } catch (error) {
  //   console.log(error);
  //   window.alert("Registration Failed");
  // }
  // };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <section>
      <div className="box">
        <div className="form">
          <h2>SIGN-UP</h2>

          <form>
            <div className="inputBx">
              <input
                type="text"
                name="name"
                placeholder="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="inputBx">
              <input
                type="text"
                name="work"
                placeholder="work"
                value={formData.work}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="inputBx">
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="inputBx">
              <input
                type="number"
                name="phone"
                placeholder="Mob Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="inputBx">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="inputBx">
              <input
                type="password"
                name="cpassword"
                placeholder="Confirm Password"
                value={formData.cpassword}
                onChange={handleInputChange}
                required
              />
            </div>

            <label className="remember">
              <input type="checkbox" required />
              Accept It
            </label>

            <div className="inputBx">
              <input type="submit" value="SIGN-UP" onClick={handleSubmit} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
