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
    while (n-- > 0 && this.len > 0) {
      this.q.shift();
      this.len--;
    }
    console.log(this.q, this.len);
  }
}

let q = new Queue();
q.enq(1, 2, 3);
q.dq(4);
