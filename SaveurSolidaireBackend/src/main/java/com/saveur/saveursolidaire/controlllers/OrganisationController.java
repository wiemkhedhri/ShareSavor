package com.saveur.saveursolidaire.controlllers;

import com.saveur.saveursolidaire.Services.OrganisationService;
import com.saveur.saveursolidaire.Services.PanierService;
import com.saveur.saveursolidaire.entities.Entreprise;
import com.saveur.saveursolidaire.entities.Organisation;
import com.saveur.saveursolidaire.entities.OrganisationRepresentive;
import com.saveur.saveursolidaire.entities.Panier;
import com.saveur.saveursolidaire.repositories.OrganisationRepositery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RequestMapping("/Organisation")
@RestController
@CrossOrigin("*")
public class OrganisationController {
    @Autowired
    private OrganisationService organisationService ;
    @Autowired
    private OrganisationRepositery organisationRepositery ;
    @Autowired
    private PanierService panierService ;

    @PostMapping("/saveOrganisation/{id}")
    public ResponseEntity<Organisation> saveOrganisation(Organisation organisation , @RequestParam MultipartFile file , @PathVariable Integer id){

      Organisation organisation1=   this.organisationService.saveBuisiness(organisation,file,id) ;
        Panier p = panierService.AddPanier(organisation1.getId());
        organisation1.setPanier(p);
        organisationRepositery.saveAndFlush(organisation1) ;
    return ResponseEntity.ok(organisation);
    }

    @GetMapping("/GetByRepresentative/{id}")
    public Organisation GetByRepresentative(@PathVariable Integer id){
        return organisationRepositery.findByOrganisationRepresentiveId(id) ;
    }
    @PutMapping("/updateOrganisation/{id}")
    public Organisation UpdatOrganisation(@RequestBody Organisation organisation, @PathVariable Integer id){
        return organisationService.update(organisation,id) ;
    }
    @GetMapping("/getbyid/{id}")
    public Organisation getbyid(@PathVariable Integer id){
        return organisationService.getbyId(id);
    }
    @GetMapping("/getnumberoforganisation")
    public Integer gettotal(){
        return this.organisationRepositery.findAll().size();
    }
    @GetMapping("/getall")
    public List<Organisation> getAll(){
        return organisationRepositery.findAll();
    }
}
