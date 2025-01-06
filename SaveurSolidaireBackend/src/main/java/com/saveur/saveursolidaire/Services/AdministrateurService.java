package com.saveur.saveursolidaire.Services;

import com.saveur.saveursolidaire.entities.Administrateur;
import com.saveur.saveursolidaire.repositories.AdministrateurRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdministrateurService {
    @Autowired
    private AdministrateurRepo administrateurRepository;

    public Administrateur getbyid(Integer id) {
        return administrateurRepository.getById(id);
    }

}
