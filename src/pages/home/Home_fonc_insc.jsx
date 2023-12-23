import Sidebar_fonc from "../../components/sidebar/Sidebar_fonc";
import Navbar_fonc from "../../components/navbar/Navbar_fonc";
import "./home.scss";
import Datatable_Dinscri from "../../components/datatable/Datatable_Dinscri";
import List from "../../components/table/Table_fonc";
const Home_fonc_insc = () => {
    return (
        <div className="home">
            <Sidebar_fonc />
            <div className="homeContainer">
                <Navbar_fonc />
                <List />
            </div>
        </div>
    );
};

export default Home_fonc_insc;
