package com.saveur.saveursolidaire.Services;

import com.saveur.saveursolidaire.dtos.LoginUserDto;
import com.saveur.saveursolidaire.dtos.RegisterUserDto;
import com.saveur.saveursolidaire.entities.Administrateur;
import com.saveur.saveursolidaire.entities.BuisinessRepresentive;
import com.saveur.saveursolidaire.entities.OrganisationRepresentive;
import com.saveur.saveursolidaire.entities.User;
import com.saveur.saveursolidaire.entities.enums.UserRole;
import com.saveur.saveursolidaire.repositories.AdministrateurRepo;
import com.saveur.saveursolidaire.repositories.BuisinessRepresenRepo;
import com.saveur.saveursolidaire.repositories.OrganisationRepresentativeRepo;
import com.saveur.saveursolidaire.repositories.UserRepositery;
import com.saveur.saveursolidaire.utils.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Service
public class AuthenticationService {
    private final UserRepositery userRepository;
    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;
    @Autowired
    private ImageService imageService;
    @Autowired
    private BuisinessRepresenRepo buisinessRepresenRepo;
    @Autowired
    private OrganisationRepresentativeRepo organisationRepresentativeRepo;
    @Autowired
    private AdministrateurRepo administrateurRepo;

    public AuthenticationService(
            UserRepositery userRepository,
            AuthenticationManager authenticationManager,
            PasswordEncoder passwordEncoder
    ) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User signup(RegisterUserDto input, MultipartFile file) {
        String images = imageService.CreateNameImage(file);
        imageService.store(file, images);

        switch (input.getRole()) {
            case ADMINISTRATEUR:
                var administrateur = Administrateur.builder()
                        .fullName(input.getFullName())
                        .email(input.getEmail())
                        .numerotelephone(input.getNumerotelephone())
                        .status((input.isStatus()))
                        .role(input.getRole())

                        .image(images)
                        .status(true)
                        .password(passwordEncoder.encode(input.getPassword())).build();
                return   administrateurRepo.save(administrateur);   // Save to Admin table
            case ORGANISATIONREPRESENTATIVE:
                var organisationrep = OrganisationRepresentive.builder()
                        .fullName(input.getFullName())
                        .email(input.getEmail())
                        .numerotelephone(input.getNumerotelephone())
                        .status((input.isStatus()))
                        .role(input.getRole())

                        .image(images)
                        .status(true)
                        .password(passwordEncoder.encode(input.getPassword())).build();
                return    organisationRepresentativeRepo.save(organisationrep);

            case BUISINESSREPRENSETIVE:
                var buissinessrepr = BuisinessRepresentive.builder()
                        .fullName(input.getFullName())
                        .email(input.getEmail())
                        .numerotelephone(input.getNumerotelephone())
                        .status((input.isStatus()))
                        .role(input.getRole())

                        .image(images)
                        .status(true)
                        .password(passwordEncoder.encode(input.getPassword())).build();
             return    buisinessRepresenRepo.save(buissinessrepr);

            default:
                throw new IllegalArgumentException("Unknown role: " + input.getRole());
        }
    }


        public User authenticate (LoginUserDto input){
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            input.getEmail(),
                            input.getPassword()
                    )
            );

            return userRepository.findByEmail(input.getEmail()).orElseThrow();
        }

        public List<User> allUsers () {
            List<User> users = new ArrayList<>();

            userRepository.findAll().forEach(users::add);

            return users;
        }
    }

