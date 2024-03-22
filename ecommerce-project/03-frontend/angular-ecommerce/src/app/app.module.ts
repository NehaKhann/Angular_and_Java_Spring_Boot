import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { RouterModule, Routes } from '@angular/router';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';

//order of routes is important specific - generic
const routes: Routes = [
  //create new instance of component
  // { path: 'category/:id', component: ProductListComponent },
  {path: 'category/:id/:name', component: ProductListComponent},
  { path: 'category', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  //This is generic wildcard
  { path: '**', redirectTo: '/products', pathMatch: 'full' },
];
//configuring the router on line 23
@NgModule({
  declarations: [AppComponent, ProductListComponent, ProductCategoryMenuComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule, HttpClientModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
