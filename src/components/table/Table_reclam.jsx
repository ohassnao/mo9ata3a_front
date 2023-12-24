import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { useHistory, useNavigate } from 'react-router-dom';

// ... (other imports and code)

const List = () => {
    // const history = useHistory();
    // const handleRedirect = (id) => {
    //     history.push(`/reclamation_repondre/${id}`);
    //   };
    const [demandes, setDemandes] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      loadDemandes();
    }, []);
  
    const loadDemandes = () => {
      axios.get("http://localhost:8080/demande-reclam/all")
        .then(response => {
          setDemandes(response.data);
        })
        .catch(error => {
          console.error("Error:", error);
        });
    };

    const handleAccept = async (demande) => {

      // Assuming you have the id_citoyen available from the demande object
      // Replace 'YOUR_TARGET_PAGE_PATH' with the actual path you want to navigate to
      const targetPage = `/reponse?citoyen=${demande.id_user}`;
  
      // Use navigate to go to the target page
      navigate(targetPage);

  
      console.log('Navigating to:', targetPage);
  
    };

  
    return (
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Nom</TableCell>
              <TableCell className="tableCell">Prenom</TableCell>
              <TableCell className="tableCell">Objet</TableCell>
              <TableCell className="tableCell">Reclamation</TableCell>
              <TableCell className="tableCell">Accepter</TableCell>
              <TableCell className="tableCell">Refuser</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
  {demandes.map((demande, index) => {
    console.log("Current demande:", demande);
    return (
      <TableRow key={index}>
        {/* Check if citoyen exists before rendering */}
        {demande.citoyen ? (
          <>
            <TableCell className="tableCell">{demande.citoyen.nom}</TableCell>
            <TableCell className="tableCell">{demande.citoyen.prenom}</TableCell>
          </>
        ) : (
          <>
            <TableCell className="tableCell">N/A</TableCell>
            <TableCell className="tableCell">N/A</TableCell>
          </>
        )}
        {/* Display objet and body */}
        <TableCell className="tableCell">{demande.objet}</TableCell>
        <TableCell className="tableCell">{demande.body}</TableCell>
        {/* <TableCell className="tableCell">
            <a href={`/repondre_reclamation/${demande.id_Demande}`}>Repondre</a>
        </TableCell> */}
        <TableCell className="tableCell">
          <Button onClick={() => handleAccept(demande.citoyen)}>Accept</Button>
        </TableCell>
        <TableCell className="tableCell">
          <Buttonred onClick={() => handleRefuse(demande.id_Demande)}>Refuse</Buttonred>
        </TableCell>
      </TableRow>
    );
  })}
</TableBody>

        </Table>
      </TableContainer>
    );
  };
  
  export default List;

  const Buttonred = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : "#ff2045")};
  background-color: ${(props) => (props.border ? "transparent" : "#ff2045")};
  width: 50%;
  padding: 5px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;
  border-radius: 8px;
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#580cd2")};
    border-color: #7620ff;
    color: ${(props) => (props.border ? "#7620ff" : "#fff")};
  }
`;
const Button = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : "#20c4ff")};
  background-color: ${(props) => (props.border ? "transparent" : "#20c4ff")};
  width: 100%;
  padding: 5px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;
  border-radius: 8px;
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#580cd2")};
    border-color: #7620ff;
    color: ${(props) => (props.border ? "#7620ff" : "#fff")};
  }
  `;
  const handleRefuse = async (id) => {
    try {
      const confirmed = window.confirm('Are you sure you want to refuse this request?');
  
      if (confirmed) {
        // Logic to handle refuse action
        console.log('Refuse request with ID:', id);
        // Fetch the specific request information
        const response = await axios.get(`http://localhost:8080/demande-reclam/getById/${id}`);
        const requestData1 = response.data;
  
        // Save the request information to the user using /user/save endpoint
        await axios.post('http://localhost:8080/refuse-reclamation', requestData1);
        await axios.delete(`http://localhost:8080/demande-reclam/delete/${id}`);
  
        window.location.reload();
  
        console.log('Request refused and saved successfully!');
      } else {
        console.log('Request refusal canceled by the user.');
      }
    } catch (error) {
      console.error('Error refusing request:', error);
    }
  };


 