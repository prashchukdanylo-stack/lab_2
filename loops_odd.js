let start;
let end;
function range(start, end) {
  const array = []; 
   if (end<start) {
    console.log('not exist');
    return 0;
  };
  
  for (let i = start; i<=end; i++) {
    
    if (i %2 !== 0){
      array.push(i);
    }
    
  }
  console.log(array);
  return array;
}

 


range(16,30);