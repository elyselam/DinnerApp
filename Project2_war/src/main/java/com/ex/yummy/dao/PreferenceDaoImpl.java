package com.ex.yummy.dao;

import com.ex.yummy.entities.Preferences;
import com.ex.yummy.entities.Users;
import com.ex.yummy.services.PreferenceFilter;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Configuration
@Transactional
@Repository("pref_dao")
public class PreferenceDaoImpl implements PreferenceDao {
    private static SessionFactory sessionFactory;


    @Autowired
    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    @Autowired
    public void setSessionFactory(SessionFactory sessionFactory){
        this.sessionFactory = sessionFactory;
    }

    @Override
    @Transactional
    public void savePreference(Preferences preference) {
        Session session = sessionFactory.getCurrentSession();
        session.persist(preference);
    }

    @Override
    public Preferences getPreferenceByName(String user_name) {
        Session session = this.sessionFactory.openSession();
        System.out.println(user_name);

        String hql = "From Preferences where user_name = :x";


        Query q = session.createQuery(hql);
        q.setString("x",user_name);
        Preferences user = (Preferences) q.list().get(0);
        session.close();
        return user;
    }

//    @Override
//    public void updatePreference(String user_name) {
//        Session session = this.sessionFactory.openSession();
//
//        String hql = "From Preferences where userName = :x";
//
//
//        Query q = session.createQuery(hql);
//        q.setString("x",user_name);
//        Preferences user = (Preferences) q.list().get(0);
//        session.close();
//        System.out.println("Update preference");
//    }


}
