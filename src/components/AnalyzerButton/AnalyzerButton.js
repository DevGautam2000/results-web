import React from "react";
import { useHistory } from "react-router-dom";
import style from "./AnalyzerButton.module.css";
import BarChartIcon from '@mui/icons-material/BarChart';
function AnalyzerButton() {
  const history = useHistory();
  return (
    <button
      onClick={() => {
        history.push("/form/result/analyzer");
      }}
      className={style.analyzer_button}
    >
      <BarChartIcon />
    </button>
  );
}

export default AnalyzerButton;
