package com.saveur.saveursolidaire.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class Publication {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private Integer quantitedisponible ;
    private String aliment ;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date datepublication ;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date date_expiration ;
    private Float prix_unitaire ;
    private String image ;
    private String type ;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="reprsentateur_id")
    private BuisinessRepresentive buisinessRepresentive ;





}
