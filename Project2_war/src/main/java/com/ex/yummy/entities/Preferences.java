package com.ex.yummy.entities;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;

import static javax.persistence.CascadeType.ALL;

@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity
@Table

public class Preferences {
    @Id
    @Column(name="preference_id")
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column()

    private int mexican=0, chinese=0, japanese=0, thai=0, greek=0, indian=0,
            caribbean=0, italian=0, german=0, korean=0, american=0, deli=0,
            vietnamese=0, breakfast=0, soulFood=0, bakery=0;



    @OneToOne(cascade = ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "user_name", referencedColumnName = "user_name")
    private  Users user;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUser_name() {
        return user.getUserName();
    }



    public int getMexican() {
        return mexican;
    }

    public void setMexican(int mexican) {
        this.mexican = mexican;
    }

    public int getChinese() {
        return chinese;
    }

    public void setChinese(int chinese) {
        this.chinese = chinese;
    }

    public int getJapanese() {
        return japanese;
    }

    public void setJapanese(int japanese) {
        this.japanese = japanese;
    }

    public int getThai() {
        return thai;
    }

    public void setThai(int thai) {
        this.thai = thai;
    }

    public int getGreek() {
        return greek;
    }

    public void setGreek(int greek) {
        this.greek = greek;
    }

    public int getIndian() {
        return indian;
    }

    public void setIndian(int indian) {
        this.indian = indian;
    }

    public int getCaribbean() {
        return caribbean;
    }

    public void setCaribbean(int caribbean) {
        this.caribbean = caribbean;
    }

    public int getItalian() {
        return italian;
    }

    public void setItalian(int italian) {
        this.italian = italian;
    }

    public int getGerman() {
        return german;
    }

    public void setGerman(int german) {
        this.german = german;
    }

    public int getKorean() {
        return korean;
    }

    public void setKorean(int korean) {
        this.korean = korean;
    }

    public int getAmerican() {
        return american;
    }

    public void setAmerican(int american) {
        this.american = american;
    }

    public int getDeli() {
        return deli;
    }

    public void setDeli(int deli) {
        this.deli = deli;
    }

    public int getVietnamese() {
        return vietnamese;
    }

    public void setVietnamese(int vietnamese) {
        this.vietnamese = vietnamese;
    }

    public int getBreakfast() {
        return breakfast;
    }

    public void setBreakfast(int breakfast) {
        this.breakfast = breakfast;
    }

    public int getSoulFood() {
        return soulFood;
    }

    public void setSoulFood(int soulFood) {
        this.soulFood = soulFood;
    }

    public int getBakery() {
        return bakery;
    }

    public void setBakery(int bakery) {
        this.bakery = bakery;
    }
}
