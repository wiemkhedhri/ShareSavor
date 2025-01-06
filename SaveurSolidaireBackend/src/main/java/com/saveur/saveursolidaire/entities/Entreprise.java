package com.saveur.saveursolidaire.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.saveur.saveursolidaire.entities.enums.TypeEntreprise;
import jakarta.persistence.*;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class Entreprise {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Integer id;
    @Column(unique = true, length = 100, nullable = false)
    private String email;
    private String name;
    private Integer numerotel ;
    private String location ;
    private String image ;
    private TypeEntreprise type ;
    private String description ;
    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "Entrepresentateur_id")
    private BuisinessRepresentive buisinessRepresentive ;


}
