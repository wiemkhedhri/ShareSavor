package com.saveur.saveursolidaire.dtos;

import com.saveur.saveursolidaire.entities.User;
import com.saveur.saveursolidaire.entities.enums.UserRole;
import com.saveur.saveursolidaire.repositories.UserRepositery;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class LoginUserDto {
    private String email;
    private String password;


    public String getEmail() {
        return email;
    }

    public LoginUserDto setEmail(String email) {
        this.email = email;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public LoginUserDto setPassword(String password) {
        this.password = password;
        return this;
    }

    @Override
    public String toString() {
        return "LoginUserDto{" +
                "email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
