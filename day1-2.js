const text = require("fs").readFileSync("./input.txt", "utf-8");
const data = text.split("\n").map(Number);

let res = 0,
  prevSum = data[0] + data[1] + data[2];
for (let i = 1; i < data.length - 2; i++) {
  let curSum = data[i] + data[i + 1] + data[i + 2];
  if (curSum > prevSum) res++;
  prevSum = curSum;
}

console.log(res);
