export default function calcGpa(collection) {
  if (!collection) return;
  let decPoint, decCredit;
  let totalPoint = 0.0,
    totalCredit = 0.0;

  const getPointFromGrade = (grade) => {
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
  };
  
  const finalMarks = Object.keys(collection).map((item) => {
    decPoint = getPointFromGrade(collection[item]["grade"]);
    let gpa = null;
    if (item !== "name" && item.substring(2,4) !== "18") {

      if (decPoint >= 0) {
        decCredit = Number(collection[item]["credit"]);
        totalPoint += decPoint * decCredit;
        totalCredit += decCredit;
      }
      gpa = totalPoint / totalCredit;
      gpa = Math.round(gpa * 100) / 100.0;
    }
    return gpa || 0;
  });

  return finalMarks[finalMarks.length - 1]
    ? finalMarks[finalMarks.length - 1]
    : finalMarks[finalMarks.length - 2];
}
