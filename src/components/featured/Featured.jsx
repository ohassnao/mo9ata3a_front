import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Requests</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={45} text={"45%"} strokeWidth={5} />
        </div>
        <p className="title">Requests made today</p>
        <p className="amount">10 Requests</p>
        <p className="desc">
          Total requests made by citizens in the last 24 hours
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Inscriptions</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">4</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Legalisations</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">4</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Reclamations</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;