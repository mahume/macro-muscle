const imperialToMetric = (inches, pounds) => {
  return inches * 0.0254
}

const bodyMassIndex = (height, weight) => weight / height**2;

const basalMetabolicRate = (isMale, kg, m, age) => {
  if (isMale) {
    return 66.47 + (6.24 * kg) + (12.7 * m) - (6.755 * age);
  }
  return 655.1 + (4.35 * kg) + (4.7 * m) - (4.7 * age);
}

console.log(imperialToMetric(76.5));

