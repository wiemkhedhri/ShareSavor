package com.saveur.saveursolidaire.controlllers;

import com.saveur.saveursolidaire.Services.BuisinessService;
import com.saveur.saveursolidaire.entities.BuisinessRepresentive;
import com.saveur.saveursolidaire.entities.OrganisationRepresentive;
import com.saveur.saveursolidaire.entities.User;
import com.saveur.saveursolidaire.repositories.BuisinessRepresenRepo;
import com.saveur.saveursolidaire.repositories.OrganisationRepresentativeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Random;

@RequestMapping("fileController")
@RestController
@CrossOrigin("*")
public class GetFilesController {
    @Autowired
    private BuisinessRepresenRepo buisinessRepresenRepo ;
    @Autowired
    private OrganisationRepresentativeRepo organisationRepresentativeRepo ;
    private final Path rootLocation = Paths.get("upload-images");

      @Autowired
      private BuisinessService buisinessService ;
    @GetMapping("/files/{filename:.+}")
    public ResponseEntity<Resource> getFile(@PathVariable String filename) {
        return  buisinessService.getFile(filename);
    }
    @PutMapping("/updateimage/{id}")
    public BuisinessRepresentive updateImage(@RequestParam("file") MultipartFile file, @PathVariable Integer id) {

        BuisinessRepresentive represnetative = buisinessRepresenRepo.findById(id).orElse(null) ;
        try {
            String fileName = Integer.toString(new Random().nextInt(1000000000));
            String ext = file.getOriginalFilename().substring(file.getOriginalFilename().indexOf('.'), file.getOriginalFilename().length());
            String name = file.getOriginalFilename().substring(0, file.getOriginalFilename().indexOf('.'));
            String original = name + fileName + ext;
            Files.copy(file.getInputStream(), this.rootLocation.resolve(original));
            represnetative.setImage(original);
        } catch (Exception e) {
            throw new RuntimeException("FAIL Error IMAGE check the back-end server !");
        }
        return buisinessRepresenRepo.saveAndFlush(represnetative);

    }
    @PutMapping("/updateimageOrganisation/{id}")
    public OrganisationRepresentive updateImageorganisation(@RequestParam("file") MultipartFile file, @PathVariable Integer id) {

        OrganisationRepresentive represnetative = organisationRepresentativeRepo.findById(id).orElse(null) ;
        try {
            String fileName = Integer.toString(new Random().nextInt(1000000000));
            String ext = file.getOriginalFilename().substring(file.getOriginalFilename().indexOf('.'), file.getOriginalFilename().length());
            String name = file.getOriginalFilename().substring(0, file.getOriginalFilename().indexOf('.'));
            String original = name + fileName + ext;
            Files.copy(file.getInputStream(), this.rootLocation.resolve(original));
            represnetative.setImage(original);
        } catch (Exception e) {
            throw new RuntimeException("FAIL Error IMAGE check the back-end server !");
        }
        return organisationRepresentativeRepo.saveAndFlush(represnetative);

    }
}
