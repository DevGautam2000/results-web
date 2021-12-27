import React from "react";
import { useHistory } from "react-router-dom";
import style from "./estimator.module.css";

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
      Gpa Estimator
    </button>
  );
}

export default Estimator;
