let base = Number(prompt("Enter base:"));
let distance = Number(prompt("Enter distance:"));
let minutesLate = Number(prompt("Enter minutesLate:"));
let seed = Number(prompt("Enter seed:"));

let fare = base + 7 * distance;

if (minutesLate > 15) {
    fare += 20;
}

if (distance > 10) {
    fare += Math.floor(0.1 * fare);
}

if (seed % 2 === 1) {
    fare -= seed;
} else {
    fare += seed;
}

// Round up to nearest multiple of 5
fare = Math.ceil(fare / 5) * 5;

alert(fare);