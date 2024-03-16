package com.example.ecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.ecommerce.entity.Product;
import org.springframework.web.bind.annotation.*;;

//Long is a Primary Key
//Product is the entity
@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product,Long> {
    
}
