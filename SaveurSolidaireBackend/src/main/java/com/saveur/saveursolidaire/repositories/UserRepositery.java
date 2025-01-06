package com.saveur.saveursolidaire.repositories;

import com.saveur.saveursolidaire.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepositery extends JpaRepository<User,Integer> {
    Optional<User> findByEmail(String email);
    @Query("SELECT u FROM User u WHERE u.email = :email")
    User findByEmail2(@Param("email") String email);
}
