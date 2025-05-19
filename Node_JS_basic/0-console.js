/**
 * Displays a message in the standard output (STDOUT)
 * This function takes a string argument and prints it to the console
 * using Node.js console.log method, which writes to process.stdout
 *
 * @param {string} message - The message to be displayed in the console
 * @returns {void} This function does not return a value
 */
function displayMessage(message) {
  console.log(message);
}

module.exports = displayMessage;
