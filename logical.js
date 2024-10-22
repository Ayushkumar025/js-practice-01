// (5 > 3) && (8 < 12)
let expr1 = (5 > 3) && (8 < 12);
console.log("(5 > 3) && (8 < 12): " + expr1); // true

// (7 === "7") || (3 === 3)
let expr2 = (7 === "7") || (3 === 3);
console.log('(7 === "7") || (3 === 3): ' + expr2); // true

// !(true && false)
let expr3 = !(true && false);
console.log("!(true && false): " + expr3); // true

// (false || true) && !(3 > 5)
let expr4 = (false || true) && !(3 > 5);
console.log("(false || true) && !(3 > 5): " + expr4); // true
