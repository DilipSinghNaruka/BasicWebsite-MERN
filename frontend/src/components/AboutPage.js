import React, { useEffect, useState } from "react";
import "./About.css";
// import avatar from "./image/avatar.jpg";
import { useNavigate } from "react-router-dom";

function AboutPage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          accept: "application/json",
          "content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
       setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);

      navigate("/signin");
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-details">
        <div className="profile-id">
          <span>Id:</span> {userData._id}
        </div>
        <div className="profile-name">
          <span>Name:</span> {userData.name}
        </div>
        <div className="profile-email">
          <span>Email:</span> {userData.email}
        </div>
        <div className="profile-work">
          <span>Work:</span> {userData.work}
        </div>
        <div className="profile-number">
          <span>Phone:</span> {userData.phone}
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2023 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AboutPage;
