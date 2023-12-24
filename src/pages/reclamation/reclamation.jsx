import React, { useState, useEffect } from 'react';
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const ReclamationPage = () => {
  const [sujet, setSujet] = useState('');
  const [description, setDescription] = useState('');
  const [citoyen, setCitoyen] = useState(JSON.parse(localStorage.getItem("citoyen")));
  useEffect(()=>{
    setCitoyen(JSON.parse(localStorage.getItem("citoyen")));
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id_citoyen = citoyen.id_user;
    console.log(id_citoyen);
    try {
      const response = await fetch('http://localhost:8080/demande-reclam/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          objet: sujet, // Store sujet in objet field
          body: description,
          id_citoyen: id_citoyen,
           // Store description in body field
          // Other fields of your entity if needed
        }),
      });
  
      if (response.ok) {
        // Logic if successful (e.g., show success message, redirect, etc.)
        console.log('Reclamation submitted successfully!');
        setSujet('');
        setDescription('');
      } else {
        // Handle error if needed
        console.error('Failed to submit reclamation.');
      }
    } catch (error) {
      console.error('Error submitting reclamation:', error);
    }
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="navbar-container">
          <div className="page-container">
        <Card className="form-card1">
          <CardContent>
            <form onSubmit={handleSubmit} className="form1">
              <div className='div1'>
                <h2 className="active1">Formulaire de Réclamation</h2>
                <label className="label2" htmlFor="Sujet">Sujet :</label>
                <input
                  type="text"
                  id="sujet"
                  value={sujet}
                  onChange={(e) => setSujet(e.target.value)}
                  required
                  className='input1'
                />
              </div>
              <div className='div1'>
                <label className="label2" htmlFor="description">Description du Problème :</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className='input1'
                />
              </div>
              <div className='div1'>
                <button className="button1" type="submit">Send</button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      </div>
      </div>
    </div>
  );
};

export default ReclamationPage;