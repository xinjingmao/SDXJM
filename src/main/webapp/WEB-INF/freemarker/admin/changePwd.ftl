<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<#--<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">-->
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>学生录入系统</title>
<#include "/admin/include/admin-css.html">  
<link rel="stylesheet" href="${cssRoot}/bootstrap.min.css" type="text/css" />
</head>
<body> 
 <div id="admin_container" class="i_frame">    
 	<!-- background-->
	  	<div class="i_frame_bg">
	        <img src="${imageRoot}/bg_index.jpg"/>
	    </div>
<div class="i_frame_body">
    <!-- header-->
    <#include "/admin/include/header.ftl">   
   
    <div id="admin_content" class="i_frame_content">       
        <div class="manager_info_div">
            <p><b class="u_content">+++++更新密码++++++</b></p>
            <form id="change_password_form">
                <input type="hidden" name="tel" value="${tel!"137"}" />
                <div class="row">
					<div class="span4">
						<div class="input-group dis">
							<span class="input-group-addon">新密码:</span>
							<input name="password" type="password" class="form-control" placeholder="请输入新密码">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="span4">
						<div class="input-group dis">
							<span class="input-group-addon">确认密码:</span>
							<input name="confirmPassword" type="password" class="form-control" placeholder="请确认密码">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="span4 center">
						<input type="button" id="change_password_btn" class="btn btn-success" value="添&nbsp; &nbsp;加" />
					</div>
				</div>
            </form>
            <div id="change_password_result_div"></div>
        
        </div><!-- end of manager info div-->
    </div>
 </div>
<#include "/admin/include/footer.ftl">
</div>    
</body>
<#include "/include/js.html">
<script type="text/javascript" src="${jsRoot}/admin/manager.js"></script>
<script type="text/javascript" src="${jsRoot}/admin/base.js"></script>
</html>
