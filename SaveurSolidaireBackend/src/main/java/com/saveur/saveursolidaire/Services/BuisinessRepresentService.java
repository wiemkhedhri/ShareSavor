package com.saveur.saveursolidaire.Services;

import com.saveur.saveursolidaire.entities.BuisinessRepresentive;
import com.saveur.saveursolidaire.entities.Entreprise;
import com.saveur.saveursolidaire.repositories.BuisinessRepresenRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BuisinessRepresentService {

    @Autowired
    private BuisinessRepresenRepo buisinessRepresenRepo ;

    public BuisinessRepresentive updateBuisiness(BuisinessRepresentive buisinessRepresentive , Integer id){
        buisinessRepresentive.setId(id);
        BuisinessRepresentive oldrepresentative = buisinessRepresenRepo.findById(id).orElse(null);
        buisinessRepresentive.setFullName(buisinessRepresentive.getFullName()==null? oldrepresentative.getFullName(): buisinessRepresentive.getFullName());
        buisinessRepresentive.setEmail(buisinessRepresentive.getEmail()==null? oldrepresentative.getEmail(): buisinessRepresentive.getEmail());
        buisinessRepresentive.setPassword(buisinessRepresentive.getPassword()==null? oldrepresentative.getPassword(): buisinessRepresentive.getPassword());
        buisinessRepresentive.setNumerotelephone(buisinessRepresentive.getNumerotelephone()==null? oldrepresentative.getNumerotelephone(): buisinessRepresentive.getNumerotelephone());
        buisinessRepresentive.setStatus(buisinessRepresentive.getStatus()==null? oldrepresentative.getStatus(): buisinessRepresentive.getStatus());
        buisinessRepresentive.setRole(buisinessRepresentive.getRole()==null? oldrepresentative.getRole(): buisinessRepresentive.getRole());
        buisinessRepresentive.setImage(buisinessRepresentive.getImage()==null? oldrepresentative.getImage(): buisinessRepresentive.getImage());
        buisinessRepresentive.setCreatedAt(buisinessRepresentive.getCreatedAt()==null? oldrepresentative.getCreatedAt(): buisinessRepresentive.getCreatedAt());
        buisinessRepresentive.setUpdatedAt(buisinessRepresentive.getUpdatedAt()==null? oldrepresentative.getUpdatedAt(): buisinessRepresentive.getUpdatedAt());
        buisinessRepresentive.setPublicationList(buisinessRepresentive.getPublicationList()==null? oldrepresentative.getPublicationList(): buisinessRepresentive.getPublicationList());
        buisinessRepresentive.setEntreprise(buisinessRepresentive.getEntreprise()==null? oldrepresentative.getEntreprise(): buisinessRepresentive.getEntreprise());
        return  buisinessRepresenRepo.saveAndFlush(buisinessRepresentive) ;
    }
}
