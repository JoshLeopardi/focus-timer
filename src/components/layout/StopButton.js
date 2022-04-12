import React from "react";
import FlagOutlined from "@mui/icons-material/FlagOutlined";
import Flag from "@mui/icons-material/Flag";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import StopCircleOutlinedIcon from "@mui/icons-material/StopCircleOutlined";

export default function StopButton({ stop, handleStop }) {
  return (
    <>
      <div className="toggle-wrapper">
        {stop ? (
          <StopCircleIcon
            className="active"
            fontSize="large"
            sx={{ color: "#004fc5", fontSize: "70px" }}
            onClick={() => handleStop()}
          />
        ) : (
          <StopCircleOutlinedIcon
            className="inactive"
            fontSize="large"
            sx={{ color: "#004fc5", fontSize: "70px" }}
            onClick={() => handleStop()}
          />
        )}
      </div>
    </>
  );
}
