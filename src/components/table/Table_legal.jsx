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

const List = () => {
  const [demandes, setDemandes] = useState([]);
  const [citoyen, setCitoyen] = useState(JSON.parse(localStorage.getItem("citoyen")));

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

  const handleDownloadPdf = (pdfData) => {
    // Add logic to download the PDF using the pdfData
    console.log("Downloading PDF:", pdfData);
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
          {demandes.map((demande, index) => (
            <TableRow key={index}>
              <TableCell className="tableCell">{demande.name}</TableCell>
              <TableCell className="tableCell">
                {demande.pdfdataegal ? (
                  <button onClick={() => handleDownloadPdf(demande.pdfdataegal)}>
                    Download PDF
                  </button>
                ) : (
                  "En cours de traitement"
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;