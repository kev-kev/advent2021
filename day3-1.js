const text = require("fs").readFileSync("./input3.txt", "utf-8");
const data = text.split("\n");

const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[0].length; j++) {
    counts[j] += parseInt(data[i][j]);
  }
}
const half = Math.floor(data.length / 2);
let gamma = new Array(12),
  epsilon = new Array(12);

for (let i = 0; i < counts.length; i++) {
  if (counts[i] > half) {
    gamma[i] = 1;
    epsilon[i] = 0;
  } else {
    gamma[i] = 0;
    epsilon[i] = 1;
  }
}

gamma = gamma.join("");
epsilon = epsilon.join("");
console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));

//create an arr that counts ones in each place
// given ['011010010110', '101110100110'], we get count=[1, 1, 2, 1, 2, 0, 1, 1, 0, 2, 2, 0]
// once we finish adding the ones, go through count
// if count[i] > Math.floor(data.length / 2) we have more ones, else more zeros
// if more ones,
