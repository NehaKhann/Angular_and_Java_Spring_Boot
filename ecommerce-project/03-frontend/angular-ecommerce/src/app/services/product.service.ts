import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/products';
  constructor(private httpClient: HttpClient) {}

  //Map the json data from spring data rest to product array
  getProductList(): Observable<Product[]> {
    return this.httpClient
      .get<GetResponse>(this.baseUrl)
      .pipe(map((response) => response._embedded.products));
  }
}
/*This interface defines the structure of the response expected from the API.
It specifies that the API response will have an _embedded property, which contains a products array of type Product[]*/
interface GetResponse {
  _embedded: {
    products: Product[];
  };
}
