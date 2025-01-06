package com.saveur.saveursolidaire.Services;

import com.saveur.saveursolidaire.entities.BuisinessRepresentive;
import com.saveur.saveursolidaire.entities.OrganisationRepresentive;
import com.saveur.saveursolidaire.repositories.OrganisationRepresentativeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrganisationRepresentativeService {
    @Autowired
    private OrganisationRepresentativeRepo organisationRepresentativeRepo;

    public OrganisationRepresentive updateOrganisation(OrganisationRepresentive organisationRepresentive , Integer id){
        organisationRepresentive.setId(id);
        OrganisationRepresentive oldoraganirepre = organisationRepresentativeRepo.findById(id).orElse(null);
        organisationRepresentive.setFullName(organisationRepresentive.getFullName()==null? oldoraganirepre.getFullName(): organisationRepresentive.getFullName());
        organisationRepresentive.setEmail(organisationRepresentive.getEmail()==null? oldoraganirepre.getEmail(): organisationRepresentive.getEmail());
        organisationRepresentive.setPassword(organisationRepresentive.getPassword()==null? oldoraganirepre.getPassword(): organisationRepresentive.getPassword());
        organisationRepresentive.setNumerotelephone(organisationRepresentive.getNumerotelephone()==null? oldoraganirepre.getNumerotelephone(): organisationRepresentive.getNumerotelephone());
        organisationRepresentive.setStatus(organisationRepresentive.getStatus()==null? oldoraganirepre.getStatus(): organisationRepresentive.getStatus());
        organisationRepresentive.setRole(organisationRepresentive.getRole()==null? oldoraganirepre.getRole(): organisationRepresentive.getRole());
        organisationRepresentive.setImage(organisationRepresentive.getImage()==null? oldoraganirepre.getImage(): organisationRepresentive.getImage());
        organisationRepresentive.setCreatedAt(organisationRepresentive.getCreatedAt()==null? oldoraganirepre.getCreatedAt(): organisationRepresentive.getCreatedAt());
        organisationRepresentive.setUpdatedAt(organisationRepresentive.getUpdatedAt()==null? oldoraganirepre.getUpdatedAt(): organisationRepresentive.getUpdatedAt());

        organisationRepresentive.setOrganisation(organisationRepresentive.getOrganisation()==null?oldoraganirepre.getOrganisation():organisationRepresentive.getOrganisation());
        return  organisationRepresentativeRepo.saveAndFlush(organisationRepresentive) ;
    }
}
