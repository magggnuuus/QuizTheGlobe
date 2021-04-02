package de.magnus.demo.service;

import de.magnus.demo.ApiCountry.ApiCountryData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

import java.util.Arrays;
import java.util.List;

@Service

public class ApiCountryService {

    private final RestTemplate restTemplate;
    public String CountryApiUrl = "https://restcountries.eu/rest/v2/all";

    @Autowired
    public ApiCountryService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public List<ApiCountryData> callApiForData() {
        try {
            ResponseEntity<ApiCountryData[]> response = restTemplate.getForEntity(CountryApiUrl, ApiCountryData[].class);
            return Arrays.asList(response.getBody());
        } catch (ResponseStatusException exception) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "restapi unavailable: " + exception);
        }


    }

}
