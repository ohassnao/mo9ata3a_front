import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from 'axios';
import styled from "styled-components";

//temporary data
const response = await fetch('http://localhost:8080/demande_inscri/getall');
const data = await response.json();
let rows = [];
rows = [...data];
const List = () => {
    


    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Date du demande</TableCell>
                        <TableCell className="tableCell">Nom</TableCell>
                        <TableCell className="tableCell">Prenom</TableCell>
                        <TableCell className="tableCell">CIN</TableCell>
                        <TableCell className="tableCell">EMAIL</TableCell>
                        <TableCell className="tableCell">USERNAME</TableCell>
                        <TableCell className="tableCell">PASSWORD</TableCell>
                        <TableCell className="tableCell">Code Confidentiel  </TableCell>
                        <TableCell className="tableCell">accepter  </TableCell>
                        <TableCell className="tableCell">refuser  </TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="tableCell">{row.date}</TableCell>
                            <TableCell className="tableCell">{row.nom}</TableCell>
                            <TableCell className="tableCell">{row.prenom}</TableCell>
                            <TableCell className="tableCell">{row.cin}</TableCell>
                            <TableCell className="tableCell">{row.email}</TableCell>
                            <TableCell className="tableCell">{row.username}</TableCell>
                            <TableCell className="tableCell">{row.password}</TableCell>
                            <TableCell className="tableCell">{row.code_conf}</TableCell>
                            <TableCell className="tableCell"><Button onClick={() => handleAccept(row.id_Demande)}>Accept</Button></TableCell>
                            <TableCell className="tableCell"><Buttonred onClick={() => handleRefuse(row.id_Demande)}>Refuse</Buttonred></TableCell>
                            
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const handleAccept = async (id) => {
    try {
      const confirmed = window.confirm('Accepter la demande');
  
      if (confirmed) {
        // Logic to handle accept action
        console.log('Accept request with ID:', id);
        // Fetch the specific request information
        const response = await axios.get(`http://localhost:8080/demande_inscri/getById/${id}`);
        const requestData1 = response.data;
  
        // Save the request information to the user using /user/save endpoint
        await axios.post('http://localhost:8080//email/accept-user', requestData1);
        axios.post('http://localhost:8080/citoyen/save', requestData1);
        axios.post('http://localhost:8080/demande_inscri_accepte/save', requestData1);
        await axios.delete(`http://localhost:8080/demande_inscri/delete/${id}`);
  
        window.location.reload();
  
        console.log('Request accepted and saved successfully!');
      } else {
        console.log('Request acceptance canceled by the user.');
      }
    } catch (error) {
      console.error('Error accepting request:', error);
    }
  };
  
  const handleRefuse = async (id) => {
    try {
      const confirmed = window.confirm('Are you sure you want to refuse this request?');
  
      if (confirmed) {
        // Logic to handle refuse action
        console.log('Refuse request with ID:', id);
        // Fetch the specific request information
        const response = await axios.get(`http://localhost:8080/demande_inscri/getById/${id}`);
        const requestData1 = response.data;
  
        // Save the request information to the user using /user/save endpoint
        await axios.post('http://localhost:8080//email/refuse-user', requestData1);
        axios.post('http://localhost:8080/demande_inscri_refuse/save', requestData1);
        await axios.delete(`http://localhost:8080/demande_inscri/delete/${id}`);
  
        window.location.reload();
  
        console.log('Request refused and saved successfully!');
      } else {
        console.log('Request refusal canceled by the user.');
      }
    } catch (error) {
      console.error('Error refusing request:', error);
    }
  };
  
  const Buttonred = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : "#ff2045")};
  background-color: ${(props) => (props.border ? "transparent" : "#ff2045")};
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
export default List;
