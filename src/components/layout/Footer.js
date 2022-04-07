import classes from "./Footer.module.css";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className={classes.footer}>
      <ul>
        <Link to="/">
          <li className={classes.footerbtn}>
            <HomeIcon />
            what
          </li>
        </Link>

        <Link to="/customersupport">
          <li className={classes.footerbtn}>
            <ChatBubbleOutlineOutlinedIcon />
          </li>
        </Link>
        <Link to="/tracking">
          <li className={classes.footerbtn}>
            <FmdGoodOutlinedIcon />
          </li>
        </Link>
        <Link to="/profile">
          <li className={classes.footerbtn}>
            <AccountCircleOutlinedIcon />
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Footer;
