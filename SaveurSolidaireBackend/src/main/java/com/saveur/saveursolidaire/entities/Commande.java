package com.saveur.saveursolidaire.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class Commande {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Integer id;
    private Float couttotal ;
    private Date date_commande ;

    @OneToOne
    @JoinColumn(name = "panier_id", referencedColumnName = "id")
    @JsonBackReference
    private Panier panier;

    @ManyToOne
    @JoinColumn(name = "organisation_representive_id")
    @JsonIgnore
    private OrganisationRepresentive organisationRepresentive;
}
