package com.yck.usercenter.service;
import java.util.Date;

import com.yck.usercenter.model.domain.User;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class UserServiceTest {

    @Resource
    private UserService userService;

    @Test
    public void testAddUser(){
        User user = new User();
        user.setUsername("test");
        user.setUserAccount("123");
        user.setAvatarUrl("E:\\Pictures\\OIP-C (1).jpg");
        user.setUserPassword("123");
        user.setPhone("123");
        user.setEmail("123");
        boolean result = userService.save(user);
        System.out.println(user.getId());
        Assertions.assertTrue(result);
    }

    @Test
    void userRegister() {
        String userAccount = "yck";
        String userPassword = "";
        String checkPassword = "123456";
        String personalCode = "1";
        long result = userService.userRegister(userAccount, userPassword, checkPassword,personalCode);
        Assertions.assertEquals(-1, result);
        userAccount = "yu";
        result = userService.userRegister(userAccount, userPassword, checkPassword, personalCode);
        Assertions.assertEquals(-1, result);
        userAccount = "yck";
        userPassword ="123456";
        result = userService.userRegister(userAccount, userPassword, checkPassword,personalCode);
        Assertions.assertEquals(-1, result);
        userAccount = "y ck";
        userPassword ="12345678";
        result = userService.userRegister(userAccount, userPassword, checkPassword,personalCode);
        Assertions.assertEquals(-1, result);
        checkPassword = "123456789";
        result = userService.userRegister(userAccount, userPassword, checkPassword,personalCode);
        Assertions.assertEquals(-1, result);
        userAccount = "test";
        checkPassword = "12345678";
        result = userService.userRegister(userAccount, userPassword, checkPassword,personalCode);
        Assertions.assertEquals(-1, result);
       userAccount = "zhangsan";
       result = userService.userRegister(userAccount, userPassword, checkPassword,personalCode);
       Assertions.assertTrue(result > 0);
    }
}