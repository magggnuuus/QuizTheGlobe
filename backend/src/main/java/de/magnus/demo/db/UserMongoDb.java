package de.magnus.demo.db;


import de.magnus.demo.model.User;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface UserMongoDb extends PagingAndSortingRepository<User, String> {

    List<User> findAll();
}