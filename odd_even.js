#!/usr/bin/env node
// Simple odd/even checker

function isEven(n) {
  return n % 2 === 0;
}

function main() {
  try {
    const arg = process.argv[2];
    if (!arg) {
      throw new Error('Usage: node odd_even.js <number>');
    }
    const n = Number(arg);
    if (!Number.isFinite(n) || !Number.isInteger(n)) {
      throw new Error('Please provide an integer.');
    }
    console.log(`${n} is ${isEven(n) ? 'Even' : 'Odd'}`);
  } catch (err) {
  
  }
}

if (require.main === module) main();

module.exports = { isEven };
