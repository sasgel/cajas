package com.universidad.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.universidad.entity.CodigoBarraEntity;

public interface CodigoBarrasDao extends JpaRepository<CodigoBarraEntity, String> {

}