package com.saveur.saveursolidaire.controlllers;

import com.saveur.saveursolidaire.Services.PanierService;
import com.saveur.saveursolidaire.entities.Panier;
import com.saveur.saveursolidaire.repositories.PanierRepositery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.relational.core.sql.In;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/panier")
@RestController
@CrossOrigin("*")
public class PanierController {
    @Autowired
    private PanierService panierService ;
    @Autowired
    private PanierRepositery panierRepositery ;
    
    @PostMapping("/AddPanier/{id}")
    public Panier addPanier(@PathVariable Integer id){
        return panierService.AddPanier(id) ;
    }

    @GetMapping("/GetByOrganisation/{id}")
    public Panier getbyOrganisatio(@PathVariable Integer id){
        return panierRepositery.findByOrganisationId(id) ;
    }
}
