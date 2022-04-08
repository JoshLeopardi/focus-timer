import Circle from "../layout/Circle";
import fclasses from "../layout/Footer.module.css";
import Header from "../layout/Header";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import classes from "./FocusSession.module.css";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import StopCircleIcon from "@mui/icons-material/StopCircle";

export default function FocusSession() {
  return (
    <div>
      <Header>Focus Session</Header>
      <div className={classes.topSetUp}>
        <h1>FOCUS</h1>
        <h1>BREAK</h1>
      </div>
      <div className={classes.timerCountdown}>
        <p>23:57</p>
        <p>5:00</p>
      </div>
      <div className={classes.bottomcircleIcon}>
        <PauseCircleIcon className={classes.pausecircleIcon}></PauseCircleIcon>

        <StopCircleIcon className={classes.stopcircleIcon}></StopCircleIcon>
      </div>
      <div className={fclasses.footer}>
        <ul>
          <Link to="/">
            <li className={fclasses.footerbtn}>
              <HomeIcon fontSize="large" />
            </li>
          </Link>

          <Link to="/customersupport">
            <li className={fclasses.footerbtn}>
              <ViewListOutlinedIcon fontSize="large" />
            </li>
          </Link>
          <Link to="/tracking">
            <li className={fclasses.footerbtn}>
              <AssessmentOutlinedIcon fontSize="large" />
            </li>
          </Link>
          <Link to="/profile">
            <li className={fclasses.footerbtn}>
              <MoreHorizOutlinedIcon fontSize="large" />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
