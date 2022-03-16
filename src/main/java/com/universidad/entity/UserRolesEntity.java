package com.universidad.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "user_roles")
public class UserRolesEntity implements Serializable{

	private static final long serialVersionUID = -1819931546721842748L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO )
	@Column(name="USER_ROLE_ID")
	private Integer userRolesId;
	@Column(name = "USER_ID", insertable = false, updatable = false)
	private Integer userId;
	@Column(name="AUTHORITY")
	private String Authority;
	
	@OneToOne
    @MapsId
    @JoinColumn(name = "USER_ID")
	private UserEntity user;
	
	public Integer getUserRolesId() {
		return userRolesId;
	}
	public void setUserRolesId(Integer userRolesId) {
		this.userRolesId = userRolesId;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public String getAuthority() {
		return Authority;
	}
	public void setAuthority(String authority) {
		Authority = authority;
	}
	
}