package com.saveur.saveursolidaire.repositories;

import com.saveur.saveursolidaire.entities.PanierItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PanierItemRepositery extends JpaRepository<PanierItem , Integer> {
    List<PanierItem> findByPanierId(Integer id);
}
