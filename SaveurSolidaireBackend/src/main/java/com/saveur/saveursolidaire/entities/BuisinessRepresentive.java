package com.saveur.saveursolidaire.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Entity
@NoArgsConstructor
@SuperBuilder
@Getter
@Setter
public class BuisinessRepresentive extends User {


    @JsonIgnore
    @OneToMany(mappedBy = "buisinessRepresentive")
    private List<Publication> publicationList ;


    @OneToOne(cascade = CascadeType.ALL)
        private Entreprise entreprise ;


}
