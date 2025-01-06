package com.saveur.saveursolidaire.controlllers;

import com.saveur.saveursolidaire.Services.OrganisationRepresentativeService;
import com.saveur.saveursolidaire.entities.OrganisationRepresentive;
import com.saveur.saveursolidaire.repositories.OrganisationRepresentativeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/organisationRepresenative")
@RestController
@CrossOrigin("*")
public class OrganisationRepresentativeController {
    @Autowired
    private OrganisationRepresentativeRepo organisationRepresentativeRepo ;
    @Autowired
    private OrganisationRepresentativeService organisationRepresentativeService;

    @GetMapping("/FindById/{id}")
    public OrganisationRepresentive FindById(@PathVariable Integer id){
        return organisationRepresentativeRepo.findById(id).orElse(null);
    }
    @PutMapping("/update/{id}")
    public OrganisationRepresentive update(@PathVariable Integer id, @RequestBody OrganisationRepresentive organisationRepresentive){
        return organisationRepresentativeService.updateOrganisation(organisationRepresentive, id);
    }
}
