function gradeBook (grade1, grade2, grade3) {  // eslint-disable-line no-unused-vars
  var score = (grade1 + grade2 + grade3) / 3

  if (score >= 90 && score <= 100) {
    return 'A'
  }
  if (score >= 80) {
    return 'B'
  }
  if (score >= 70) {
    return 'C'
  }
  if (score >= 60) {
    return 'D'
  }
  return 'F'
}
