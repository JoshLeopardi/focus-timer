import fclasses from "../layout/Footer.module.css";
import Header from "../layout/Header";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import classes from "./FocusSession.module.css";
import SparkyWalk from "../Images/Sparky_Walk.gif";
import SparkyGrass from "../Images/Sparky_Grass.gif";
import StarsOutlinedIcon from "@mui/icons-material/StarsOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import { useState } from "react";
import PauseButton from "../layout/PauseButton";
import StopButton from "../layout/StopButton";
import Countdown from "react-countdown";

export default function FocusSession() {
  const [pause, setPause] = useState(false);
  const handlePause = () => {
    setPause((previousFlag) => {
      return !previousFlag;
    });
  };

  const [stop, setStop] = useState(false);
  const [actStop, setActStop] = useState(false);
  const handleStop = () => {
    setActStop(true);
    setStop((previousFlag) => {
      return !previousFlag;
    });
  };

  return (
    <div>
      <Header>Focus Session</Header>
      <div className={classes.topSetUp}>
        <h1>FOCUS</h1>
        <h1>BREAK</h1>
      </div>
      <div className={classes.timerCountdown}>
        <Countdown date={Date.now() + 1500000} />
        <Countdown date={Date.now() + 300000} autoStart={actStop} />
      </div>
      <div className={classes.sparkyWalk1}>
        <img
          className={classes.sparkyWalk2}
          src={SparkyWalk}
          alt="Sparky_Walk"
        />
      </div>
      <div className={classes.focey}>
        <div className={classes.happySection}>
          <EmojiEmotionsOutlinedIcon className={classes.happyFace} />
          <p className={classes.happiness}>+ 25 Happiness</p>
        </div>
        <div className={classes.foceySection}>
          <StarsOutlinedIcon className={classes.starLogo} />
          <p className={classes.points}>+ 30000 Focey</p>
        </div>
      </div>
      <div className={classes.sparkyGrass1}>
        <img
          className={classes.sparkyGrass2}
          src={SparkyGrass}
          alt="Sparky_Grass"
        />
      </div>
      <div className={classes.bottomcircleIcon}>
        <PauseButton pause={pause} handlePause={handlePause} />
        <StopButton stop={stop} handleStop={handleStop} />
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
              <MoreHorizOutlinedIcon fontSize="large" />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
