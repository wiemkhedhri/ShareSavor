package com.saveur.saveursolidaire.repositories;

import com.saveur.saveursolidaire.entities.Commande;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface CommandeRepo  extends JpaRepository<Commande , Integer> {
    List<Commande> findByOrganisationRepresentiveId(Integer organisationRepresentiveId);

    @Query("SELECT new map(c.panier.organisation.name as organisationName, AVG(c.couttotal) as moyenneAchats) " +
            "FROM Commande c " +
            "JOIN c.panier p " +
            "JOIN p.organisation o " +
            "GROUP BY o.name")
    List<Map<String, Object>> findAveragePurchaseByOrganisation();
}
