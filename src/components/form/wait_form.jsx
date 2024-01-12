import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar_cit from "../../components/sidebar/Sidebar_cit";
import Navbar from "../../components/navbar/Navbar";
import './wait_f.css'; // Import your CSS file for styling

const Wait = () => {
  return (
    <div className="home">
      <Sidebar_cit />
      <div className="homeContainer">
        <Navbar />
        <div className="thank-you-container">
          <h1 className="thank-you-header">Request under processing...</h1>
          <p className="thank-you-message">
          Your document is currently being processed. Please await the legalization outcome, which will be provided to you in due course.
          </p>
          <div className="button-container">
            <Link to="/dashboard_citoyen" className="back-to-home-btn">
              Come back to home page
            </Link>
            <Link to="/formulaire" className="reclamation-btn">
            Requesting another legalization
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wait;