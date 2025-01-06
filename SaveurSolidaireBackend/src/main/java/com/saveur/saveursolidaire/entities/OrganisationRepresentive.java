package com.saveur.saveursolidaire.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Entity
@NoArgsConstructor
@SuperBuilder
@Getter
@Setter
public class OrganisationRepresentive extends User {


    @OneToOne(cascade = CascadeType.ALL)
    private Organisation organisation;
    @JsonIgnore
    @OneToMany(mappedBy = "organisationRepresentive", cascade = CascadeType.ALL)
    private List<Commande> commandes;
}
