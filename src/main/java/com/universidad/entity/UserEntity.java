package com.universidad.entity;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class UserEntity implements Serializable{
	
	private static final long serialVersionUID = 3952763938210987890L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO )
	@Column(name = "USER_ID")
	private Integer userId;
	@Column(name = "USERNAME")
	private String username;
	@Column(name = "PASSWORD")
	private String password;
	@Column(name = "ENABLED")
	private boolean enabled;
	
	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
	@PrimaryKeyJoinColumn
	private UserRolesEntity userRolesEntity;
	
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public boolean isEnabled() {
		return enabled;
	}
	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}
	public UserRolesEntity getUserRolesEntity() {
		return userRolesEntity;
	}
	public void setUserRolesEntity(UserRolesEntity userRolesEntity) {
		this.userRolesEntity = userRolesEntity;
	}
	

}