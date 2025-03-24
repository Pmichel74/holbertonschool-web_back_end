/**
 * Calculate sum of initialNumber and expansion values
 * @param {number} initialNumber - The initial number
 * @param {number} [expansion1989=89] - The 1989 expansion value
 * @param {number} [expansion2019=19] - The 2019 expansion value
 * @return {number} The sum of all three parameters
 */
export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}