import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

function LoginPage() {
  const {state,dispatch} = useContext(UserContext)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(`Email: ${email}\nPassword: ${password}`);
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Do something with the form data
    const { email, password } = formData;
    // console.log(formData);
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // formData,
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log(data);
    if (
      data.error === "Fill the all columns" ||
      data.error === "email or password is not same"
    ) {
      window.alert("invalid Registration");
    } else {
      dispatch({type:"USER", payload:true})
      window.alert("Registration Successfull");
      navigate("/");
    }
  };

  return (
    <section>
      <div className="box">
        <div className="form">
          <h2>LOGIN</h2>

          <form>
            <div className="inputBx">
              <input
                type="email"
                name="email"
                placeholder="Username"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            1
            <div className="inputBx">
              <input
                type="password"
                name="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <label className="remeber">
              <input type="checkbox" required />
              Remember Me
            </label>
            <div className="inputBx">
              <input
                type="submit"
                className="signupbutton"
                value="Login"
                onClick={handleSubmit}
              />
            </div>
          </form>

          <h2>Create an Account</h2>
          {/* <div className="inputBx">
            <form action="" method="post">
              <input type="submit" value="SIGN UP" />
            </form>
          </div> */}
          <div className="inputBx">
            <Link to="/signup">
              <input type="button" className="signupbutton" value="SIGN UP" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
