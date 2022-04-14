import fclasses from "../layout/Footer.module.css";
import Header from "../layout/Header";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import MoreIcon from "@mui/icons-material/More";
// import Switch from "react-switch";
// import { useState } from "react";
import pikachu from "../Images/pikachu.gif";

export default function Settings() {
  // const [checked, setChecked] = useState(false);
  // const handleChange = (nextChecked) => {
  //   setChecked(nextChecked);
  // };
  return (
    <div>
      <Header>Settings</Header>
      {/* <Switch
        onChange={handleChange}
        checked={checked}
        className="react-switch"
      /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "200px",
        }}
      >
        <img src={pikachu} alt="Under Construction" style={{ width: "80%" }} />
      </div>
      <div className={fclasses.footer}>
        <ul>
          <Link to="/">
            <li className={fclasses.footerbtn}>
              <HomeOutlinedIcon fontSize="large" />
            </li>
          </Link>
          <Link to="/ToDoList">
            <li className={fclasses.footerbtn}>
              <ViewListOutlinedIcon fontSize="large" />
            </li>
          </Link>
          <Link to="/Statistics">
            <li className={fclasses.footerbtn}>
              <AssessmentOutlinedIcon fontSize="large" />
            </li>
          </Link>
          <Link to="/Settings">
            <li className={fclasses.footerbtn}>
              <MoreIcon fontSize="large" />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
