import Sidebar_fonc from "../../components/sidebar/Sidebar_fonc";
import Navbar_fonc from "../../components/navbar/Navbar_fonc";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const Reponse = () => {

  const [citizenEmail, setCitizenEmail] = useState('');
  console.log("hhhh",citizenEmail);
  const [subject, setSubject] = useState('');
  console.log(subject);
  
  const [body, setBody] = useState('');
  console.log(body);


  const url = new URL(window.location.href);
  const id = url.searchParams.get("citoyen");
  console.log("id" ,id);
  

  

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/user/findbyid/${id}`); // Adjust the endpoint accordingly
        const userData = response.data;
        console.log(userData);
        
        if (userData && userData.email) {
          setCitizenEmail(userData.email);
        }
      } catch (error) {
        console.error("Error fetching user's email:", error);
      }
    };
    

    if (id) {
      fetchUserEmail();
    }
  }, [id]);

const handleAccept = () => {
  const send = {
    to: citizenEmail, // Ensure citizenEmail has the recipient's email
    subject: subject,
    message: body,
  };

  axios.post('http://localhost:8080/email/send-reclamation-response', null, {
    params: send,
  }).then((res) => {
    console.log("email sent success");
  }).catch((error) => {
    // Handle any errors here
  });
};

  



    return (
        <div className="home">
            <Sidebar_fonc />
            <div className="homeContainer">
                <Navbar_fonc />

                <div className="navbar-container">
          <div className="page-container">
        <Card className="form-card1">
          <CardContent>
            <div className="form1">
              <div className='div1'>
                <h2 className="active1">The response to the reclamation</h2>
                <label className="label2" htmlFor="Sujet">Subjet :</label>
                <input
                  type="text"
                  id="sujet"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)} 
                  required
                  className='input1'
                />
              </div>
              <div className='div1'>
                <label className="label2" htmlFor="description">The content of the response :</label>
                <textarea
                  id="description"
                  value={body} 
                  onChange={(e) => setBody(e.target.value)} 
                  required
                  className='input1'
                />
              </div>
              <div className='div1'>
                <Link to="/dashboard_fonc">
                <button className="button1" onClick={handleAccept}>Send</button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      </div>


                
                
            </div>
        </div>
    );
};

export default Reponse;