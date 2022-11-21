class Array {
  constructor() {
    this.arr = [];
    this.length = 0;
  }
  push(...n) {
    this.arr = [...this.arr, ...n];
    this.length += n.length;
    console.log(this.arr);
  }
  pop() {
    this.arr.splice(this.arr.length - 1, 1);
    console.log(this.arr);
    this.length--;
  }
  top() {
    console.log(this.arr[this.arr.length - 1]);
  }
  print() {
    console.log(this.arr);
  }
  printReverse() {
    let rev = [];
    // console.log(this.arr);
    for (let i = 0; i < this.length; i++) {
      rev[i] = this.arr[this.length - i - 1];
    }
    console.log(rev);
  }
  size() {
    console.log(this.length);
  }
}

let arr = new Array();
// console.log(arr);
arr.push(1, 2, 3);
// arr.push(2);
// arr.push(3);

// arr.pop();
// arr.top();
// arr.print();
arr.printReverse();
arr.size();
