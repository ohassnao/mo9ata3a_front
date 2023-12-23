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
// ... (other imports and code)

const List = () => {
  const [demandes, setDemandes] = useState([]);

  useEffect(() => {
    loadDemandes();
  }, []);

  const loadDemandes = () => {
    axios.get("http://localhost:8080/pdf/all")
      .then(response => {
        setDemandes(response.data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
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
              {/* Use conditional rendering */}
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