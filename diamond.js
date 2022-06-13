
const diamond = (n) => {

const limit = n;
let count = 1;

Array(limit).fill(0).reduce((acc, _, index) => {
  const spaces = ' '.repeat(
    Math.abs(limit - count) / 2
  );
  const stars = '*'.repeat(count) + '\n';
  index >= Math.floor(limit / 2)
    ? count -= 2
    : count += 2;
  return `${acc}${spaces}${stars}`;
}, '\n');
}

console.log(diamond(5));
// diamond(15);