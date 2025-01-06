package com.saveur.saveursolidaire.controlllers;

import com.saveur.saveursolidaire.Services.PublicationService;
import com.saveur.saveursolidaire.entities.Publication;
import com.saveur.saveursolidaire.repositories.PublciationRepositery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.relational.core.sql.In;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RequestMapping("/publication")
@RestController
@CrossOrigin("*")
public class PublciationController {
    @Autowired
    private PublicationService publicationService ;
    @Autowired
    private PublciationRepositery publciationRepositery ;

    @PostMapping("/addPublication/{id}")
    public Publication savepublication( Publication publication , @RequestParam MultipartFile file , @PathVariable Integer id){
        return this.publicationService.savepublication(publication,file,id) ;
    }
    @GetMapping("/findByRepresentative/{id}")
    public Page<Publication> findbyRepresentative(@PathVariable Integer id , @RequestParam(defaultValue = "0") int page,
                                                  @RequestParam(defaultValue = "3") int size){
        return publicationService.findbyRepresentative(id,page,size) ;
    }
    @DeleteMapping("/delete/{id}")
    public void deletePublication(@PathVariable Integer id){
        publicationService.deletepublication(id);
    }
    @GetMapping("/getnumberofpublication")
    public Integer gettotal(){
        return this.publciationRepositery.findAll().size();
    }
    @GetMapping("/getpublication")
    public List<Publication> getAllPublication(){
        return this.publciationRepositery.findAll();
    }
}
