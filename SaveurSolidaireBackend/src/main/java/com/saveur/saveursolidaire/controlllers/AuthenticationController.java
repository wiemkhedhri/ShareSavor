package com.saveur.saveursolidaire.controlllers;

import com.saveur.saveursolidaire.Services.AuthenticationService;
import com.saveur.saveursolidaire.Services.JwtService;
import com.saveur.saveursolidaire.dtos.LoginUserDto;
import com.saveur.saveursolidaire.dtos.RegisterUserDto;
import com.saveur.saveursolidaire.entities.User;
import com.saveur.saveursolidaire.repositories.UserRepositery;
import com.saveur.saveursolidaire.responses.LoginResponse;
import jakarta.jws.soap.SOAPBinding;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

@RequestMapping("/auth")
@RestController
@CrossOrigin("*")
public class AuthenticationController {
    private final JwtService jwtService;
    private final AuthenticationService authenticationService;
    @Autowired
    private UserRepositery userRepositery;

    public AuthenticationController(JwtService jwtService, AuthenticationService authenticationService) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
    }

    @PostMapping("/signup")
    public ResponseEntity<User> register(RegisterUserDto registerUserDto, @RequestParam MultipartFile file) {
        User registeredUser = authenticationService.signup(registerUserDto, file);
        return ResponseEntity.ok(registeredUser);
    }


    @PostMapping("/login")
    public ResponseEntity<LoginResponse> authenticate(@RequestBody LoginUserDto loginUserDto) {
        User authenticatedUser = authenticationService.authenticate(loginUserDto);
        String jwtToken = jwtService.generateToken(authenticatedUser);
        User users = userRepositery.findByEmail2(loginUserDto.getEmail());
        LoginResponse loginResponse = new LoginResponse().setToken(jwtToken).setExpiresIn(jwtService.getExpirationTime()).setLoginUserDto(users);
        return ResponseEntity.ok(loginResponse);
    }
}
/*
        String jwtToken = jwtService.generateToken(authenticatedUser);


        User users = userRepositery.findByEmail2(loginUserDto.getEmail());


        User userDto = new User();
        userDto.setEmail(users.getEmail());
        userDto.setPassword(users.getPassword());

        LoginResponse loginResponse = new LoginResponse()
                .setToken(jwtToken)
                .setExpiresIn(jwtService.getExpirationTime())
                .setLoginUserDto(userDto); // Use UserDTO instead


        return ResponseEntity.ok(loginResponse);
    }
*/

