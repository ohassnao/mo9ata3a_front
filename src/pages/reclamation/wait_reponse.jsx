import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar_cit from "../../components/sidebar/Sidebar_cit";
import Navbar from "../../components/navbar/Navbar";
import './wait_r.css'; // Import your CSS file for styling


const Wait = () => {
  return (
    <div className="home">
      <Sidebar_cit />
      <div className="homeContainer">
        <Navbar />
        <div className="thank-you-container">
          <h1 className="thank-you-header">We appreciate your submission !</h1>
          <p className="thank-you-message">
            Your complaint is currently being processed. Please anticipate a response via email in the coming days.
          </p>
          <div className="button-container">
            <Link to="/dashboard_citoyen" className="back-to-home-btn">
              Come back to home page
            </Link>
            <Link to="/reclamation_citoyen" className="reclamation-btn">
              Make another complaint
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wait;