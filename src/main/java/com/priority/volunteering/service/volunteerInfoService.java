package com.priority.volunteering.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.priority.volunteering.entity.VolunteerInfo;

public interface VolunteerInfoService extends IService<VolunteerInfo> {

    //    添加
    boolean addVolunteer(VolunteerInfo volunteerInfo);

}
