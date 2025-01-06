package com.saveur.saveursolidaire.repositories;

import com.saveur.saveursolidaire.entities.OrganisationRepresentive;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrganisationRepresentativeRepo extends JpaRepository<OrganisationRepresentive,Integer> {
}
