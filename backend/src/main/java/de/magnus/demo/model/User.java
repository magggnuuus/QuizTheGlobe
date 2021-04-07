package de.magnus.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "ranking")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private String name;
    private int score;
}
