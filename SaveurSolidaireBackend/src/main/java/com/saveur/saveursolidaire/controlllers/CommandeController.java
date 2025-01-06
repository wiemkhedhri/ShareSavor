package com.saveur.saveursolidaire.controlllers;

import com.saveur.saveursolidaire.Services.CommandeService;
import com.saveur.saveursolidaire.entities.Commande;
import com.saveur.saveursolidaire.entities.PanierItem;
import com.saveur.saveursolidaire.repositories.CommandeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequestMapping("/commande")
@RestController
@CrossOrigin("*")
public class CommandeController {

    @Autowired
    private CommandeService commandeService;
    @Autowired
    private CommandeRepo commandeRepo;
    @PostMapping("/create/{id}")
    public Commande createCommande(@RequestParam Integer panierId, @RequestParam Float totalCost,@PathVariable Integer id) {
        return commandeService.createCommande(panierId, totalCost,id);
    }
    @GetMapping("/organisationrepresentative/{organisationRepresentiveId}")
    public ResponseEntity<List<Commande>> getCommandesByOrganisationRepresentive(
            @PathVariable Integer organisationRepresentiveId) {
        List<Commande> commandes = commandeService.getCommandesByOrganisationRepresentiveId(organisationRepresentiveId);
        return ResponseEntity.ok(commandes);
    }
    @GetMapping("/panieritems/{commandeId}")
    public ResponseEntity<List<PanierItem>> getPanierItemsByCommandeId(@PathVariable Integer commandeId) {
        List<PanierItem> panierItems = commandeService.getPanierItemsByCommandeId(commandeId);
        return ResponseEntity.ok(panierItems);
    }
    @GetMapping("/getnumberoforders")
    public Integer gettotal(){
        return this.commandeRepo.findAll().size();
    }
    @GetMapping("/average-purchase-by-organisation")
    public List<Map<String, Object>> getAveragePurchaseByOrganisation() {
        return commandeRepo.findAveragePurchaseByOrganisation();
    }
}
