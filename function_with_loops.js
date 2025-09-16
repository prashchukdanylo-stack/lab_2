
const average = (a, b) => {
  return (a+b)/2;
}

const square = (x) => {
  return x = x*x;
}

const cube = (y) => {
  return y = y*y*y;
}

const calculate = () => {
  const array = [];
  for (let i = 0; i<=9; i++){
    const sq = square(i);
    const cb = cube(i);
    const av = average(sq, cb);
    
    console.log(`i = ${i}, square = ${sq}, cube = ${cb}, average = ${av}.`)

    array.push(av);
  }
}

calculate();