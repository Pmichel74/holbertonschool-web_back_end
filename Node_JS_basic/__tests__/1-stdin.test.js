const { spawn } = require('child_process');
const path = require('path');

describe('1-stdin.js', () => {
  test('displays the welcome message and handles user input', (done) => {
    const scriptPath = path.join(__dirname, '../1-stdin.js');
    const process = spawn('node', [scriptPath]);
    
    let stdoutData = '';
    process.stdout.on('data', (data) => {
      stdoutData += data.toString();
    });
    
    // Wait for initial message
    setTimeout(() => {
      expect(stdoutData).toContain('Welcome to Holberton School, what is your name?');
      // Simulate input
      process.stdin.write('John\n');
      process.stdin.end();
      
      // Wait for response to input
      setTimeout(() => {
        expect(stdoutData).toContain('Your name is: John');
        expect(stdoutData).toContain('This important software is now closing');
        
        // Ensure process is killed properly
        if (!process.killed) {
          process.kill();
        }
        
        done();
      }, 100);
    }, 100);
  }, 5000); // Increase timeout to 5 seconds
});
