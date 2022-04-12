import fclasses from "../layout/Footer.module.css";
import Header from "../layout/Header";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import MoreIcon from "@mui/icons-material/More";
import { useState } from "react";
export default function Settings() {
  const [pause, setPause] = useState(false);

  const handlePause = () => {
    if (pause == false) {
      setPause(true);
    } else setPause(false);
  };
  return (
    <div>
      <Header>Settings</Header>

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
