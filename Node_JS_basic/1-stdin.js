const std = require('process');

std.stdout.write('Welcome to Holberton School, what is your name?\n');
std.stdin.on('readable', () => {
  const name = std.stdin.read();
  if (name) {
    // Convertir name en string et supprimer tout saut de ligne à la fin
    const nameStr = name.toString().trim();
    std.stdout.write(`Your name is: ${nameStr}\n`);
  }
});
std.stdin.on('end', () => {
  console.log('This important software is now closing');
});
