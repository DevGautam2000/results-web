import React from "react";
import { useHistory } from "react-router-dom";
import style from "./estimator.module.css";
import CalculateIcon from "@mui/icons-material/Calculate";
function Estimator() {
  const history = useHistory();
  return (
    <button
      alt="rishavanand's gpa calc"
      onClick={() => {
        history.push("/estimator");
      }}
      className={style.iframebutton}
      data-tooltip="credits @rishavanand"
    >
      <CalculateIcon />
    </button>
  );
}

export default Estimator;
