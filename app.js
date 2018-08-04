computeSumOfAllElements = (arr) => {
    let suma = 0;//se indica que la variable suma compeiza en cero
    
    for (let num = 0; num < arr.length; num++ ) { //Se itera la variable num por el largo del array
      suma += arr[num]; //se concatena la variable suma con el array num
    }
    return suma;
  }
  
  //ejemplo
  let result = computeSumOfAllElements([2,3,5,8,13]);
  console.log(result);