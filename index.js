let code1;

const num1 = 7;
const num2 = 3;
code1 = num1 + num2;
console.log(code1);

const num3 = 130;
const num4 = 10;
const code2 = (num3 - num4) / num2;
console.log(code2);

const num5 = 35;
const code3 = (num3 % num1) + num5;
console.log(code3);

const message = "The vault has been secured, The combination is:";
console.log(message);

const codeA = code1 + "-" + code2 + "-" + code3;
console.log(codeA);

const codeB = `${code1}-${code2}-${code3}`;
console.log(codeB);

console.log(message);
console.log(codeA);
console.log(codeB);
