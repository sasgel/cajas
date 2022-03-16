package com.universidad.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.universidad.entity.UserEntity;

public interface UserDao extends JpaRepository<UserEntity, Integer>{

	@Query(value = "select case when count(USER_ID) > 0 then USER_ID else 0 end as user_id from users where USERNAME = :username  and PASSWORD = :password", nativeQuery = true)
	public Integer isUsuarioValido(@Param("username") String usuario, @Param("password") String password);
}