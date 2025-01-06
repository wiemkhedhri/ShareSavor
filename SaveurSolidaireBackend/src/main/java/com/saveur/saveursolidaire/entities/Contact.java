package com.saveur.saveursolidaire.entities;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;


    private String senderEmail;

    private String subject;

    private String message;

    @Column(nullable = false)
    private LocalDateTime date;

    @ManyToOne
    @JoinColumn(name = "entreprise_id", nullable = false)
    private Entreprise entreprise;

    @Override
    public String toString() {
        return "Contact{" +
                "id=" + id +
                ", senderEmail='" + senderEmail + '\'' +
                ", subject='" + subject + '\'' +
                ", message='" + message + '\'' +
                ", date=" + date +
                ", entreprise=" + (entreprise != null ? entreprise.getName() : "null") +
                '}';
    }
}