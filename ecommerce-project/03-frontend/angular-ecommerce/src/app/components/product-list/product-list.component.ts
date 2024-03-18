import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  currentCatgoryId: number = 1;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }
  //Method is invoked once u subscribe
  listProducts() {
    //check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    if (hasCategoryId) {
      //get the "id" params string. convert string to a number using "+" symbol
      this.currentCatgoryId = +this.route.snapshot.paramMap.get('id')!;
    } else {
      //not category id available ... default to category id 1
      this.currentCatgoryId = 1;
    }
    //now get the products for the given category id
    this.productService
      .getProductList(this.currentCatgoryId)
      .subscribe((data) => {
        //Assign Results to the Product array declared above
        this.products = data;
      });
  }
}
