import "./single.scss";
import React, { useState, useEffect } from "react";
import Sidebar_cit from "../../components/sidebar/Sidebar_cit";
import Navbar from "../../components/navbar/Navbar";
import inconnuImage from './inconnu.jpg';



const Single = () => {
  const [citoyen, setCitoyen] = useState(null);

  useEffect(() => {
    // Retrieve the stored Citoyen data from localStorage
    const storedCitoyen = JSON.parse(localStorage.getItem("citoyen"));

    // Check if Citoyen data exists
    if (storedCitoyen) {
      setCitoyen(storedCitoyen);
    } else {
      // If Citoyen data does not exist, redirect to login page
      // You can customize this behavior based on your requirements
      window.location.href = "/login";
    }
  }, []);
   // Adjust the dependency array based on your use case
  
   return (
    <div className="single">
    <Sidebar_cit />
    <div className="singleContainer">
      <Navbar />
      <div className="top">
        <div className="left">
          <h1 className="title">Your informations</h1>
          {citoyen && (
            <div className="item">
              <img
                src={inconnuImage}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{`${citoyen.nom} ${citoyen.prenom}`}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{citoyen.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Ville:</span>
                  <span className="itemValue">{citoyen.ville}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">CIN:</span>
                  <span className="itemValue">{citoyen.cin}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Quartier:</span>
                  <span className="itemValue">{citoyen.quartier}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
    </div>
  </div>
);
};

export default Single;