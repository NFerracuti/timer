const args = process.argv.slice(2);
const arr = args.map(Number)

arr.forEach(timer => {
  if (Number.isInteger(timer) && timer > 0) {
    setTimeout(() => {
      process.stdout.write('\x07')
    }, timer * 1000);
  }
});
