package com.saveur.saveursolidaire.repositories;

import com.saveur.saveursolidaire.entities.OrganisationRepresentive;
import com.saveur.saveursolidaire.entities.Publication;
import com.saveur.saveursolidaire.entities.User;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface PublciationRepositery extends JpaRepository<Publication,Integer> {

    @Query("SELECT u FROM Publication u WHERE u.buisinessRepresentive.id = :id")
    Page<Publication> findByRepresentative(Integer id , Pageable pageable );

    @Query("SELECT new map(e.name as entrepriseName, COUNT(p) as publicationCount) " +
            "FROM Publication p JOIN p.buisinessRepresentive b JOIN b.entreprise e " +
            "GROUP BY e.name")
    List<Map<String, Object>> countPublicationsByEntreprise();
}
