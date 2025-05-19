const { expect } = require('chai');
const sinon = require('sinon');

describe('stdin script', () => {
  it('script exists', () => {
    const fs = require('fs');
    expect(fs.existsSync('./1-stdin.js')).to.be.true;
  });
});
