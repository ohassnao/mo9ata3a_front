import Home from "./pages/home/Home";
import Home_fonc from "./pages/home/Home_fonc";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Landing from "./screens/Landing"
import "./style/flexboxgrid.min.css";
import './style/index.css';
import { Helmet } from "react-helmet";
import Datatable_rec from './components/datatable/Datatable_rec';
import Home_fonc_rec from "./pages/home/Home_fonc_rec";
import Datatable_ega from './components/datatable/Datatable_ega';
import Home_fonc_ega from "./pages/home/Home_fonc_ega";
import Datatable_Dinscri from "./components/datatable/Datatable_Dinscri";
import Home_fonc_insc from "./pages/home/Home_fonc_insc";
import LoginA from "./pages/login/LoginA";
import ThankYouPage from "./pages/signup/ThankYouPage";
import Signup from"./pages/signup/Signup";
import HomeCitoyen from "./pages/home/HomeCitoyen";
import List_cit from "./pages/list/List_cit";
import Formulaire from "./pages/home/Legalisation";
import ReclamationPage from "./pages/reclamation/reclamation";
import Histoique_lega from "./pages/home/Historique_lega";
import Reponse from "./pages/reponse/Reponse"

function App() {
    const { darkMode } = useContext(DarkModeContext);

  return (


    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Landing />} />
            <Route path="/datatable_rec" element={<Datatable_rec />} />
            <Route path="/datatable_ega" element={<Datatable_ega />} />
            <Route path="/datatable_Dinscri" element={<Datatable_Dinscri />} />
            <Route path="/dashboard_Citoyen"element={<HomeCitoyen />} />
            <Route path="formulaire" element={<Formulaire/>} />
            <Route path="reclamation_citoyen" element={<ReclamationPage/>} />
            <Route path="histo_lega" element={<Histoique_lega/>} />

            < Route path="dashboard" element={<Home />} />
            < Route path="reclamation" element={<Home_fonc_rec />} />
            < Route path="egalisation" element={<Home_fonc_ega />} />
            < Route path="Dinscription" element={<Home_fonc_insc />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="typage" element={<ThankYouPage />} />
            <Route path="loginA" element={<LoginA />} />
            <Route path="reponse" element={<Reponse />} />

            <Route path="dashboard_fonc" element={<Home_fonc />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List_cit />} />
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;