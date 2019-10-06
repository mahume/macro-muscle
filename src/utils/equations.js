const inchesToCentimeters = inches => inches * 2.54;

const poundsToKilograms = pounds => pounds * 0.453592;

const bodyMassIndex = (centimeters, kilograms) => kilograms / (centimeters / 100)**2;

const basalMetabolicRate = (isMale, centimeters, kilograms, yearsOld) => {
  if (isMale) {
    return 66.47 + (13.75 * kilograms) + (5.003 * centimeters) - (6.755 * yearsOld);
  }
  return 655.1 + (9.563 * kilograms) + (1.85 * centimeters) - (4.676 * yearsOld);
}

console.log(poundsToKilograms(215));
console.log(inchesToCentimeters(77));
console.log(bodyMassIndex(inchesToCentimeters(77), poundsToKilograms(215)));
console.log(basalMetabolicRate(false, inchesToCentimeters(65), poundsToKilograms(115), 31));



