package com.ex.yummy.dao;

import com.ex.yummy.entities.Preferences;

public interface PreferenceDao {
    void savePreference(Preferences preference);//Save User's preference.
    Preferences getPreferenceByName(String user_name);
//    void updatePreference(String user_name); //Update User's preference
}
