package com.saveur.saveursolidaire.Services;

import com.saveur.saveursolidaire.entities.Panier;
import com.saveur.saveursolidaire.entities.PanierItem;
import com.saveur.saveursolidaire.entities.Publication;
import com.saveur.saveursolidaire.repositories.PanierItemRepositery;
import com.saveur.saveursolidaire.repositories.PanierRepositery;
import com.saveur.saveursolidaire.repositories.PublciationRepositery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PanierItemService {
    @Autowired
    private PanierItemRepositery panierItemRepositery ;
    @Autowired
    private PanierRepositery panierRepositery ;
    @Autowired
    private PublciationRepositery publciationRepositery ;

    public PanierItem addItem(Integer id_product,Integer id_panier,PanierItem panieritem){
        Publication publication= publciationRepositery.findById(id_product).orElse(null);
        panieritem.setPublication(publication);
        Integer availableQuantity = publication.getQuantitedisponible() ;
        publication.setQuantitedisponible(availableQuantity-panieritem.getQuantity());
        publciationRepositery.saveAndFlush(publication);
        Panier p = panierRepositery.findById(id_panier).orElse(null);
        panieritem.setPanier(p);
       return panierItemRepositery.save(panieritem) ;
    }
    public void deletePanierItemById(Integer id) {
        if (panierItemRepositery.existsById(id)) {
            panierItemRepositery.deleteById(id);
        } else {
            throw new RuntimeException("Panier item not found with id: " + id);
        }
    }
    public PanierItem updateItemQuantity(Integer itemId, Integer newQuantity) {
        Optional<PanierItem> optionalItem = panierItemRepositery.findById(itemId);
        if (optionalItem.isPresent()) {
            PanierItem panierItem = optionalItem.get();
            panierItem.setQuantity(newQuantity);
            return panierItemRepositery.save(panierItem); // Save the updated item
        } else {
            throw new RuntimeException("Panier item not found with id: " + itemId);
        }
    }
}
