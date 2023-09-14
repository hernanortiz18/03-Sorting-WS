function bubbleSort(array) {
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let pos = i;
        array = swap(array, pos);
      }
    }
  }
  return array;
}
function swap(arr, num) {
  let ref = arr[num];
  arr[num] = arr[num + 1];
  arr[num + 1] = ref;
  return arr;
}

// source code 🍫
// const chocolate = {
//   masticar: function () {
//     return "ñami";
//   },
//   comerTodo: function () {
//     this.masticar();
//     this.masticar();
//     this.masticar();
//     return "me comí todo el chocolate";
//   },
// };
