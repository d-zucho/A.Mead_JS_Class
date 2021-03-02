/**
 * @author Danny Libor
 * @purpose Display grade based on number correct out of total possible
 *
 * students score, total possible score
 * 15/20 => You got a C (75%)
 */

const gradeCalc = (score, totalScore) => {
  if (typeof score !== 'number' || typeof totalScore !== 'number') {
    throw Error('Please provide only numbers');
  }
  const percent = (score / totalScore) * 100;
  let letterGrade = '';

  if (percent >= 90) {
    letterGrade = 'A';
  } else if (percent >= 80) {
    letterGrade = 'B';
  } else if (percent >= 70) {
    letterGrade = 'c';
  } else if (percent >= 60) {
    letterGrade = 'D';
  } else {
    letterGrade = 'F';
  }

  return `You got a ${letterGrade} (${percent}%)`;
};

try {
  const result = gradeCalc(8, 10);
  console.log(result);
} catch (e) {
  console.log(e.message);
}
