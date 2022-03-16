package com.universidad;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.universidad.dao.UserDao;
import com.universidad.entity.UserEntity;

@SpringBootTest
class CajasApplicationTests {
	private static final Logger LOG = LoggerFactory.getLogger(CajasApplicationTests.class);
	
	@Autowired
	private UserDao user;
	
	@Test
	void contextLoads() {
		List<UserEntity> list = user.findAll();
		LOG.info(list.get(0).getUsername()+" | "+list.get(0).getUserRolesEntity().getAuthority());		
	}
	
	@Test
	void pruebaUserDao() {
		Integer idUsuario = user.isUsuarioValido("alvaro", "123456");
		LOG.info("IdUsuario: "+idUsuario);
	}

}
