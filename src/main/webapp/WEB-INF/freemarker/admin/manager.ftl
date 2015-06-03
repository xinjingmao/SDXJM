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
        <div id="manager_info_div">
            <p><b>+++++增加管理员++++++</b></p>                
            <form id="add_manager_form">
            	<div class="row row-margin">
	            	<div class="span4">
						<div class="input-group dis">
							<span class="input-group-addon" id="sizing-tel">手机号:</span>
							<input name="tel" type="text" value="" class="form-control"  aria-describedby="sizing-tel">
						</div>
						<p class="p-size">密码默认为123456</p>
					</div>
					<div class="span4">
						<input type="button" id="add_manager_btn" class="btn btn-success btn-margin-add" value="添&nbsp; &nbsp;加" />
					</div> 
               	</div>
            </form>
        </div><!-- end of manager info div-->
        
        <div id="manager_list_div">
            <table class="color">
                <tr><th>管理员Id</th>
                <th>手机</th>
                <th>添加时间</th>
                <th>操作</th></tr>
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
    <#include "/admin/include/footer.ftl">
</div>    
</body>
<#include "/include/js.html">
<script type="text/javascript" src="${jsRoot}/admin/base.js"></script>
<script type="text/javascript" src="${jsRoot}/admin/manager.js"></script>
</html>
