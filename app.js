computeSumOfAllElements = (arr) => {
    // your code here
    let suma = 0;
    
    for ( var num = 0; num < arr.length; num++ ) {
      suma += arr[num];
    }
    return suma;
  }
  
  var result = computeSumOfAllElements([2,3,5,8,13]);
  console.log(result);