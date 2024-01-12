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
  const [fonctionnaire, setFonctionnaire] = useState(JSON.parse(localStorage.getItem("fonctionnaire")));

  useEffect(() => {
    setFonctionnaire(JSON.parse(localStorage.getItem("fonctionnaire")));
  }, []);

  useEffect(() => {
    loadDemandes();
  }, [fonctionnaire]); // Add citoyen as a dependency so that the effect runs when citoyen changes

  const loadDemandes = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/pdf/all`);
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

  const handleUploadPdf = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/pdf/get/${id}`);
      const requestData = response.data;
      console.log(requestData.id_citoyen);
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".pdf";

      // Trigger the file input dialog
      fileInput.click();

      // Handle file selection
      fileInput.addEventListener("change", async (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
          
          const formData = new FormData();
          formData.append("pdfh", selectedFile);
          formData.append("id_citoyen", requestData.id_citoyen.id_user);
          formData.append("id_fonctionnaire", fonctionnaire.id_user);
            console.log(selectedFile);
          // Replace the API endpoint with your actual upload endpoint
          await axios.post("http://localhost:8080/pdf/upload2", formData);

          console.log("File uploaded successfully!");
        }
      });
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Nom </TableCell>
            <TableCell className="tableCell">Prenom </TableCell>
            <TableCell className="tableCell">Nom du document</TableCell>
            <TableCell className="tableCell">Raison</TableCell>
            <TableCell className="tableCell">Type du document</TableCell>
            <TableCell className="tableCell">Download</TableCell>
            <TableCell className="tableCell">Upload</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {demandes
  .filter(demande => demande.name !== null && demande.name !== undefined)
  .map((demande, index) => (
    <TableRow key={index}>
      <TableCell className="tableCell">{demande.id_citoyen.nom}</TableCell>
      <TableCell className="tableCell">{demande.id_citoyen.prenom}</TableCell>
      <TableCell className="tableCell">{demande.name}</TableCell>
      <TableCell className="tableCell">{demande.reasons}</TableCell>
      <TableCell className="tableCell">{demande.documentType}</TableCell>
      <TableCell className="tableCell">
        <Buttonred onClick={() => handleDownloadPdf(demande.name)}>Download</Buttonred>
        </TableCell>

        <TableCell className="tableCell">

        <Button onClick={() => handleUploadPdf(demande.id)}>Upload</Button>
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
width: 70%;
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
width: 70%;
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