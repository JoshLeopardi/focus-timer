import Circle from "../layout/Circle";
import classes from "./Home.module.css";
import fclasses from "../layout/Footer.module.css";
import Header from "../layout/Header";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
export default function Home() {
  return (
    <div>
      <Header>Sparky's Room</Header>
      <div classame={classes.homebox}>
        MINUTES FOCUSED THIS WEEK
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
        <Circle>S</Circle>
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
