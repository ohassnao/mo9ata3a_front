import Sidebar_cit from "../../components/sidebar/Sidebar_cit";
import Navbar_cit from "../../components/navbar/Navbar_cit";
import "./home.scss";
import Table_legal from "../../components/table/Table_legal";

const Histoique_lega = () => {
  return (
    <div className="home">
      <Sidebar_cit />
      <div className="homeContainer">
        <Navbar_cit />
        <Table_legal/>

      </div>
    </div>
  );
};

export default Histoique_lega;