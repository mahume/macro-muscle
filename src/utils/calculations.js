const inchesToCentimeters = inches => inches * 2.54;

const poundsToKilograms = pounds => pounds * 0.453592;

const bodyMassIndex = (centimeters, kilograms) => kilograms / (centimeters / 100)**2;

const basalMetabolicRate = (isMale, centimeters, kilograms, yearsOld) => {
  if (isMale) {
    return 66.47 + (13.75 * kilograms) + (5.003 * centimeters) - (6.755 * yearsOld);
  }
  return 655.1 + (9.563 * kilograms) + (1.85 * centimeters) - (4.676 * yearsOld);
}

const calculateMacros = (dailyCalories, carbsPercentage, proteinPercentage, fatPercentage) => {
  return {
    totalCarbs: dailyCalories * (carbsPercentage / 100),
    totalProtein: dailyCalories * (proteinPercentage / 100),
    totalFat: dailyCalories * (fatPercentage / 100),
  }
}

const kilos = poundsToKilograms(215);
const cm = inchesToCentimeters(77);
const BMI = bodyMassIndex(cm, kilos);
const BMR = basalMetabolicRate(true, cm, kilos, 31);
const macros = calculateMacros(BMR, 50, 25, 25)

console.log(`
kilos: ${kilos}
centimeters: ${cm}
Body Mass Index: ${BMI}
Basal Metabolic Rate: ${BMR}
Macro Split: ${JSON.stringify(macros)}
`);




