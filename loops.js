let start;
let end;
function range(start, end) {
  const array = []; 
   if (end<start) {
    console.log('not exist');
    return 0;
  };
  
  for (let i = start; i<=end; i++) {
    array.push(i);
  }
  console.log(array);
  return array;
}

 


range(15,30);