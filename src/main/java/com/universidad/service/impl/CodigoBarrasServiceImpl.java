package com.universidad.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.universidad.dao.CodigoBarrasDao;
import com.universidad.entity.CodigoBarraEntity;
import com.universidad.service.CodigoBarrasService;

@Service("codigoBarrasService")
public class CodigoBarrasServiceImpl implements CodigoBarrasService {

	@Autowired
	private CodigoBarrasDao codigoBarrasDao;

	@Override
	public List<CodigoBarraEntity> listaCodigosBarras() {
		return codigoBarrasDao.findAll();
	}

	@Override
	public CodigoBarraEntity guardaCodigoBarras(CodigoBarraEntity codigo) {
		return codigoBarrasDao.save(codigo);
	}
}