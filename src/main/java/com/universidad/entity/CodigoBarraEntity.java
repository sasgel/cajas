/**
 * 
 */
package com.universidad.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author Alvaro
 *
 */
@Entity
@Table(name = "codigosbarra")
public class CodigoBarraEntity implements Serializable{

	private static final long serialVersionUID = 6505869327553349158L;
	@Id
	private String codigo;
	
	public String getCodigo() {
		return codigo;
	}
	
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}
	
	@Override
	public String toString() {
		return "CodigoBarraEntity [codigo=" + codigo + "]";
	}
}