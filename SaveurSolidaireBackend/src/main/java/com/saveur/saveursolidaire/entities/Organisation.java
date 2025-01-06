package com.saveur.saveursolidaire.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class Organisation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Integer id;
    @Column(unique = true, length = 100, nullable = false)
    private String email;
    private Integer numerotel ;
    private String location ;
    private String image ;

    private String name ;
    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "Orgrepresentateur_id")
    private OrganisationRepresentive organisationRepresentive ;

    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "panier_id")
    private Panier panier;



}
