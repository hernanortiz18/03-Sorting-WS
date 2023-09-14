function split(wholeArray) {
  const middleI = Math.floor(wholeArray.length / 2);
  let firstHalf, secondHalf;

  if (wholeArray.length % 2 === 0) {
    firstHalf = wholeArray.slice(0, middleI);
    secondHalf = wholeArray.slice(middleI);
  } else {
    firstHalf = wholeArray.slice(0, middleI + 1);
    secondHalf = wholeArray.slice(middleI + 1);
  }

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let arraySort = [];
  let primero1 = arr1.shift();
  let primero2 = arr2.shift();
  while (primero1 !== undefined || primero2 !== undefined) {
    if (
      (primero1 === undefined || primero1 > primero2) &&
      primero2 !== undefined
    ) {
      arraySort.push(primero2);
      primero2 = arr2.shift();
    }
    if (
      (primero2 === undefined || primero2 > primero1) &&
      primero1 !== undefined
    ) {
      arraySort.push(primero1);
      primero1 = arr1.shift();
    }
  }

  return arraySort;
}

function mergeSort(array) {
  let arrNuevo = [];
  let arrAux = [];
  let arrAux2 = null;
  arrNuevo = split(array);
  while (arrNuevo.length < array.length) {
    arrAux = split(arrNuevo.shift());
    if (arrAux[0] !== undefined) arrNuevo.push(arrAux[0]);
    if (arrAux[1] !== undefined) arrNuevo.push(arrAux[1]);
  }

  while (arrNuevo.length > 1) {
    arrAux = arrNuevo.shift();
    arrAux2 = arrNuevo.shift();
    arrNuevo.push(merge(arrAux, arrAux2));
  }

  return arrNuevo[0];
}
