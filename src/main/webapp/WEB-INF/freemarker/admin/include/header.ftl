
<#--<div id="admin_header">
	WelcomE <b>${tel!'管理员'}</b> &nbsp;<a href="/admin/tochange">修改密码</a> | <a href="/admin/logout">Logout</a><br />
	<div id="admin_header_nav">
	   <a href="/stu/index">学生管理</a>
	    | <a href="/sch/index">学校管理</a>
	   <#if tel == '15915737718'> | <a href="/admin/index">系统管理</a> </#if>	  
	</div>
</div>-->
 <div class="i_frame_nav" id="admin_header">
    <div class="left_admin">
                <div class="left_admin_img">
                    <img src="${imageRoot}/edition_student_img.png">
                </div>
                <div class="left_admin_name">
                    &nbsp;&nbsp;&nbsp;<img src="${imageRoot}/edition_admin.png"><p>管理员:</p><p>${tel!'管理员'}</p>
                </div>
            </div>
            <div class="left_nav">
                <ul class="left_nav_ul">
                    <li id="li1" class="left_nav_li"><a href="/stu/index"><img src="${imageRoot}/edition_student.png">学生管理</a></li>
                    <li id="li2" class="left_nav_li"><a href="/sch/index"><img src="${imageRoot}/school_list_image.png">学校管理</a></li>
                    <#if tel == '15915737718'>
                    <li id="li3" class="left_nav_li"><a href="/admin/index"><img src="${imageRoot}/system_image.png">系统管理</a></li>
                    </#if>
                    <li id="li3" class="left_nav_li"><a href="/admin/tochange"><img src="${imageRoot}/password_image.png">修改密码</a></li>
                    <li id="li3" class="left_nav_li"><a href="javascript:;" id="logoutbtn" onclick="logout()"><img src="${imageRoot}/esc_image.png">退出</a></li>
                </ul>
            </div>
        </div>


