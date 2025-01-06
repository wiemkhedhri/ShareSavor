package com.saveur.saveursolidaire.controlllers;

import com.saveur.saveursolidaire.Services.ContactService;
import com.saveur.saveursolidaire.entities.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/contact")
@RestController
@CrossOrigin("*")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @GetMapping
    public ResponseEntity<List<Contact>> getAllContacts() {
        List<Contact> contacts = contactService.getAllContacts();
        return ResponseEntity.ok(contacts);
    }

    @GetMapping("/entreprise/{entrepriseId}")
    public ResponseEntity<List<Contact>> getContactsByEntreprise(@PathVariable Integer entrepriseId) {
        List<Contact> contacts = contactService.getContactsByEntreprise(entrepriseId);
        return ResponseEntity.ok(contacts);
    }
}