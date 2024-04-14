import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderHistory } from '../common/order-history';

@Injectable({
  providedIn: 'root',
})
export class OrderHistoryService {
  private orderUrl = 'http://localhost:8080/api/orders';
  constructor(private httpClient: HttpClient) {}
  getOrderHistory(theEmail: string): Observable<GetResponseOrderHistory> {
    //need to build URL based on customer email
    const orderHistoryUrl = `${this.orderUrl}/search/findByCustomerEmail?emil=${theEmail}`;
    return this.httpClient.get<GetResponseOrderHistory>(orderHistoryUrl);
  }
}
//unwrap the json from spring Data rest _embedded entry
//map an array of order history items
interface GetResponseOrderHistory {
  _embedded: {
    orders: OrderHistory[];
  };
}
