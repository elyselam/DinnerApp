package com.ex.yummy.web;

import com.ex.yummy.entities.Preferences;
import com.ex.yummy.services.PreferenceFilter;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@CrossOrigin(origins = "https://localhost:4200")
@RestController
@RequestMapping()
public class PreferenceController {
    private ObjectMapper obMap;
    private PreferenceFilter filter;

    @Autowired
    public PreferenceController(ObjectMapper obMap, PreferenceFilter filter) {
        this.obMap = obMap;
        this.filter = filter;
    }

    @PostMapping(path = "/preferences/findPreferences")
    public Preferences findPreference(HttpServletRequest request, HttpServletResponse response){
        String user_name = request.getParameter("user_name");
        Preferences user_pref = filter.getInfo(user_name);
        if (user_pref != null){
            System.out.println("Find User Pref Successful");
            return user_pref;
        }
        else if (user_pref == null) System.out.println("Find User Pref unsuccessful");
        return null;
    }
    @PostMapping(path = "/preferences/savePreferences")
    public void savePreference(HttpServletRequest request, HttpServletResponse response){
        Preferences preferences;
        try{
            preferences = obMap.readValue(request.getInputStream(), Preferences.class);
            filter.saveInfo(preferences);

        }catch(IOException e){
            e.printStackTrace();
        }
    }


}
