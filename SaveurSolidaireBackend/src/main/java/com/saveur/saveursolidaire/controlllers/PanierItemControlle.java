package com.saveur.saveursolidaire.controlllers;

import com.saveur.saveursolidaire.Services.PanierItemService;
import com.saveur.saveursolidaire.entities.Panier;
import com.saveur.saveursolidaire.entities.PanierItem;
import com.saveur.saveursolidaire.repositories.PanierItemRepositery;
import com.saveur.saveursolidaire.repositories.PanierRepositery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.relational.core.sql.In;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/panierItem")
@RestController
@CrossOrigin("*")
public class PanierItemControlle {
    @Autowired
    private PanierItemRepositery panierItemRepositery;
    @Autowired
    private PanierRepositery panierRepositery;
    @Autowired
    private PanierItemService panierItemService;

    @PostMapping("/addItem/{idproduit}/{idpanier}")
    public PanierItem additem(@RequestBody PanierItem panierItem, @PathVariable Integer idproduit, @PathVariable Integer idpanier) {

        return panierItemService.addItem(idproduit, idpanier, panierItem);
    }

    @GetMapping("/getByPanier/{idPanier}")
    public List<PanierItem> getbypanier(@PathVariable Integer idPanier) {
        return panierItemRepositery.findByPanierId(idPanier);
    }

    @DeleteMapping("/delete/{id}")
    public void delte(@PathVariable Integer id) {
        PanierItem panierItem = panierItemRepositery.findById(id).orElse(null);
        panierItemRepositery.delete(panierItem);
    }
    @PutMapping("updateQuantity/{id}")
    public ResponseEntity<PanierItem> updateItemQuantity(@PathVariable Integer id, @RequestBody Integer newQuantity) {
        try {
            PanierItem updatedItem = panierItemService.updateItemQuantity(id, newQuantity);
            return ResponseEntity.ok(updatedItem);
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body(null);
        }
    }
}
