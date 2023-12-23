import Sidebar_fonc from "../../components/sidebar/Sidebar_fonc";
import Navbar_fonc from "../../components/navbar/Navbar_fonc";
import "./home.scss";
import Datatable_ega from "../../components/datatable/Datatable_ega";
const Home_fonc_ega = () => {
    return (
        <div className="home">
            <Sidebar_fonc />
            <div className="homeContainer">
                <Navbar_fonc />
                <Datatable_ega />
            </div>
        </div>
    );
};

export default Home_fonc_ega;
