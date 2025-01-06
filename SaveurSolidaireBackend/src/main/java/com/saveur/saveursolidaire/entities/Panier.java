package com.saveur.saveursolidaire.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class Panier {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Integer id;



    @OneToOne
    @JoinColumn(name = "organisation_id")
    private Organisation organisation;



    @JsonIgnore
    @OneToMany(mappedBy = "panier", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<PanierItem> panierItems;

    @OneToOne(mappedBy = "panier", cascade = CascadeType.ALL)
    @JsonManagedReference
    private Commande commande;
}
