/*
 *  Copyright (c) 2016 Agung Pramono <agungpermadi13@gmail.com || www.github.com/agung pramono>.
 *  All rights reserved.
 * 
 * Silahkan digunakan dengan bebas / dimodifikasi
 * Dengan tetap mencantumkan nama @author dan Referensi / Source
 * Terima Kasih atas Kerjasamanya.
 * 
 *  HaloController.java
 * 
 *  Created on Jan 3, 2016, 10:26:36 AM
 */
package com.agung.template.controller;

import java.util.Date;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author agung
 */
@Controller
public class HaloController {
    
    @RequestMapping("/welcome")
    public void halo(Model m){
        m.addAttribute("waktu", new Date());
    }
}
