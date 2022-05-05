package com.priority.volunteering.controller;


import com.priority.volunteering.entity.VolunteerInfo;
import com.priority.volunteering.service.VolunteerInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class UserController {
    @Autowired
    private VolunteerInfoService volunteerInfoService;


    @RequestMapping("/addUser")
    public String add(VolunteerInfo userInfo) {
        boolean res = volunteerInfoService.addVolunteer(userInfo);
        if (res) {
//            TODO
//            做一些是那么事情
        }
        return "err";
    }
}
