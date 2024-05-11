var Customer = /** @class */ (function () {
    function Customer(theFisrt, theLast) {
        this.firstName = theFisrt;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer = new Customer("Areez", "Jaan");
// myCustomer.firstName = "Areez";
// myCustomer.lastName = "Jaan";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
