package com.saveur.saveursolidaire.Services;

import com.saveur.saveursolidaire.entities.Contact;
import com.saveur.saveursolidaire.entities.Entreprise;
import com.saveur.saveursolidaire.repositories.BuisinessRepositery;
import com.saveur.saveursolidaire.repositories.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private BuisinessRepositery entrepriseRepository;

    public Contact createContact(Integer entrepriseId, Contact contact) {
        Optional<Entreprise> entrepriseOptional = entrepriseRepository.findById(entrepriseId);
        if (entrepriseOptional.isPresent()) {
            Entreprise entreprise = entrepriseOptional.get();
            contact.setEntreprise(entreprise); // Set the associated Entreprise
            contact.setDate(LocalDateTime.now()); // Set the current date
            return contactRepository.save(contact);
        } else {
            throw new IllegalArgumentException("Entreprise not found with id: " + entrepriseId);
        }
    }

    // Get all contact messages
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    // Get all contact messages for a specific entreprise
    public List<Contact> getContactsByEntreprise(Integer entrepriseId) {
        return contactRepository.findByEntreprise_BuisinessRepresentiveId(entrepriseId);
    }
}