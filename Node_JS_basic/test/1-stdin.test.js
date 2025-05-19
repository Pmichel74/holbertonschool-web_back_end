const assert = require('assert');
const sinon = require('sinon');
const { stdin, stdout } = require('process');
const path = require('path');
const { spawn } = require('child_process');

describe('1-stdin.js', () => {
  it('should display welcome message and handle input', (done) => {
    const filePath = path.join(__dirname, '../1-stdin.js');
    const childProcess = spawn('node', [filePath]);
    
    let output = '';
    childProcess.stdout.on('data', (data) => {
      output += data.toString();
    });
    
    setTimeout(() => {
      assert.strictEqual(
        output.includes('Welcome to Holberton School, what is your name?'),
        true
      );
      
      // Simulate input and end
      childProcess.stdin.write('John\n');
      childProcess.stdin.end();
      
      setTimeout(() => {
        assert.strictEqual(output.includes('Your name is: John'), true);
        assert.strictEqual(output.includes('This important software is now closing'), true);
        
        // Ensure process is killed properly
        if (!childProcess.killed) {
          childProcess.kill();
        }
        
        done();
      }, 100);
    }, 100);
  });
});
