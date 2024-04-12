package com.example.ecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.ecommerce.entity.ProductCategory;
//productCategory is json name (you can give any name)
//Path name can be any
@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {

}
// Usage of collectionResourceRel: When clients consume the API and 
// Spring Data REST returns a collection of ProductCategory entities,
// it will embed 
// them in the response JSON under a key named productCategory.