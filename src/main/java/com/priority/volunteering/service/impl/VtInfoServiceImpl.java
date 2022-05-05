package com.priority.volunteering.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.priority.volunteering.entity.VolunteerInfo;
import com.priority.volunteering.mapper.VolunteerMapper;
import com.priority.volunteering.service.VolunteerInfoService;
import org.springframework.beans.factory.annotation.Autowired;

public class VtInfoServiceImpl extends ServiceImpl<VolunteerMapper, VolunteerInfo> implements VolunteerInfoService {

    @Autowired
    private VolunteerMapper volunteerMapper;

    @Override
    public boolean addVolunteer(VolunteerInfo volunteerInfo) {
        int insert = volunteerMapper.insert(volunteerInfo);
        return insert > 0;
    }

}
