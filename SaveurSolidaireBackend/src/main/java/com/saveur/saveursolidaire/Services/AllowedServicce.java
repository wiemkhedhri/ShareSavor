package com.saveur.saveursolidaire.Services;

import com.saveur.saveursolidaire.entities.Entreprise;
import com.saveur.saveursolidaire.entities.Publication;
import com.saveur.saveursolidaire.repositories.BuisinessRepositery;
import com.saveur.saveursolidaire.repositories.PublciationRepositery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AllowedServicce {
    @Autowired
    private BuisinessRepositery buisinessRepositery ;
    @Autowired
    private PublciationRepositery publciationRepositery ;

    public Page<Entreprise> getPaginatedItems(int page, int size) {
        return buisinessRepositery.findAll(PageRequest.of(page, size));
    }
    public Page<Publication> getAllPublication(int page, int size) {
        return publciationRepositery.findAll(PageRequest.of(page, size));
    }
    public Publication getPublicationById(Integer id){
        return publciationRepositery.findById(id).orElse(null) ;
    }
     public List<Entreprise> getAllEntreprise(){
        return buisinessRepositery.findAll();
     }

}
