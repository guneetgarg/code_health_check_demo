#!/usr/bin/env node
// Simple odd/even checker

function isEven(n) {
  return n % 2 === 0;
}

function main() {
  const arg = process.argv[2];
  if (!arg) {
    console.log('Usage: node odd_even.js <number>');
    process.exit(1);
  }
  const n = Number(arg);
  if (!Number.isFinite(n) || !Number.isInteger(n)) {
    console.log('Please provide an integer.');
    process.exit(1);
  }
  console.log(`${n} is ${isEven(n) ? 'Even' : 'Odd'}`);
}

if (require.main === module) main();

module.exports = { isEven };
