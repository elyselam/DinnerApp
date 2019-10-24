package com.ex.yummy.services;

import com.ex.yummy.dao.FunSearchDao;
import com.ex.yummy.dao.PreferenceDao;
import com.ex.yummy.entities.Preferences;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("preferenceFilter")
public class PreferenceFilter {
    FunSearchDao dao;
    PreferenceDao pref_dao;

    public PreferenceFilter(FunSearchDao fun_dao, PreferenceDao pref_dao) {
        this.dao = fun_dao;
        this.pref_dao = pref_dao;
    }

    //Method to filter User's Preferences
    public void saveInfo(Preferences preference){
        pref_dao.savePreference(preference);
    }
    public Preferences getInfo(String userName) {
        Preferences user_pref = pref_dao.getPreferenceByName(userName);
        return user_pref;
    }

}