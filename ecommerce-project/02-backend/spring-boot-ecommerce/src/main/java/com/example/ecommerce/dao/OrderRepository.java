package com.example.ecommerce.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;

import com.example.ecommerce.entity.Order;

@RestResource
public interface OrderRepository extends JpaRepository<Order, Long> {
  Page<Order> findByCustomerEmailOrderByDateCreatedDesc(@Param("email") String email, Pageable pageable);

  // select * from orders left outer join customer on
  // orders.customer_id=customer.id
  // where customer.email = :email
  // order by orders.date_created desc
  // http://localhost:8080/api/orders/search/findByCustomerEmail?email=neha@test.com
}
