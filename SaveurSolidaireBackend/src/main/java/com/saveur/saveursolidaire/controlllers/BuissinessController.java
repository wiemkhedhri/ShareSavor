package com.saveur.saveursolidaire.controlllers;

import com.saveur.saveursolidaire.Services.BuisinessService;
import com.saveur.saveursolidaire.entities.BuisinessRepresentive;
import com.saveur.saveursolidaire.entities.Entreprise;
import com.saveur.saveursolidaire.entities.User;
import com.saveur.saveursolidaire.repositories.BuisinessRepositery;
import com.saveur.saveursolidaire.repositories.BuisinessRepresenRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RequestMapping("/business")
@RestController
@CrossOrigin("*")
public class BuissinessController {
    @Autowired
    private BuisinessService buisinessService ;
    @Autowired
    private BuisinessRepositery buisinessRepo ;

    @PostMapping("saveBuisiness")
    public ResponseEntity<Entreprise> saveEntreprise(Entreprise entreprise , @RequestParam MultipartFile file , Integer id){
        this.buisinessService.saveBuisiness(entreprise,file,id) ;
        return ResponseEntity.ok(entreprise);

    }
    @GetMapping("/findByRepresentative/{id}")
    public Entreprise findByRepresentative(@PathVariable Integer id){
        return buisinessRepo.findByBuisinessRepresentiveId(id) ;
    }
    @GetMapping("/files/{filename:.+}")
    public ResponseEntity<Resource> getFile(@PathVariable String filename) {
        return  buisinessService.getFile(filename);
    }
    @PutMapping("/update/{id}")
    public Entreprise updateentreprise(@RequestBody Entreprise entreprise , @PathVariable Integer id){
        return buisinessService.update(entreprise,id);
    }
    @GetMapping("/getnumberofbuisiness")
    public Integer gettotal(){
        return this.buisinessRepo.findAll().size();
    }
    @GetMapping("/publications-count")
    public List<Map<String, Object>> getPublicationCountByEntreprise() {
        return buisinessService.getPublicationCountByEntreprise();
    }
    @GetMapping("/getallbuisiness")
    public List<Entreprise> getAllBuisiness(){
        return buisinessRepo.findAll();
    }

}
