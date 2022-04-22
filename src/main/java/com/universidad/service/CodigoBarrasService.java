package com.universidad.service;

import java.util.List;

import com.universidad.entity.CodigoBarraEntity;

public interface CodigoBarrasService {
	public List<CodigoBarraEntity> listaCodigosBarras();
	public CodigoBarraEntity guardaCodigoBarras(CodigoBarraEntity codigo);
}