package com.example.ecommerce.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.example.ecommerce.entity.Product;

import org.springframework.web.bind.annotation.*;;

//Long is a Primary Key
//Product is the entity
@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product, Long> {
    Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);
    // select * from product where category_id = ?
    // /search/findByCategoryId?id=1

    Page<Product> findByNameContaining(@Param("name") String name, Pageable pageable);
    // select * from Product p where p.name like concat('%',:name,'%')
    // /search/findByNameContaining?name=python


    //http://localhost:8080/api/products/search/findByCategoryId?id=1&page=0&size=5
}

