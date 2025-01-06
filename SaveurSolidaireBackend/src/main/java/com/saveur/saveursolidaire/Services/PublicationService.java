package com.saveur.saveursolidaire.Services;

import com.saveur.saveursolidaire.entities.BuisinessRepresentive;
import com.saveur.saveursolidaire.entities.Publication;
import com.saveur.saveursolidaire.repositories.BuisinessRepresenRepo;
import com.saveur.saveursolidaire.repositories.PublciationRepositery;
import com.saveur.saveursolidaire.utils.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class PublicationService {
    @Autowired
    private ImageService imageService;
    @Autowired
    private PublciationRepositery publciationRepositery ;
    @Autowired
    private BuisinessRepresenRepo buisinessRepresenRepo ;

    public Publication savepublication(Publication publication, MultipartFile file  ,Integer idrepre ){
        String images = imageService.CreateNameImage(file);
        imageService.store(file, images);
        BuisinessRepresentive buisinessRepresentive= buisinessRepresenRepo.findById(idrepre).orElse(null) ;
        publication.setBuisinessRepresentive(buisinessRepresentive);
        publication.setImage(images);
        return  publciationRepositery.save(publication) ;
    }

    public Page<Publication> findbyRepresentative(Integer id , int page , int size){
        Pageable pageable = PageRequest.of(page, size);
      return   publciationRepositery.findByRepresentative(id,pageable) ;
    }
    public void deletepublication(Integer id){
        publciationRepositery.deleteById(id);
    }
}
