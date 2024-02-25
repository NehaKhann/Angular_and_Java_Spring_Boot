"use strict";
var Customer = /** @class */ (function () {
    function Customer(theFisrt, theLast) {
        this._firstName = theFisrt;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (firstName) {
            this._firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Neha", "Areez");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
