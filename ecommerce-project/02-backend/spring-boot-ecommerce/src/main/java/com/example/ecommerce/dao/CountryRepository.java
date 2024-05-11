package com.example.ecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


import com.example.ecommerce.entity.Country;


@RepositoryRestResource
public interface CountryRepository extends JpaRepository<Country, Integer>{
    
}
