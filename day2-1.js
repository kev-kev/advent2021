const text = require("fs").readFileSync("./input2.txt", "utf-8");
const data = text.split("\n").map((str) => str.split(" "));

let x = 0,
  y = 0;

for (let i = 0; i < data.length; i++) {
  let dir, num;
  [dir, num] = data[i];
  if (dir[0] === "f") {
    x += parseInt(num);
  } else if (dir[0] === "d") {
    y += parseInt(num);
  } else {
    y -= parseInt(num);
  }
}

console.log(x * y);
