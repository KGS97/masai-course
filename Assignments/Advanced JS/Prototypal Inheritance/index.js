function createObj(name, price, market) {
  this.name = name;
  this.market = market;
  this.price = price;
}
var budgetEV = {
  segment: "budget",
  fuel: "Electricity",
};
var highEndEV = {
  segment: "High End",
  fuel: "Electricity",
};
obj1 = new createObj("Tata Tiago EV", "8.49", "India");
obj1.__proto__ = budgetEV;
console.log(obj1);
obj2 = Object.create(highEndEV);
obj2 = {
  name: "Tata Nexon EV Prime",
  price: "14.99",
  market: "India",
};
console.log(obj2);
