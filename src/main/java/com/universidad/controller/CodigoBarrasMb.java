package com.universidad.controller;

import java.util.List;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import com.universidad.entity.CodigoBarraEntity;
import com.universidad.service.CodigoBarrasService;

@Component("codigoBarrasMb")
public class CodigoBarrasMb {
	private static Logger log = LoggerFactory.getLogger(CodigoBarrasMb.class);
	private List<CodigoBarraEntity> codigosBarras;
	private CodigoBarraEntity codigos = new CodigoBarraEntity();
	
	@Autowired
	@Qualifier("codigoBarrasService")
	private CodigoBarrasService codigoBarrasService;
	
	@PostConstruct
	public void init() {
		this.obtenerListaCodigos();
	}

	public void obtenerListaCodigos() {
		codigosBarras = codigoBarrasService.listaCodigosBarras();
	}
	
	public void guardarCodigos() {
		log.info(codigos.toString());
		codigoBarrasService.guardaCodigoBarras(codigos);
		codigosBarras = codigoBarrasService.listaCodigosBarras();
	}

	public List<CodigoBarraEntity> getCodigosBarras() {
		return codigosBarras;
	}

	public void setCodigosBarras(List<CodigoBarraEntity> codigosBarras) {
		this.codigosBarras = codigosBarras;
	}

	public CodigoBarraEntity getCodigos() {
		return codigos;
	}

	public void setCodigos(CodigoBarraEntity codigos) {
		this.codigos = codigos;
	}
}