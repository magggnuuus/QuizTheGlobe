package de.magnus.demo.db;

import org.apache.catalina.User;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface UserMongoDb extends PagingAndSortingRepository<User, String> {


    @Override
    List<User> findAll();
}