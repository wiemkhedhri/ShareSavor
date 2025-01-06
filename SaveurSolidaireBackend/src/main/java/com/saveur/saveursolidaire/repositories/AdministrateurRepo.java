package com.saveur.saveursolidaire.repositories;

import com.saveur.saveursolidaire.entities.Administrateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdministrateurRepo extends JpaRepository<Administrateur,Integer> {
}
