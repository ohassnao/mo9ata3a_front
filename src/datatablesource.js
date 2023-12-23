export const userColumns = [
  {
    field: "Date_du_demande",
    headerName: "Date de demande",
    width: 160,
 
  },
  {
    field: "Nom",
    headerName: "Nom",
    width: 120,
  },

  {
    field: "Prenom",
    headerName: "Prenom",
    width: 130,
  },
  {
    field: "CIN",
    headerName: "CIN",
    width: 130,
  },
  {
    field: "EMAIL",
    headerName: "EMAIL",
    width: 150,
  },
  {
    field: "USERNAME",
    headerName: "USERNAME",
    width: 130,
  },
  {
    field: "Code_Confidentiel",
    headerName: "Code Confidentiel",
    width: 150,
  },

];

//temporary data
      const response = await fetch('http://localhost:8080/demande_inscri/getall');
      const data = await response.json();
export let userRows = [];
userRows = [...data];
export const fetchUserData = async () => {
  try {

       // Replace existing data in userRows with the fetched data
  } catch (error) {
      console.error('Error fetching data:', error);
  }
};


