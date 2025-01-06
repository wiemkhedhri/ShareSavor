package com.saveur.saveursolidaire.Services;

import com.saveur.saveursolidaire.entities.BuisinessRepresentive;
import com.saveur.saveursolidaire.entities.Entreprise;
import com.saveur.saveursolidaire.repositories.BuisinessRepositery;
import com.saveur.saveursolidaire.repositories.BuisinessRepresenRepo;
import com.saveur.saveursolidaire.repositories.PublciationRepositery;
import com.saveur.saveursolidaire.utils.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@Service
public class BuisinessService {
    @Autowired
    private BuisinessRepositery buisinessRepositery ;
    @Autowired
    private BuisinessRepresenRepo buisinessRepresenRepo ;
    @Autowired
    private PublciationRepositery publciationRepositery;
    @Autowired
    private ImageService imageService;

    public Entreprise saveBuisiness(Entreprise entreprise, MultipartFile file, Integer id) {
        String images = imageService.CreateNameImage(file);
        imageService.store(file, images);
        entreprise.setImage(images);

        BuisinessRepresentive buisinessRepresentive = buisinessRepresenRepo.findById(id).orElse(null);
        if (buisinessRepresentive == null) {
            throw new RuntimeException("BuisinessRepresentive not found for id: " + id);
        }
        entreprise.setBuisinessRepresentive(buisinessRepresentive);
        Entreprise savedEntreprise = buisinessRepositery.save(entreprise);
        buisinessRepresentive.setEntreprise(savedEntreprise);
        buisinessRepresenRepo.save(buisinessRepresentive);
        return savedEntreprise;
    }

    public ResponseEntity<Resource> getFile(String filename) {
        Resource file = imageService.loadFile(filename);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
                .body(file);
    }
    public Entreprise update(Entreprise entreprise , Integer id){
        entreprise.setId(id);
        Entreprise oldentreprise = buisinessRepositery.findById(id).orElse(null);
        entreprise.setName(entreprise.getName()==null? oldentreprise.getName(): entreprise.getName());
        entreprise.setEmail(entreprise.getEmail()==null? oldentreprise.getEmail(): entreprise.getEmail());
        entreprise.setNumerotel(entreprise.getNumerotel()==null? oldentreprise.getNumerotel(): entreprise.getNumerotel());
        entreprise.setLocation(entreprise.getLocation()==null? oldentreprise.getLocation(): entreprise.getLocation());
        entreprise.setImage(entreprise.getImage()==null? oldentreprise.getImage(): entreprise.getImage());
        entreprise.setType(entreprise.getType()==null? oldentreprise.getType(): entreprise.getType());
        entreprise.setDescription(entreprise.getDescription()==null? oldentreprise.getDescription(): entreprise.getDescription());
        entreprise.setBuisinessRepresentive(entreprise.getBuisinessRepresentive()==null? oldentreprise.getBuisinessRepresentive(): entreprise.getBuisinessRepresentive());

        return buisinessRepositery.saveAndFlush(entreprise);

    }
    public List<Map<String, Object>> getPublicationCountByEntreprise() {
        return publciationRepositery.countPublicationsByEntreprise();
    }

}
