package com.saveur.saveursolidaire.controlllers;

import com.saveur.saveursolidaire.Services.BuisinessRepresentService;
import com.saveur.saveursolidaire.entities.BuisinessRepresentive;
import com.saveur.saveursolidaire.repositories.BuisinessRepresenRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/buisinesrepr")
@RestController
@CrossOrigin("*")
public class BuisinesRepresController {
    @Autowired
    private BuisinessRepresenRepo buisinessRepresenRepo ;
    @Autowired
    private BuisinessRepresentService buisinessRepresentService ;

    @PostMapping("findByEmail")
    public BuisinessRepresentive findbyemail(@RequestBody String email){
        return buisinessRepresenRepo.findByEmail(email) ;
    }
    @PutMapping("/update/{id}")
    public BuisinessRepresentive updateRepresentative(@RequestBody BuisinessRepresentive buisinessRepresentive , @PathVariable Integer id){
     return    buisinessRepresentService.updateBuisiness(buisinessRepresentive , id) ;
    }
    @GetMapping("/getById/{id}")
    public BuisinessRepresentive findByid(@PathVariable Integer id){
        return this.buisinessRepresenRepo.findById(id).orElse(null) ;
    }
}
