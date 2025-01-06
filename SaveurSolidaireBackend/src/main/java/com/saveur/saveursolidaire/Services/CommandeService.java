package com.saveur.saveursolidaire.Services;

import com.saveur.saveursolidaire.entities.Commande;
import com.saveur.saveursolidaire.entities.OrganisationRepresentive;
import com.saveur.saveursolidaire.entities.Panier;
import com.saveur.saveursolidaire.entities.PanierItem;
import com.saveur.saveursolidaire.repositories.CommandeRepo;
import com.saveur.saveursolidaire.repositories.OrganisationRepresentativeRepo;
import com.saveur.saveursolidaire.repositories.PanierItemRepositery;
import com.saveur.saveursolidaire.repositories.PanierRepositery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class CommandeService {

    @Autowired
    private CommandeRepo commandeRepository;
    @Autowired
    private PanierRepositery panierRepositery;
    @Autowired
    private OrganisationRepresentativeRepo organisationRepresentiverepo;
    @Autowired
    private PanierItemRepositery panierItemRepository;

    public Commande createCommande(Integer panierId, Float totalCost,Integer id) {
        OrganisationRepresentive organisationRepresentive = organisationRepresentiverepo.findById(id).orElse(null);
        Panier panier = panierRepositery.findById(panierId).orElseThrow(() -> new RuntimeException("Panier not found"));

        Commande commande = Commande.builder()
                .panier(panier)
                .couttotal(totalCost)
                .date_commande(new Date())
                .build();
        commande.setOrganisationRepresentive(organisationRepresentive);
        return commandeRepository.save(commande);
    }
    public List<Commande> getCommandesByOrganisationRepresentiveId(Integer organisationRepresentiveId) {
        return commandeRepository.findByOrganisationRepresentiveId(organisationRepresentiveId);
    }

    public List<PanierItem> getPanierItemsByCommandeId(Integer commandeId) {
        // First, retrieve the Commande by ID
        Optional<Commande> commandeOptional = commandeRepository.findById(commandeId);
        if (commandeOptional.isPresent()) {
            // Get the Panier ID associated with this Commande
            Integer panierId = commandeOptional.get().getPanier().getId();
            // Fetch and return the list of PanierItem associated with this Panier ID
            return panierItemRepository.findByPanierId(panierId);
        } else {
            throw new IllegalArgumentException("Commande not found with ID: " + commandeId);
        }
    }
}
