import React from "react";
import "./ErrorPage.css";

function ErrorPage() {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1>Oops! Something went wrong.</h1>
        <p>We're sorry, but the page you're looking for cannot be found.</p>
      </div>
    </div>
  );
}

export default ErrorPage;
