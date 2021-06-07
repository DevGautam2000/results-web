import React from "react";
import style from "./DataCard.module.css";

export default function DataCard({ sub, code, grade, int, ext, tot, credit }) {
  return (
    <div className={style.data_card}>
      <div className={style.upper_container}>
        <span className={style.subject_name}>{sub}</span>
        <span className={`${style.align_center} ${style.code}`}>{code}</span>
        <span className={`${style.align_center} ${style.grade}`}>
          {grade === "PASS" ? "P" : grade}
        </span>
      </div>
      <div className={style.lower_container}>
        <span className={style.int}>Int: {int}</span>
        <span className={style.ext}>Ext: {ext}</span>
        <span className={style.tot}>Total: {tot}</span>
        <span className={style.credit}>Credit: {credit}</span>
      </div>
    </div>
  );
}
