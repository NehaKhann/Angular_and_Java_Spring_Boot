class Customer {
  firstName: string;
  lastName: string;
  constructor(theFisrt: string, theLast: string) {
    this.firstName = theFisrt;
    this.lastName = theLast;
  }
}
let myCustomer = new Customer("Areez", "Jaan");
// myCustomer.firstName = "Areez";
// myCustomer.lastName = "Jaan";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
