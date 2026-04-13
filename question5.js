let N = Number(prompt("Enter N:"));
let seed = Number(prompt("Enter seed:"));

let divisor = seed + 2;
let sum = 0;
let m = 0;

while (sum < N) {
    m++;
    if (m % divisor !== 0) {
        sum += m;
    }
}

alert(m + " " + sum);