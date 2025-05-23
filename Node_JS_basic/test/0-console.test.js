const { expect } = require('chai');
const sinon = require('sinon');
const displayMessage = require('../0-console');

describe('displayMessage', () => {
  it('should log the message to the console', () => {
    const consoleSpy = sinon.spy(console, 'log');
    const testMessage = 'Hello, World!';

    displayMessage(testMessage);

    expect(consoleSpy.calledWith(testMessage)).to.be.true;
    consoleSpy.restore();
  });
});
