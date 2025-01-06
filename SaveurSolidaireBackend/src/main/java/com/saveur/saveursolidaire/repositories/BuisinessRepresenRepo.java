package com.saveur.saveursolidaire.repositories;

import com.saveur.saveursolidaire.entities.BuisinessRepresentive;
import com.saveur.saveursolidaire.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface BuisinessRepresenRepo extends JpaRepository<BuisinessRepresentive,Integer> {
    BuisinessRepresentive findByEmail(String email);
    BuisinessRepresentive findByEntrepriseId(Integer id);

}
