import Circle from "../layout/Circle";
import classes from "./Home.module.css";
import fclasses from "../layout/Footer.module.css";
import Header from "../layout/Header";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import DaysCircle from "../layout/DaysCircle";
export default function Home() {
  return (
    <div>
      <Header>Sparky's Room</Header>
      <div className={classes.homeBox}>
        <div className={classes.scheduleTitle}>MINUTES FOCUSED THIS WEEK</div>
        <div className={classes.circleComponent1}>
          <DaysCircle />
        </div>
        <div className={classes.circleComponent2}>
          <Circle>90</Circle>
          <Circle>150</Circle>
          <Circle>180</Circle>
          <Circle>60</Circle>
          <Circle>0</Circle>
          <Circle>0</Circle>
          <Circle>0</Circle>
        </div>
      </div>
      <div className={classes.bottomButtons}>
        <Link to="/SetUpFocusSession">
          <p className={classes.bottomButton}>Start Focus</p>
        </Link>
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
