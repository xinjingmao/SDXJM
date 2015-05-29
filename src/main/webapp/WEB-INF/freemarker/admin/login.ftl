<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>WeLcOmE to LoGiN</title>
<#include "/admin/include/admin-css.html">  
</head>
<body>
	<div> <#--| <span id="register_btn"> 注册</span></div>-->
    <div id="admin_login_div">        
        <form id="login_form">
                      手机: <input type="text" name="tel"><br />
                      密码: <input type="password" id="password" name="password"><br />            
        </form>
        <a id="admin_login_a" href="javascript:;" >登录</a>
        <div id="login_result_div"></div>        
    </div>
    <#--<div id="admin_reg_div" style="display:none;">        
        <form id="reg_form">
           	 名称: <input type="text" id="newManagerId"><br />
                         密码: <input type="password" id="newPassword" name="password"><br />            
        </form>
        <a id="admin_reg_a" href="javascript:;" >注册</a>
        <div id="reg_result_div"></div>        
    </div>-->
</body>
<#include "/include/js.html">
<script type="text/javascript" src="${jsRoot}/admin/login.js"></script>
</html>
