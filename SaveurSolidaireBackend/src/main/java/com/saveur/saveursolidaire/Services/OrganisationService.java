package com.saveur.saveursolidaire.Services;

import com.saveur.saveursolidaire.entities.BuisinessRepresentive;
import com.saveur.saveursolidaire.entities.Entreprise;
import com.saveur.saveursolidaire.entities.Organisation;
import com.saveur.saveursolidaire.entities.OrganisationRepresentive;
import com.saveur.saveursolidaire.repositories.OrganisationRepositery;
import com.saveur.saveursolidaire.repositories.OrganisationRepresentativeRepo;
import com.saveur.saveursolidaire.utils.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class OrganisationService {
    @Autowired
    private OrganisationRepositery organisationRepositery ;
    @Autowired
    private ImageService imageService;
    @Autowired
    private OrganisationRepresentativeRepo organisationRepresentativeRepo ;

    public Organisation saveBuisiness(Organisation organisation, MultipartFile file, Integer id) {
        String images = imageService.CreateNameImage(file);
        imageService.store(file, images);
        organisation.setImage(images);

        OrganisationRepresentive organisationRepresentive = organisationRepresentativeRepo.findById(id).orElse(null);
        if (organisationRepresentive == null) {
            throw new RuntimeException("BuisinessRepresentive not found for id: " + id);
        }
        organisation.setOrganisationRepresentive(organisationRepresentive);
        Organisation savedOrrganisation = organisationRepositery.save(organisation);
        organisationRepresentive.setOrganisation(savedOrrganisation);

        organisationRepresentativeRepo.save(organisationRepresentive);

        return savedOrrganisation;
    }


    public Organisation update(Organisation organisation , Integer id) {
        organisation.setId(id);
        Organisation oldorganisation = organisationRepositery.findById(id).orElse(null);
        organisation.setName(organisation.getName() == null ? oldorganisation.getName() : organisation.getName());
        organisation.setEmail(organisation.getEmail() == null ? oldorganisation.getEmail() : organisation.getEmail());
        organisation.setNumerotel(organisation.getNumerotel() == null ? oldorganisation.getNumerotel() : organisation.getNumerotel());
        organisation.setLocation(organisation.getLocation() == null ? oldorganisation.getLocation() : organisation.getLocation());
        organisation.setImage(organisation.getImage() == null ? oldorganisation.getImage() : organisation.getImage());
        organisation.setOrganisationRepresentive(organisation.getOrganisationRepresentive() == null ? oldorganisation.getOrganisationRepresentive() : organisation.getOrganisationRepresentive());
        organisation.setPanier(organisation.getPanier() == null ? oldorganisation.getPanier() : organisation.getPanier());
        return organisationRepositery.saveAndFlush(organisation);
    }
    public Organisation getbyId(Integer id){
        return organisationRepositery.findById(id).orElse(null) ;
    }
}
