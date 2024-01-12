import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";

import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">MO9ATA3A.ma</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Egalisation</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Reclamation</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Demande D'inscription</span>
          </li>
          <p className="title">Citoyen Connection</p>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Sign In</span>
          </li>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Sign Up</span>
          </li>

          </Link>
          <p className="title">Admin Connection</p>
          <Link to="/loginA" style={{ textDecoration: "none" }}>
            <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Sign In</span>
          </li>
          </Link>
          
        </ul>

      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;