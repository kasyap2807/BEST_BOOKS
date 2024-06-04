package com.Server.Server.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.Server.Server.model.loginmodel;

import jakarta.transaction.Transactional;

public interface loginrepo extends JpaRepository<loginmodel,Integer> {
    @Query(value = "select * from login where email = :email and password = SHA2(:password, 256)",nativeQuery = true)
    public loginmodel login(@Param("email") String Email,@Param("password") String Password);

    @Modifying
    @Transactional
    @Query(value = "insert into login  (name,lastname,password,phonenumber,email)  value (:name,:lastname,SHA2(:password, 256),:phonenumber, :email);",nativeQuery = true)
    public int signup(@Param("name") String name,@Param("lastname") String lastname, @Param("password") String password, @Param("phonenumber") String phonenumber, @Param("email") String email);

    @Query(value = "select * from login where uerid = :userid ", nativeQuery = true)
    public loginmodel getcart(@Param("userid") int userid);

    @Modifying
    @Transactional
    @Query(value = "update login set cart = :cart where uerid = :userid ", nativeQuery = true)
    public int setcart(@Param("cart") String cart, @Param("userid") int userid);

    @Modifying
    @Transactional
    @Query(value = "update login set cart = '' where uerid = :userid ", nativeQuery = true)
    public int clearcart(@Param("userid") int userid);

    @Modifying
    @Transactional
    @Query(value = "update login set name = :name, password =  SHA2(:password, 256) , address = :address, pincode = :pincode where uerid = :userid ", nativeQuery = true)
    public int updateuser(@Param("userid") int userid,@Param("name") String name, @Param("password") String password,@Param("address") String address, @Param("pincode") String pincode);
}
