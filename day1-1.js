const text = require("fs").readFileSync("./input.txt", "utf-8");
const data = text.split("\n").map(Number);
let prev = data[0],
  res = 0;
for (let i = 1; i < data.length; i++) {
  if (data[i] > prev) res++;
  prev = data[i];
}
console.log(res);
