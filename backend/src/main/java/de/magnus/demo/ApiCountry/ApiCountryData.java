package de.magnus.demo.ApiCountry;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor

public class ApiCountryData {
    private String name;
    private String capital;
    private String subregion;
    // private String flag;
    private String population;
    //  private List<String> topLevelDomain;
    //  private List<String> borders; braucht neue if verschachtelung (inseln) if no boarder = island
// public Optional<User> getUserByUsername(String username) {
//        return userDb.findById(username);
//    }

}

