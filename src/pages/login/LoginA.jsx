// SignIn.js
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import React, { useState } from 'react';
import './login.scss';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userNotFound, setUserNotFound] = useState(false);
  const navigate = useNavigate();

  const onClick = () => {
    const body = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:8080/fonctionnaire/checkFonc", body)
      .then((response) => {
        if (response.status === 200) {
          // Redirect to "/dashboard" only if the data exists
          navigate("/dashboard_fonc");
        } else {
          // If data does not exist, set userNotFound to true
          setUserNotFound(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Set userNotFound to true in case of an error (e.g., network issue)
        setUserNotFound(true);
      });
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="login1">
          <h2 className="active1">Admin Space </h2>

          <form className="form1">
            <div className="input-container1">
              <input type="text" className="text1" name="email" onChange={(e) => setEmail(e.target.value)} required />
              <span className="span1">email</span>
            </div>

            <br />

            <div className="input-container">
              <input type="password" className="text1" name="password" onChange={(e) => setPassword(e.target.value)} required/>
              <span className="span1">password</span>
            </div>
            <br />

            <div className="input-container1">
              <input type="checkbox" id="checkbox-1-1" className="custom-checkbox1" />
              <label className="label1" htmlFor="checkbox-1-1">Keep me Signed in</label>
            </div>

            {userNotFound && (
              <div className="error-message"
                style={{
                  color: 'red',
                  marginTop: '8px',
                  textAlign: 'center',
                  fontSize: '0.8em', // Adjust the font size as needed
                }}>
                User not found! Please check your credentials.
              </div>
            )}

            <button type="button" className="signin1" onClick={onClick}>
              Sign In
            </button>

            <hr className="hr1" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;