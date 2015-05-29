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
        <div id="manager_info_div">
            <p><b>+++++增加管理员++++++</b></p>                
            <form id="add_manager_form">
                                        手机号:
               	<input name="tel" type="text"/> 
               	<p >密码默认为123456</p>
               	<input type="button" id="add_manager_btn" value="确定" />
            </form>
            <div id="create_manager_result_div"></div>
        </div><!-- end of manager info div-->
        
        
        <div id="manager_list_div">
            <table class="color">
                <tr><td>管理员Id</td>
                <td>手机</td>
                <td>添加时间</td>
                <td>操作</td></tr>
                <#if managers?size &gt; 0>
                
                <#list managers as m>
                <tr>
                <td>${m.id}</td> 
                <td>${m.tel}</td>                    
                <td>${m.addTime?string("yyyy-MM-dd HH:mm:ss")}</td>
                <td><#if tel != m.tel><a class="delmanager" id="${m.id}">删除</a><#else><span>删除</span></#if></td>
                </tr>
                </#list>
                <#else>
                    <tr><td colspan="4">暂无数据</td></tr>
                </#if>
            </table>
        </div>
         
    </div>
</div>    
</body>
<#include "/include/js.html">
<script type="text/javascript" src="${jsRoot}/admin/manager.js"></script>
</html>
