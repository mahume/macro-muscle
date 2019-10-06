const inchesToCentimeters = inches => inches * 2.54;

const poundsToKilograms = lbs => lbs * 0.453592;

// Body Mass Index
const bMI = (cm, kg) => kg / (cm / 100)**2;

const calculateMacros = (dailyCalories, carbsPct, proteinPct, fatPct) => {
  return {
    totalCarbs: dailyCalories * (carbsPct / 100),
    totalProtein: dailyCalories * (proteinPct / 100),
    totalFat: dailyCalories * (fatPct / 100),
  }
}

// Basal Metabolic Rate
const bMR = (isMale, cm, kg, yearsOld) => {
  if (isMale) return 66.47 + (13.75 * kg) + (5.003 * cm) - (6.755 * yearsOld);
  return 655.1 + (9.563 * kg) + (1.85 * cm) - (4.676 * yearsOld);
}

// Thermic Effect of Food
const tEF = () => {}

// Non-Exercise Activity Thermogenesis
const nEAT = () => {}

// Thermic Effect of Activity
const tEA = () => {}

// Total Daily Energy Expenditure
const tDEE = (bMR, tEF, nEAT, tEA) => {}

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




