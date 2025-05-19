const displayMessage = require('../0-console');

describe('displayMessage', () => {
  test('logs the message to STDOUT', () => {
    // Mock console.log
    const consoleSpy = jest.spyOn(console, 'log');
    
    // Call the function
    displayMessage('Hello Holberton School!');
    
    // Assert that console.log was called with the right argument
    expect(consoleSpy).toHaveBeenCalledWith('Hello Holberton School!');
    
    // Restore console.log
    consoleSpy.mockRestore();
  });
});
