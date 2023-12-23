import Sidebar_cit from "../../components/sidebar/Sidebar_cit";
import Navbar_cit from "../../components/navbar/Navbar_cit";
import "./home.scss";
import Formulaire from "../../components/form/formulaire";

const Legalisation = () => {
  return (
    <div className="home">
      <Sidebar_cit />
      <div className="homeContainer">
        <Navbar_cit />
        <Formulaire/>

      </div>
    </div>
  );
};

export default Legalisation;