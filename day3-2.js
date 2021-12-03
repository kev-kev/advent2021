const text = require("fs").readFileSync("./input3.txt", "utf-8");

let data = text.split("\n");

let more = data,
  less = data;
// count amount of ones at index i of each input string and determine if more than half
//  if that index has more ones, set data=data.filter(num => num[i] === 1))
//  otherwise, filter out the zeros
for (let i = 0; i < 12; i++) {
  if (more.length === 1) break;
  let half = Math.round(more.length / 2),
    curCount = 0;
  for (let j = 0; j < more.length; j++) {
    if (more[j][i] == 1) curCount++;
  }
  if (curCount >= half) {
    more = more.filter((num) => num[i] == 1);
  } else {
    more = more.filter((num) => num[i] == 0);
  }
}

for (let i = 0; i < 12; i++) {
  if (less.length === 1) break;
  let half = Math.round(less.length / 2),
    curCount = 0;
  for (let j = 0; j < less.length; j++) {
    if (less[j][i] == 1) curCount++;
  }
  if (curCount >= half) {
    less = less.filter((num) => num[i] == 0);
  } else {
    less = less.filter((num) => num[i] == 1);
  }
}
console.log(parseInt(more, 2) * parseInt(less, 2));
