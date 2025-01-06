package com.saveur.saveursolidaire.controlllers;

import com.saveur.saveursolidaire.entities.Administrateur;
import com.saveur.saveursolidaire.repositories.AdministrateurRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/administrateur")
@RestController
@CrossOrigin("*")
public class AdministrateurController {
    @Autowired
    private AdministrateurRepo administrateurRepo;

    @GetMapping("/getbyid/{id}")
    public Administrateur getAdministrateur(@PathVariable Integer id) {
        return this.administrateurRepo.findById(id).orElse(null);
    }
}
