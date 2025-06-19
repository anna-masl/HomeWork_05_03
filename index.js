const curencyDollar = 26;

let str = '';
for (let i = 10; i <= 100; i+=10) {
  let price = i*curencyDollar;
  str += `${i} $ = ${price} grn \n`;
}
console.log(str.trim());

