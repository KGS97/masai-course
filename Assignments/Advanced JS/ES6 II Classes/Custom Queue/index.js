class Queue {
  constructor() {
    this.q = [];
    this.len = 0;
  }
  enq(...n) {
    this.q = [...this.q, ...n];
    this.len += n.length;
    console.log(this.q, this.len);
  }
  dq(n) {
    for (let i = 0; i < n; i++) {
      this.q.shift();
    }
    this.len -= n;
    console.log(this.q, this.len);
  }
}
let q = new Queue();
