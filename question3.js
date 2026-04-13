function isPalindrome(num) {
    let str = num.toString();
    return str === str.split('').reverse().join('');
}

let N = Number(prompt("Enter N:"));
let K = Number(prompt("Enter K:"));

let found = -1;

for (let X = 0; X <= 100000; X++) {
    let val = N + X;

    if (val % K === 0 && isPalindrome(val)) {
        found = X;
        break;
    }
}

alert(found);