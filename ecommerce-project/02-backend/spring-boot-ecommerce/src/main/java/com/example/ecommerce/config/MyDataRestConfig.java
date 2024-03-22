package com.example.ecommerce.config;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.example.ecommerce.entity.Product;
import com.example.ecommerce.entity.ProductCategory;

import jakarta.persistence.EntityManager;
import jakarta.persistence.metamodel.EntityType;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

        private EntityManager entityManager;

        @Autowired
        public MyDataRestConfig(EntityManager theEntityManager) {
                entityManager = theEntityManager;
        }

        @Override
        public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
                // TODO Auto-generated method stub
                RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config, cors);
                HttpMethod[] theUnsupportedActions = {
                                HttpMethod.PUT,
                                HttpMethod.POST,
                                HttpMethod.DELETE
                };

                // disable HTTP Methods for Product
                config.getExposureConfiguration().forDomainType(Product.class)
                                .withItemExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                                .withCollectionExposure(
                                                (metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions));

                // disable HTTP Methods for ProductCategory
                config.getExposureConfiguration().forDomainType(ProductCategory.class)
                                .withItemExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                                .withCollectionExposure(
                                                (metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions));

                // call an internal helper method
                exposeIds(config);
        }

        private void exposeIds(RepositoryRestConfiguration config) {
                // expose entity ids

                // get a list of all entity classes from the entity manager
                Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();

                // create an array of the entity types
                List<Class> entityClasses = new ArrayList<>();

                // get the entity types for the entities
                for (EntityType temEntityType : entities) {
                        entityClasses.add(temEntityType.getJavaType());
                }

                // expose entity ids for the array of entity/ domain types
                Class[] domainTypes = entityClasses.toArray(new Class[0]);
                config.exposeIdsFor(domainTypes);
        }

}
