package com.example.ecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.ecommerce.entity.Product;

//Long is a Primary Key
//Product is the entity
public interface ProductRepository extends JpaRepository<Product,Long> {
    
}
