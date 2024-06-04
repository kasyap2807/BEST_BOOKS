package com.Server.Server.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Server.Server.model.orderdata;

public interface orderepo extends JpaRepository<orderdata,Integer> {
}
