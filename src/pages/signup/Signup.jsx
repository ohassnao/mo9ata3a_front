import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";  // Import useNavigate
import axios from "axios";
import "./signup.scss"
const Signup = () => {
  const navigate = useNavigate();  // Use useNavigate instead of useHistory

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    cin: "",
    ville: "",
    quartier:"",
    rue:"",
    username: "",
    email: "",
    password: "",
    agreedToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/demande_inscri/save", formData);

      if (response.status === 200) {
        // Handle success
        console.log("User registered successfully!");
        navigate("/typage");  // Use navigate instead of history.push
      } else {
        // Handle failure
        console.error("Registration failed");
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Network error. Please try again.");
    }
  };

  const validateForm = () => {
    const requiredFields = ["nom", "prenom", "cin", "ville", "username", "password"];

    for (const field of requiredFields) {
      if (!formData[field]) {
        setError(`Please fill in the ${field} field`);
        return false;
      }
    }

    setError(""); // Clear the error if all fields are filled
    return true;
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="login2">
          <h2 className="active2">Registration </h2>

          <form className="form2" onSubmit={handleSubmit}>
            <div className="grid-container">
              <div className="input-container2">
                <input type="text" className="text2" name="nom" value={formData.nom} onChange={handleChange} required />
                <span className="span2">Last name</span>
              </div>

              <div className="input-container2">
                <input type="text" className="text2" name="prenom" value={formData.prenom} onChange={handleChange} required />
                <span className="span2">First name</span>
              </div>

              <div className="input-container2">
                <input type="text" className="text2" name="cin" value={formData.cin} onChange={handleChange} required/>
                <span className="span2">CIN</span>
              </div>

              <div className="input-container2">
                <input type="text" className="text2" name="ville" value={formData.ville} onChange={handleChange} required />
                <span className="span2">Ville</span>
              </div>
              <div className="input-container2">
                <input type="text" className="text2" name="quartier" value={formData.quartier} onChange={handleChange} required />
                <span className="span2">Quartier</span>
              </div>
              <div className="input-container2">
                <input type="email" className="text2" name="email" value={formData.email} onChange={handleChange} required />
                <span className="span2">Email</span>
              </div>

              <div className="input-container2">
                <input type="text" className="text2" name="username" value={formData.username} onChange={handleChange} required />
                <span className="span2">Username</span>
              </div>

              <div className="input-container2">
                <input type="password" className="text2" name="password" value={formData.password} onChange={handleChange} required />
                <span className="span2">Password</span>
              </div>
            </div>

            <button className="signin2" type="submit">
              Sign Up
            </button>

            {error && (
              <div className="error-message" style={{ color: 'red', marginTop: '8px', textAlign: 'center' }}>
                {error}
              </div>
            )}
            <hr className="hr2" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;