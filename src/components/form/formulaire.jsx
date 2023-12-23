import React, { useState , useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from 'axios';
import "./formulaire.scss";


const Formulaire = () => {
  const [document, setDocument] = useState(null);
  const [citoyen, setCitoyen] = useState(JSON.parse(localStorage.getItem("citoyen")));
  const [documentType, setDocumentType] = useState(""); // New field for document type
  const [reasons, setReasons] = useState(""); // New field for reasons
  useEffect(()=>{
    setCitoyen(JSON.parse(localStorage.getItem("citoyen")));
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('pdfh', document);
      formData.append('documentType', documentType); // Append document type to the form data
      formData.append('id_citoyen', citoyen.id_user); 
      formData.append('reasons', reasons); // Append reasons to the form data

      // Make a POST request to the /upload endpoint with the FormData
      const response = await axios.post('http://localhost:8080/pdf/upload', formData);

      // Handle the response as needed
      console.log(response.data);

      // Reset the form after successful submission
      setDocument(null);
      setCitoyen(null);
      setDocumentType("");
      setReasons("");
    } catch (error) {
      // Handle any errors during the upload
      console.error(error);
    }
  };

  return (

        <div className="navbar-container">
          <div className="page-container">
            <Card className="form-card1">
              <CardContent>
                {/* Your Form */}
                <form className="form1" onSubmit={handleSubmit}>
                  <div className='div1'>
                    <label className="label1" htmlFor="idCitoyen">Equalization Request</label>
                  </div>

                  <div className='div1'>
                    <label className="label2" htmlFor="documentType">Type of Document:</label>
                    <input
                      type="text"
                      id="documentType"
                      value={documentType}
                      onChange={(e) => setDocumentType(e.target.value)}
                      required
                      className='input1'
                    />
                  </div>

                  <div className='div1'>
                    <label className="label2" htmlFor="reasons">Reasons :</label>
                    <textarea
                      id="reasons"
                      value={reasons}
                      onChange={(e) => setReasons(e.target.value)}
                      required
                      className='input1'
                    />
                  </div>
                  <div className='div1'>
                    <label className="label2" htmlFor="document">Upload your Document here :</label>
                    <input
                      type="file"
                      id="document"
                      onChange={(e) => setDocument(e.target.files[0])}
                      accept=".pdf, .doc, .docx"
                      required
                    />
                  </div>

                  <div className='div1'>
                    <button className="button1" type="submit">Submit Form</button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

  );
};

export default Formulaire;