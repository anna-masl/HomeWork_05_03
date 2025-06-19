const userNumberInput = prompt('Write down whole number');

if (!userNumberInput?.trim()) {
  alert('Error: nothing was entered');
} else if (!Number.isInteger(+userNumberInput)) {
  alert('Error: not a whole number');
} else {
  const squareRoot = Math.sqrt(+userNumberInput);
  let str = '';

  for (let i = 1; i < squareRoot; i++) {
    str += i + ' ';
  }
  console.log(str.trim());
}
