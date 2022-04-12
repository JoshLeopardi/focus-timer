import React from "react";
import FlagOutlined from "@mui/icons-material/FlagOutlined";
import Flag from "@mui/icons-material/Flag";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";

export default function PauseButton({ pause, handlePause }) {
  return (
    <>
      <div className="toggle-wrapper">
        {pause ? (
          <PauseCircleIcon
            className="active"
            fontSize="large"
            sx={{ color: "#004fc5", fontSize: "70px" }}
            onClick={() => handlePause()}
          />
        ) : (
          <PauseCircleOutlineOutlinedIcon
            className="inactive"
            fontSize="large"
            sx={{ color: "#004fc5", fontSize: "70px" }}
            onClick={() => handlePause()}
          />
        )}
      </div>
    </>
  );
}
