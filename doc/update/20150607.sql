alter table school add address varchar(40) default '' comment '学校地址';
alter table school add nature tinyint default '0' comment '学校性质： 1：本科 ，2：专科，3：中专';
alter table school add kind tinyint default '0' comment '学校种类 ：1.综合类、2.理工类、3.师范类、4.农林类、5.政法类、6.医药类、7.财经类、8.民族类、9.语言类、10.艺术类、11.体育类、12.军事类';