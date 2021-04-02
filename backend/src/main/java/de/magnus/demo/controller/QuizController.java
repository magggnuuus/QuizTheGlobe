package de.magnus.demo.controller;

import de.magnus.demo.ApiCountry.ApiCountryData;
import de.magnus.demo.service.ApiCountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("questions")
public class QuizController {


    private final ApiCountryService apiCountryService;

    @Autowired
    public QuizController(ApiCountryService apiCountryService) {
        this.apiCountryService = apiCountryService;
    }

    @GetMapping
    public List<ApiCountryData> getQuestionData(){

        return apiCountryService.callApiForData();
    }



}
