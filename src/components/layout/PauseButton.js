import React from "react";
import FlagOutlined from "@mui/icons-material/FlagOutlined";
import Flag from "@mui/icons-material/Flag";

export default function PauseButton({ pause, handlePause }) {
  return (
    <>
      <div className="toggle-wrapper">
        {pause ? (
          <Flag
            className="active"
            fontSize="large"
            sx={{ color: "red" }}
            onClick={() => handlePause()}
          />
        ) : (
          <FlagOutlined
            className="inactive"
            fontSize="large"
            sx={{ color: "red" }}
            onClick={() => handlePause()}
          />
        )}
      </div>
    </>
  );
}
