import Sidebar_cit from "../../components/sidebar/Sidebar_cit";
import Navbar_cit from "../../components/navbar/Navbar_cit";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const HomeCitoyen = () => {
  return (
    <div className="home">
      <Sidebar_cit />
      <div className="homeContainer">
        <Navbar_cit  />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default HomeCitoyen;