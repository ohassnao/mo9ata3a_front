import Sidebar_fonc from "../../components/sidebar/Sidebar_fonc";
import Navbar_fonc from "../../components/navbar/Navbar_fonc";
import "./home.scss";
import Widget_fonc from "../../components/widget/Widget_fonc";
import Featured_fonc from "../../components/featured/Featured_fonc";
import Chart_fonc from "../../components/chart/Chart_fonc";
import Datatable_rec from "../../components/datatable/Datatable_rec";
import List from "../../components/table/Table_fonc";
import List_reclam from "../list/List_reclam";

const Home_fonc_rec = () => {
    return (
        <div className="home">
            <Sidebar_fonc />
            <div className="homeContainer">
                <Navbar_fonc />
                <List_reclam />
            </div>
        </div>
    );
};

export default Home_fonc_rec;
