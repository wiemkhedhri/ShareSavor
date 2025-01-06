package com.saveur.saveursolidaire.Services;

import com.saveur.saveursolidaire.entities.Organisation;
import com.saveur.saveursolidaire.entities.Panier;
import com.saveur.saveursolidaire.entities.Publication;
import com.saveur.saveursolidaire.repositories.OrganisationRepositery;
import com.saveur.saveursolidaire.repositories.PanierRepositery;
import com.saveur.saveursolidaire.repositories.PublciationRepositery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PanierService {

    @Autowired
    private PublciationRepositery publciationRepositery ;
    @Autowired
    private OrganisationRepositery organisationRepositery ;
    @Autowired
    private PanierRepositery panierRepositery ;



    public Panier AddPanier(Integer OragnisationId){
        Panier p = new Panier() ;
        Organisation organisation = organisationRepositery.findById(OragnisationId).orElse(null) ;
        p.setOrganisation(organisation);
        return panierRepositery.save(p);

    }

}
