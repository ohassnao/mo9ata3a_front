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


const List = () => {
  const [demandes, setDemandes] = useState([]);
  const [citoyen, setCitoyen] = useState(JSON.parse(localStorage.getItem("citoyen")));
  console.log(demandes);  
  useEffect(() => {
    setCitoyen(JSON.parse(localStorage.getItem("citoyen")));
  }, []);

  useEffect(() => {
    loadDemandes();
  }, [citoyen]); // Add citoyen as a dependency so that the effect runs when citoyen changes

  const loadDemandes = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/pdf/allById/${citoyen.id_user}`);
      setDemandes(response.data);
      
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDownloadPdf = async (fileName) => {
    try {
      // Make a GET request to download the PDF
      const response = await axios.get(`http://localhost:8080/pdf/download/${fileName}`, {
        responseType: 'arraybuffer',
      });
  
      // Create a Blob from the response data
      const blob = new Blob([response.data], { type: 'application/pdf' });
  
      // Create a link element
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
  
      // Append the link to the body
      document.body.appendChild(link);
  
      // Trigger a click event on the link to start the download
      link.click();
  
      // Remove the link from the body after the download
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  }; 


  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Nom du document</TableCell>
            <TableCell className="tableCell">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {demandes
  .filter(demande => demande.reasons == null)
  .map((demande, index) => (
    <TableRow key={index}>
      <TableCell className="tableCell">{demande.name}</TableCell>
      <TableCell className="tableCell">
        <Buttonred onClick={() => handleDownloadPdf(demande.name)}>
          Download PDF
        </Buttonred>
      </TableCell>
    </TableRow>
  ))}
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