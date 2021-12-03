const text = require("fs").readFileSync("./input2.txt", "utf-8");
const data = text.split("\n").map((str) => str.split(" "));

let x = 0,
  y = 0,
  aim = 0;

for (let i = 0; i < data.length; i++) {
  let dir, num;
  [dir, num] = data[i];
  if (dir[0] === "f") {
    x += parseInt(num);
    y += parseInt(num) * aim;
  } else if (dir[0] === "d") {
    aim += parseInt(num);
  } else {
    aim -= parseInt(num);
  }
}

console.log(x * y);
