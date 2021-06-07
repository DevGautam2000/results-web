import React from "react";
import style from "./GPACalc.module.css";

export default function GPACalc({ data }) {
  let gpaPoint = null;

  function calcGpa() {
    let decPoint, decCredit;
    let totalPoint = 0.0,
      totalCredit = 0.0;

    const finalMarks = Object.keys(data).map((item) => {
      decPoint = getPointFromGrade(data[item]["grade"]);
      let gpa = null;
      if (item !== "name") {
        if (decPoint >= 0) {
          decCredit = Number(data[item]["credit"]);
          totalPoint += decPoint * decCredit;
          totalCredit += decCredit;
        }
        gpa = totalPoint / totalCredit;
        gpa = Math.round(gpa * 100) / 100.0;
      }
      return gpa;
    });

    return finalMarks[finalMarks.length - 2];
  }

  function getPointFromGrade(grade) {
    switch (grade) {
      case "S":
        return 10.0;
      case "A":
        return 9.0;
      case "B":
        return 8.0;
      case "C":
        return 7.0;
      case "D":
        return 6.0;
      case "E":
        return 5.0;
      default:
        return 0.0;
    }
  }

  if (gpaPoint === null) {
    gpaPoint = calcGpa();
  }

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
