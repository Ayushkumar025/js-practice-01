
let a = true;
let b = false;
let c = true;

let expr1 = a && b || c;
console.log("a && b || c: " + expr1); 

let expr2 = (a || b) && !c;
console.log("(a || b) && !c: " + expr2);

let expr3 = a && (b || c) && !b;
console.log("a && (b || c) && !b: " + expr3); 

let expr4 = !a || !b || !c;
console.log("!a || !b || !c: " + expr4);
