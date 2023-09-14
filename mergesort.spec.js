describe("Merge", function () {
  it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    expect(merge([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
    expect(merge([1, 3, 5, 7, 11, 25], [2, 6, 10])).toEqual([
      1, 2, 3, 5, 6, 7, 10, 11, 25,
    ]);
  });
});
describe("Mergesort", function () {
  it("devuelve el array ordenado", function () {
    expect(mergeSort([1, 3, 4, 0, 8, 5, 95, 29])).toEqual([
      0, 1, 3, 4, 5, 8, 29, 95,
    ]);
  });
});

describe("Split", function () {
  it("divide un arreglo con cantidad de elementos par", function () {
    const array = [5, 2, 4, 1];
    const [firstHalfEven, secondHalfEven] = split(array);
    expect(firstHalfEven).toEqual([5, 2]);
    expect(secondHalfEven).toEqual([4, 1]);
  });

  it("divide un arreglo con cantidad de elementos impar", function () {
    const array = [5, 2, 4, 1, 10];
    const [firstHalfOdd, secondHalfOdd] = split(array);
    expect(firstHalfOdd).toEqual([5, 2, 4]);
    expect(secondHalfOdd).toEqual([1, 10]);
  });
});
