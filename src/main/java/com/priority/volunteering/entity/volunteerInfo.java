package com.priority.volunteering.entity;


import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.math.BigDecimal;

@TableName(value = "volunteer_info")
@Data
public class VolunteerInfo {
    @TableId
    private Long volunteerId;

    private String title;

    private BigDecimal price;

    private String des;

    private Long userId;

    private String ingredient;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}
