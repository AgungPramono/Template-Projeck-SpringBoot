/*
 *  Copyright (c) 2015 Agung Pramono <agungpermadi13@gmail.com || www.github.com/agung pramono>.
 *  All rights reserved.
 * 
 * Silahkan digunakan dengan bebas / dimodifikasi
 * Dengan tetap mencantumkan nama @author dan Referensi / Source
 * Terima Kasih atas Kerjasamanya.
 * 
 *  MessageException.java
 * 
 *  Created on Nov 28, 2015, 7:11:02 PM
 */
package com.agung.template.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 *
 * @author agung
 */
@ResponseStatus(HttpStatus.NOT_FOUND)
public class MessageException extends RuntimeException{
    
    public MessageException(){
        super();
    }
    
    public MessageException(String message){
        super(message);
    }
}
