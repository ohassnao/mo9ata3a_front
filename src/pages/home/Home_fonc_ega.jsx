import Sidebar_fonc from "../../components/sidebar/Sidebar_fonc";
import Navbar_fonc from "../../components/navbar/Navbar_fonc";
import "./home.scss";
import Table_foncLegal from "../../components/table/Table_foncLegal";
const Home_fonc_ega = () => {
    return (
        <div className="home">
            <Sidebar_fonc />
            <div className="homeContainer">
                <Navbar_fonc />
                <Table_foncLegal />
            </div>
        </div>
    );
};

export default Home_fonc_ega;