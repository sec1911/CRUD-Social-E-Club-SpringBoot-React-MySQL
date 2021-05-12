package com.hf.eclub.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "rate")

public class Rate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;

    @Column(name="user_id")
    private Long userId;

    @Column(name="club_id")
    private Long clubId;

    @Column(name="rate")
    private double rate;

    @Column(name="comment")
    private String comment;

    public Rate() {
    }

    public Rate(Long userId, Long clubId, double rate, String comment) {
        this.userId = userId;
        this.clubId = clubId;
        this.rate = rate;
        this.comment = comment;
    }
}
