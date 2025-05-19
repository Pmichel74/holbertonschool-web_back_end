const assert = require('assert');
const sinon = require('sinon');

const displayMessage = require('../0-console');

describe('displayMessage', () => {
  it('should log to the console', () => {
    const consoleLogSpy = sinon.spy(console, 'log');
    displayMessage('Hello Holberton School!');
    assert.strictEqual(consoleLogSpy.calledWith('Hello Holberton School!'), true);
    consoleLogSpy.restore();
  });
});
