var x = 0;
arr = {};
arr.__proto__.push = function (n) {
  arr[x] = n;
  x++;
};
arr.__proto__.pop = function () {
  delete arr[--x];
};
arr.__proto__.top = function () {
  let y = x - 1;
  console.log(arr[y]);
};

arr.__proto__.print = function () {
  let printOut = "";
  for (var i = 0; i < x; i++) {
    printOut += " " + arr[i];
  }
  console.log(printOut);
};

arr.__proto__.printReverse = function () {
  let printOut = "";
  for (var i = x - 1; i >= 0; i--) {
    printOut += arr[i] + " ";
  }
  console.log(printOut);
};

arr.__proto__.size = function () {
  console.log(x);
};
