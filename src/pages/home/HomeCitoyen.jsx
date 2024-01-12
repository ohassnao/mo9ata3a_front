import Sidebar_cit from "../../components/sidebar/Sidebar_cit";
import Navbar_cit from "../../components/navbar/Navbar_cit";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/FeaturedC";
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
    
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Number of citizens per neighbour" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default HomeCitoyen;