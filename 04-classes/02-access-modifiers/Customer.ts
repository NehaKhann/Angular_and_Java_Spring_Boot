class Customer {
  private _firstName: string;
  private _lastName: string;

  constructor(theFisrt: string, theLast: string) {
    this._firstName = theFisrt;
    this._lastName = theLast;
  }
  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(firstName: string) {
    this._firstName = firstName;
  }
  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
}
let myCustomer = new Customer("Neha","Areez");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
