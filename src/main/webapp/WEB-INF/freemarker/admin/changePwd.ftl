<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>WeLcOmE-(Manager)</title>
<#include "/admin/include/admin-css.html"> 	
</head>
<body> 
 <div id="admin_container">    
    <!-- header-->
    <#include "/admin/include/header.ftl">   
   
    <div id="admin_content">       
        <div>
            <p><b>+++++更新密码++++++</b></p>
            <form id="change_password_form">
                <input type="hidden" name="tel" value="${tel!"137"}" />
                <table class="color">
                    <tr><td>新密码:</td>
                    <td><input type="password" name="password"/></td></tr>
                    <tr><td>确认密码:</td>
                    <td><input type="password" name="confirmPassword"/></td></tr>
                    <tr><td colspan="2">
                    <input type="button" id="change_password_btn" value="确定" /></td></tr>
                </table>
            </form>
            <div id="change_password_result_div"></div>
        
        </div><!-- end of manager info div-->
    </div>
</div>    
</body>
<#include "/include/js.html">
<script type="text/javascript" src="${jsRoot}/admin/manager.js"></script>
</html>
