package com.saveur.saveursolidaire.repositories;

import com.saveur.saveursolidaire.entities.Panier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PanierRepositery extends JpaRepository<Panier ,Integer> {
    Panier findByOrganisationId(Integer id) ;
}
