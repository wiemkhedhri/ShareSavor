package com.saveur.saveursolidaire.repositories;

import com.saveur.saveursolidaire.entities.Entreprise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BuisinessRepositery extends JpaRepository<Entreprise , Integer> {

  Entreprise findByBuisinessRepresentiveId(Integer id);

  @Query("SELECT e FROM Entreprise e ORDER BY e.id ASC limit 2")
  List<Entreprise> findFirst2Entreprises();
  @Query("SELECT e FROM Entreprise e ORDER BY e.id DESC limit 2")
  List<Entreprise> findLast2Entreprises();

}
