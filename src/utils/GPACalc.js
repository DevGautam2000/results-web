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

  function isMajor(item){
    return "CS1875" === item 
  }
  function isNotMinor(item){
    if("CS1875" === item ) return false
    return (item.substring(2, 4) !== "18")
  }
 
  const finalMarks = Object.keys(collection).map((item) => {
    decPoint = getPointFromGrade(collection[item]["grade"]);
    let gpa = null;

    if ( isMajor(item) || (item !== "name" && isNotMinor(item)) ) {
      if (decPoint >= 0 && collection[item]["grade"][0] !== "P") {
        const cr = collection[item]["credit"].toString().split("/");
        decCredit = Number(cr[1] || cr[0]);
        totalPoint += decPoint * decCredit;
        totalCredit += decCredit;
      }
      gpa = totalPoint / totalCredit;
      gpa = Math.round(gpa * 100) / 100;
    }
    return gpa || 0;
  });

  return finalMarks.at(-1) ? finalMarks.at(-1) : finalMarks.at(-2);
}
