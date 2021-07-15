import React from "react";
import style from "./GPA.module.css";
import calcGpa from "../../utils/GPACalc";

export default function GPACalc({ data, periodName }) {
  const gpaPoint = calcGpa(data, periodName);

  const classNames = [style.red, style.green, style.pale];
  let pos = 0;

  if (gpaPoint >= 8.0 && gpaPoint <= 10.0) {
    pos = 1;
  } else if (gpaPoint >= 5.0 && gpaPoint < 8.0) {
    pos = 2;
  }

  return (
    <div className={`${style.gpaTag} ${classNames[pos]} `}>GPA: {gpaPoint}</div>
  );
}
