package de.magnus.demo.controller;

import de.magnus.demo.model.AddUserDto;
import de.magnus.demo.model.User;
import de.magnus.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/user")
public class RankingController {

    private final UserService userService;

    @Autowired
    public RankingController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public User addUser(@RequestBody AddUserDto dto) {
        return this.userService.addUser(dto.getName());
    }

    @GetMapping
    public List<User> listUsers() {
        return userService.listUsers();
    }


}