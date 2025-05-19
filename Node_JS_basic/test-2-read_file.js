const countStudents = require('./2-read_file');

console.log('Test 1: Testing with a valid database file');
try {
  // Supposons que database.csv existe dans le répertoire
  countStudents('database.csv');
  console.log('✓ Test passed: Function executed correctly with valid database');
} catch (error) {
  console.error('✗ Test failed:', error.message);
}

console.log('\nTest 2: Testing with a non-existent file');
try {
  countStudents('non_existent_file.csv');
  console.error('✗ Test failed: Function did not throw error for non-existent file');
} catch (error) {
  if (error.message === 'Cannot load the database') {
    console.log('✓ Test passed: Function correctly threw error for non-existent file');
  } else {
    console.error('✗ Test failed: Function threw unexpected error:', error.message);
  }
}

console.log('\nTest 3: Testing with an empty file');
try {
  // Créons un fichier vide pour tester
  const fs = require('fs');
  fs.writeFileSync('empty.csv', '');
  
  countStudents('empty.csv');
  console.error('✗ Test failed: Function did not throw error for empty file');
} catch (error) {
  if (error.message === 'Cannot load the database') {
    console.log('✓ Test passed: Function correctly threw error for empty file');
  } else {
    console.error('✗ Test failed: Function threw unexpected error:', error.message);
  }
}
