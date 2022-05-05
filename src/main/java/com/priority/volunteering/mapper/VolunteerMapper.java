package com.priority.volunteering.mapper;


import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.priority.volunteering.entity.VolunteerInfo;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface VolunteerMapper extends BaseMapper<VolunteerInfo> {
    List<VolunteerInfo> selectPages(@Param("pageNum") Integer pageNum, @Param("pageSize") Integer pageSize);
}
