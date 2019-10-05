const inchesToMeters = inches => inches * 0.0254;

const poundsToKilograms = pounds => pounds * 0.45359237;

const bodyMassIndex = (meters, kilograms) => kilograms / meters**2;

const basalMetabolicRate = (isMale, kg, m, age) => {
  if (isMale) {
    return 66.47 + (6.24 * kg) + (12.7 * m) - (6.755 * age);
  }
  return 655.1 + (4.35 * kg) + (4.7 * m) - (4.7 * age);
}


const myBMI = bodyMassIndex(inchesToMeters(77), poundsToKilograms(215))
console.log(`My BMI: ${myBMI}`);
