import React from "react";
import style from "./Chart.module.css";
import { Bar } from "react-chartjs-2";

const Chart = ({ periodName, data, collection }) => {
  return (
    <div className={style.container}>
      <span className={style.title}>{periodName}</span>
      <div style={{ position: "relative", height: "80%", width: "100%" }}>
        <Bar data={data} className={style.chart} />
      </div>
      <div className={style.keys}>
        {Object.keys(collection).map((subCode, index) => {
          let k = null;
          if (subCode !== "name") {
            k = (
              <span key={index} className={style.key}>
                {subCode}: {collection[subCode]["sub"]}{" "}
              </span>
            );
          }

          return k;
        })}
      </div>
    </div>
  );
};

export default Chart;
