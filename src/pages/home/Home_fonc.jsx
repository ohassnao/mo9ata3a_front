import Sidebar_fonc from "../../components/sidebar/Sidebar_fonc";
import Navbar_fonc from "../../components/navbar/Navbar_fonc";
import "./home.scss";
import Widget_fonc from "../../components/widget/Widget_fonc";
import Featured_fonc from "../../components/featured/Featured_fonc";
import Chart from "../../components/chart/Chart";
import Table_fonc from "../../components/table/Table_fonc";

const Home_fonc = () => {
    return (
        <div className="home">
            <Sidebar_fonc />
            <div className="homeContainer">
                <Navbar_fonc />
                <div className="widgets">
                    <Widget_fonc type="user" />
                    <Widget_fonc type="order" />
                    <Widget_fonc type="earning" />
                    <Widget_fonc type="balance" />
                </div>
                <div className="charts">
                    <Featured_fonc />
                    <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                </div>
            </div>
        </div>
    );
};

export default Home_fonc;
