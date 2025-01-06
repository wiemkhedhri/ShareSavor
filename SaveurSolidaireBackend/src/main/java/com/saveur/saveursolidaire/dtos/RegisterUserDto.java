package com.saveur.saveursolidaire.dtos;

import com.saveur.saveursolidaire.entities.enums.UserRole;
import jakarta.persistence.Column;

public class RegisterUserDto {
    private String fullName;

    private String email;

    private String password;
    private Integer numerotelephone ;
    private boolean status ;
    private UserRole role;
    private String image;

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getNumerotelephone() {
        return numerotelephone;
    }

    public void setNumerotelephone(Integer numerotelephone) {
        this.numerotelephone = numerotelephone;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "RegisterUserDto{" +
                "fullName='" + fullName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", numerotelephone=" + numerotelephone +
                ", status=" + status +
                ", role=" + role +
                ", image='" + image + '\'' +
                '}';
    }
}
