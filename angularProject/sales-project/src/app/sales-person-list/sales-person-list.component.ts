import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css'],
})
export class SalesPersonListComponent implements OnInit {
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Neha', 'Khan', 'neha@gmail.com', 50000),
    new SalesPerson('Areez', 'Arsalan', 'areez@gmail.com', 40000),
    new SalesPerson('Neha', 'Areez', 'nehaareez@gmail.com', 90000),
    new SalesPerson('John', 'Smith', 'john@gmail.com', 60000),
  ];
  constructor() {}

  ngOnInit(): void {}
}
