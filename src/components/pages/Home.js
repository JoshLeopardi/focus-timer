import Circle from "../layout/Circle";
import classes from "./Home.module.css";
import fclasses from "../layout/Footer.module.css";
import Header from "../layout/Header";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
export default function Home() {
  return (
    <div>
      <Header>Sparky's Room</Header>
      <h1>Hiiii</h1>
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
              <ChatBubbleOutlineOutlinedIcon />
            </li>
          </Link>
          <Link to="/tracking">
            <li className={fclasses.footerbtn}>
              <FmdGoodOutlinedIcon />
            </li>
          </Link>
          <Link to="/profile">
            <li className={fclasses.footerbtn}>
              <AccountCircleOutlinedIcon />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
