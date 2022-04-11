import Circle from "../layout/Circle";
import classes from "./Home.module.css";
import fclasses from "../layout/Footer.module.css";
import Header from "../layout/Header";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import DaysCircle from "../layout/DaysCircle";
import SparkyIdle from "../Images/Sparky_Ide.gif";
import SparkyRoom from "../Images/Sparky_Room.gif";
export default function Home() {
  let navigate = useNavigate();
  const goToSetUp = () => {
    navigate("/SetUpFocusSession");
  };

  return (
    <div>
      <Header>Sparky's Room</Header>
      <div className={classes.homeBox}>
        <div className={classes.scheduleTitle}>MINUTES FOCUSED THIS WEEK</div>
        <div className={classes.circleComponent1}>
          <DaysCircle />
        </div>
        <div className={classes.circleComponent2}>
          <span className={classes.bottomCircle}>
            <Circle>90</Circle>
          </span>
          <span className={classes.bottomCircle}>
            <Circle>150</Circle>
          </span>
          <span className={classes.bottomCircle}>
            <Circle>180</Circle>
          </span>
          <span className={classes.bottomCircle}>
            <Circle>60</Circle>
          </span>
          <span className={classes.bottomCircle}>
            <Circle>0</Circle>
          </span>
          <span className={classes.bottomCircle}>
            <Circle>0</Circle>
          </span>
          <span className={classes.bottomCircle}>
            <Circle>0</Circle>
          </span>
        </div>
      </div>
      <div className={classes.sparkyIdle1}>
        <img
          className={classes.sparkyIdle2}
          src={SparkyIdle}
          alt="Sparky_Idle"
        />
      </div>
      <div className={classes.points}>1200 Foucey</div>
      <div className={classes.sparkyRoom1}>
        <img
          className={classes.sparkyRoom2}
          src={SparkyRoom}
          alt="Sparky_Room"
        />
      </div>
      <div onClick={goToSetUp} className={classes.bottomButtons}>
        <p className={classes.bottomButton}>Start Focus</p>
      </div>
      <div className={fclasses.footer}>
        <ul>
          <Link to="/">
            <li className={fclasses.footerbtn}>
              <HomeIcon fontSize="large" />
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
              <MoreHorizOutlinedIcon fontSize="large" />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
