import React from "react";
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
            sx={{ color: "#e20000", fontSize: "70px" }}
            onClick={() => handleStop()}
          />
        ) : (
          <StopCircleOutlinedIcon
            className="inactive"
            fontSize="large"
            sx={{ color: "#e20000", fontSize: "70px" }}
            onClick={() => handleStop()}
          />
        )}
      </div>
    </>
  );
}
