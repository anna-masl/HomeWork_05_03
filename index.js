const userNumberInput = prompt('Write down whole number');

if (!userNumberInput?.trim()) {
  alert('Error: nothing was entered');
} else if (!Number.isInteger(+userNumberInput)) {
  alert('Error: not a whole number');
} else {
  const squareRoot = Math.sqrt(+userNumberInput);
  const num = squareRoot >100 ? 100 : squareRoot;
  let str = '';

  for (let i = 1; i < num; i++) {
    str += i + ' ';
  }
  console.log(str.trim());
}
