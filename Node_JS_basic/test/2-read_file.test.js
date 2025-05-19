const { expect } = require('chai');
const sinon = require('sinon');
const countStudents = require('../2-read_file');
const fs = require('fs');

describe('countStudents', () => {
  let consoleSpy;
  
  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });
  
  afterEach(() => {
    consoleSpy.restore();
  });

  it('should throw an error if the database cannot be loaded', () => {
    expect(() => countStudents('nonexistent.csv')).to.throw('Cannot load the database');
  });

  it('should log the correct output for a valid database file', () => {
    // Create a mock CSV content
    const csvContent = `firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS`;

    // Mock the fs.readFileSync function
    const readFileSyncStub = sinon.stub(fs, 'readFileSync').returns(csvContent);

    // Call the function with a fake path
    countStudents('database.csv');

    // Verify the output
    expect(consoleSpy.calledWith('Number of students: 10')).to.be.true;
    expect(consoleSpy.calledWith('Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie')).to.be.true;
    expect(consoleSpy.calledWith('Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy')).to.be.true;

    // Restore the stub
    readFileSyncStub.restore();
  });
});
