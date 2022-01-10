import React from "react";
import style from "./GPA.module.css";
import calcGpa from "../../utils/GPACalc";
import { useSelector } from "react-redux";

export default function GPACalc() {
  const { collection } = useSelector((state) => state.collections);
  const gpaPoint = calcGpa(collection);

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
