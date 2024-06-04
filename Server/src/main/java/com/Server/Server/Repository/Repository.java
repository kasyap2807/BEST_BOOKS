package com.Server.Server.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.Server.Server.model.model;

import jakarta.transaction.Transactional;

public interface Repository extends JpaRepository<model,Integer>{
    
    @Query(value = "select * from bookdet where id=:id",nativeQuery = true)
    model getdata(@Param("id") int id);
    
    @Modifying
    @Query(value = "UPDATE bookdet SET comments = :comment WHERE id = :id", nativeQuery = true)
    void updateData(@Param("comment") String comment, @Param("id") int id);

    @Modifying
    @Query(value = "UPDATE bookdet SET no_stars = :no_stars, no_ratings = :no_ratings WHERE id = :id", nativeQuery = true)
    void updaterating(@Param("no_stars") int no_stars, @Param("no_ratings") int no_ratings, @Param("id") int id);

    @Modifying
    @Query(value = "UPDATE bookdet SET quntity = quntity - 1 WHERE id = :id", nativeQuery = true)
    void updatequnt(@Param("id") int id);
}
