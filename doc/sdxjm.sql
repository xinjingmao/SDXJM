CREATE TABLE `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '学生Id',
  `name` varchar(20) NOT NULL COMMENT '名字',
  `sex` tinyint NOT NULL DEFAULT '0' COMMENT '性别',
  `tel` varchar(20) NOT NULL COMMENT '手机号码',
  `qqNum` varchar(30) NOT NULL DEFAULT '' COMMENT 'qq',
  `province` varchar(20) NOT NULL COMMENT '省',
  `city` varchar(20) NOT NULL COMMENT '市',
  `area` varchar(20) NOT NULL COMMENT '区',
  `school` varchar(40) NOT NULL COMMENT '学校',
  `college` varchar(20) NOT NULL COMMENT '学院',
  `major` varchar(20) NOT NULL COMMENT '专业',
  `grade` varchar(20) NOT NULL COMMENT '年级',
  `classes` varchar(20) NOT NULL COMMENT '班级',
  `position` varchar(20) NOT NULL COMMENT '职位',
  `agentId` int(11) NOT NULL DEFAULT '0' COMMENT '录入人Id',
  `addTime` datetime NOT NULL COMMENT '添加时间',
  `remark` longtext NOT NULL DEFAULT '' COMMENT '备注信息',
  PRIMARY KEY (`id`),
  UNIQUE KEY `tel` (`tel`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT '学生信息';

CREATE TABLE `school` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '学校Id',
  `name` varchar(20) NOT NULL COMMENT '名字',
  `province` varchar(20) NOT NULL COMMENT '省',
  `city` varchar(20) NOT NULL COMMENT '市',
  `area` varchar(20) NOT NULL COMMENT '区',
  `addTime` datetime NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT '学校';

CREATE TABLE `college` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `schoolId` int(11) NOT NULL COMMENT '学校Id',
  `name` varchar(20) NOT NULL COMMENT '名字',
  `addTime` datetime NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT '学院';

CREATE TABLE `major` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `collegeId` int(11) NOT NULL COMMENT '学院Id',
  `name` varchar(20) NOT NULL COMMENT '名字',
  `addTime` datetime NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT '专业';

CREATE TABLE `manager` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '管理员Id',
  `tel` varchar(20) NOT NULL COMMENT '手机号码',
  `password` varchar(50) NOT NULL DEFAULT '' COMMENT '密码',
  `extra` int NOT NULL COMMENT '随机数',
  `addTime` datetime NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `tel` (`tel`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT '管理员信息';