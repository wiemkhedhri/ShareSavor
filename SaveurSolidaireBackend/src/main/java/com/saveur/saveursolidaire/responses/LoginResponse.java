package com.saveur.saveursolidaire.responses;

import com.saveur.saveursolidaire.entities.User;

public class LoginResponse {
    private String token;

    private long expiresIn;
    private User loginUserDto ;

    public User getLoginUserDto() {
        return loginUserDto;
    }

    public LoginResponse setLoginUserDto(User loginUserDto) {

        this.loginUserDto = loginUserDto;
        return this;
    }

    public String getToken() {
        return token;
    }

    public LoginResponse setToken(String token) {
        this.token = token;
        return this;
    }

    public long getExpiresIn() {
        return expiresIn;
    }

    public LoginResponse setExpiresIn(long expiresIn) {
        this.expiresIn = expiresIn;
        return this;
    }

    @Override
    public String toString() {
        return "LoginResponse{" +
                "token='" + token + '\'' +
                ", expiresIn=" + expiresIn +
                '}';
    }
}
