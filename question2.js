let N = Number(prompt("Enter N:"));
let seed = Number(prompt("Enter seed:"));

let current = N;

for (let i = 0; i < 3; i++) {
    if (current % 2 === 0) {
        current = current / 2 + seed;
    } else {
        current = current * 3 - seed;
    }
}

let str = current.toString();

if (current >= 100 && current <= 999 && Number(str[1]) === seed) {
    alert("YES, " + current);
} else {
    alert("NO, " + current);
}