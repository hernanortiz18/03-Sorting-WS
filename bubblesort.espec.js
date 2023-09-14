describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it("debería espiar la función swap", function () {
    spyOn(window, "swap").and.callThrough();
    const array = [3, 1, 2];
    bubbleSort(array);
    expect(swap.calls.count()).toEqual(2);
  });
  it("numeros desordenados", function () {
    spyOn(window, "swap").and.callThrough();
    const array = [5, 15, 1, 3, 4, 18, 65, 34, 19, 22, 36];
    bubbleSort(array);
    expect(swap.calls.count()).toEqual(12);
    expect(bubbleSort([5, 15, 1, 3, 4, 18, 65, 34, 19, 22, 36])).toEqual([
      1, 3, 4, 5, 15, 18, 19, 22, 34, 36, 65,
    ]);
  });
});

// testing code
// describe("", function () {
//   it("comer todo el chocolate debería llevar exactamente 3 masticadas", function () {
//     spyOn(chocolate, "masticar").and.callThrough();
//     // callThrough le dice al spy que utilice el método original chocolate['masticar'],
//     // mientras que `callFake` haría una copia.
//     chocolate.comerTodo();
//     expect(chocolate.masticar.calls.count()).toEqual(3);
//   });
// });
