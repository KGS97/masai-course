arr = [19, 17, 18];
arr.__proto__.myMap = function (fn) {
  newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  console.log(newArr);
};

arr.__proto__.myFilter = function (fn) {
  newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
};
arr.__proto__.myReduce = function () {
  let accumulator = 0;
  for (var i = 0; i < arr.length; i++) {
    accumulator += arr[i];
  }
  console.log(accumulator);
};
arr.__proto__.myforEach = function () {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    accumulator += arr[i];
  }
  console.log(newArr);
};
arr.myFilter(fn);

function fn(n) {
  return n <= 100;
}
