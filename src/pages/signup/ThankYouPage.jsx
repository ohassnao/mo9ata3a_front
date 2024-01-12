import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../../components/sidebar/Sidebar_cit";
import Navbar from "../../components/navbar/Navbar";
import './ThankYouPage.css'; // Import your CSS file for styling

const ThankYouPage = () => {
  return (
   <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="thank-you-container">
         <h1 className="thank-you-header">Thank you for your registration</h1>
          <p className="thank-you-message">
        Your request is currently being processed. You will be notified by email as soon as your request is accepted.
          </p>
          <Link to="/dashboard" className="back-to-home-btn">
        Come back to home page
          </Link>
         </div>
    </div>
    </div>
  );
};

export default ThankYouPage;