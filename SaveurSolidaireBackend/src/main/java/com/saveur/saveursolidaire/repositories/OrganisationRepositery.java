package com.saveur.saveursolidaire.repositories;

import com.saveur.saveursolidaire.entities.Organisation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrganisationRepositery extends JpaRepository<Organisation , Integer> {

    Organisation findByOrganisationRepresentiveId(Integer id) ;
}
