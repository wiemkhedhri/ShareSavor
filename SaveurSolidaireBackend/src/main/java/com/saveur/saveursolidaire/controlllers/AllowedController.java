package com.saveur.saveursolidaire.controlllers;

import com.saveur.saveursolidaire.Services.AllowedServicce;
import com.saveur.saveursolidaire.Services.ContactService;
import com.saveur.saveursolidaire.Services.PublicationService;
import com.saveur.saveursolidaire.entities.BuisinessRepresentive;
import com.saveur.saveursolidaire.entities.Contact;
import com.saveur.saveursolidaire.entities.Entreprise;
import com.saveur.saveursolidaire.entities.Publication;
import com.saveur.saveursolidaire.repositories.BuisinessRepositery;
import com.saveur.saveursolidaire.repositories.BuisinessRepresenRepo;
import com.saveur.saveursolidaire.repositories.PublciationRepositery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/allowed")
@RestController
@CrossOrigin("*")
public class AllowedController {
    @Autowired
    private BuisinessRepositery buisinessRepo ;
    @Autowired
    private AllowedServicce allowedServicce ;
    @Autowired
    private PublicationService publicationService ;
    @Autowired
    private BuisinessRepresenRepo buisinessRepresenRepo ;
    @Autowired
    private ContactService contactService ;

    @GetMapping("/getFirsttwo")
    public List<Entreprise> findFirsttwo(){
        return buisinessRepo.findFirst2Entreprises();
    }
    @GetMapping("/getLasttwo")
    public List<Entreprise> findLasttwo(){
        return buisinessRepo.findLast2Entreprises();
    }
    @GetMapping("/getallBuisines")
    public Page<Entreprise> getAll(@RequestParam(defaultValue = "0") int page,
                                   @RequestParam(defaultValue = "3") int size){
        return  allowedServicce.getPaginatedItems(page, size) ;
    }
    @GetMapping("/findByRepresentative/{id}")
    public Page<Publication> findbyRepresentative(@PathVariable Integer id , @RequestParam(defaultValue = "0") int page,
                                                  @RequestParam(defaultValue = "3") int size){
        return publicationService.findbyRepresentative(id,page,size) ;
    }
    @GetMapping("/getRepresenattiveByEntreprise/{id}")
    public BuisinessRepresentive findRepresentativeByEntreprise(@PathVariable Integer id){
        return buisinessRepresenRepo.findByEntrepriseId(id);
    }
@GetMapping("/getAllPublication")
    public Page<Publication> getAllPublication(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "3") int size){
        return allowedServicce.getAllPublication(page, size) ;
}
@GetMapping("/getPublicationById/{id}")
    public Publication getPublicationById(@PathVariable Integer id){
        return allowedServicce.getPublicationById(id) ;
}
@GetMapping("/getallentreprise")
    public List<Entreprise> getAllEntreprise(){
        return allowedServicce.getAllEntreprise();
    }
    @PostMapping("/createcontact")
    public ResponseEntity<Contact> createContact(
            @RequestParam Integer entrepriseId,
            @RequestBody Contact contact) {
        Contact savedContact = contactService.createContact(entrepriseId, contact);
        return ResponseEntity.ok(savedContact);
    }

}
