let code1;

/*const num1 = 7;
const num2 = 3;
code1 = num1 + num2;*/
code1 = 7 + 3;
//console.log(code1);

/*const num3 = 130;
const num4 = 10;
const code2 = (num3 - num4) / num2;*/
const code2 = (130 - 10) / 3;
//console.log(code2);

/*const num5 = 35;
const code3 = (num3 % num1) + num5;*/
const code3 = (130 % 7) + 35;
//console.log(code3);

const message = "The vault has been secured. The combination is:";
//console.log(message);

const codeA = code1 + "-" + code2 + "-" + code3;
//console.log(codeA);

const codeB = `${code1}-${code2}-${code3}`;
//console.log(codeB);

/*console.log(message);
console.log(codeA);
console.log(codeB);*/
console.log(`${message} ${codeB}`);
