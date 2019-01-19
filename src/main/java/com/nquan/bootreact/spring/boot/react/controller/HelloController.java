package com.nquan.bootreact.spring.boot.react.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class HelloController {

    @GetMapping("/api/message")
    public ResponseEntity<String> hello() {
        return  ResponseEntity.ok().body("Hello Quan, the time at the server is now " + new Date() + "\n");
    }
}
