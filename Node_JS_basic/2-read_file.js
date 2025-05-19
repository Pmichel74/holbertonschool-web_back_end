const fs = require('fs');

/**
 * Counts students from a CSV database file
 * @param {string} path - Path to the CSV database file
 * @throws {Error} - If database cannot be loaded
 */
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8' });
    const lines = data.split(/\r?\n/).filter(line => line.trim() !== '');
    
    // Vérifier si le fichier a au moins une ligne d'en-tête et une ligne de données
    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }
    
    let countStudents = 0;
    const fields = {};

    // L'en-tête est à l'index 0, commencer l'analyse à partir de l'index 1
    for (let i = 1; i < lines.length; i += 1) {
      // Ligne déjà filtrée pour les lignes vides
      countStudents += 1;
      const [fname, , , field] = lines[i].split(',');
      
      // S'assurer que le champ est défini
      if (field) {
        const fieldName = field.trim();
        if (!fields[fieldName]) {
          fields[fieldName] = {
            countField: 1,
            students: [fname.trim()],
          };
        } else {
          fields[fieldName].countField += 1;
          fields[fieldName].students.push(fname.trim());
        }
      }
    }
    console.log(`Number of students: ${countStudents}`);
    for (const field of Object.keys(fields)) {
      const n = fields[field].countField;
      const names = fields[field].students.join(', ');
      console.log(`Number of students in ${field}: ${n}. List: ${names}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
