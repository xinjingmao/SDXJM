<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>WeLcOmE-(AtiviTy)</title>
<#include "/admin/include/admin-css.html">  
</head>
<style>
	li {
    	list-style: outside none none;
	}
	.no_add {
    	color: #B6B5B5;
	}
	
	.imgerror {
    background: none repeat scroll 0% 0% #C00;
    padding: 0px 15px;
    position: absolute;
    color: #FFF;
    line-height: 25px;
    display: block;
    border-radius: 3px;
	float: left;
	right: 1000px;
	
	}
</style>
<body>
  <div id="admin_container">    
    <!-- header-->
    <#include "/admin/include/header.ftl">  
        
    <div id="admin_content">
        <ul class="u_sub_nav" id="horizontal_nav_ul">
            <li><a href="javascript:;" id="add_student">增加学生</a></li>
            <li><a href="javascript:;" id="list_student">学生列表</a></li>
        </ul>  
        <div id="add_student_div" class="u_content">
			<ul>
				<form method="post" id="add_student_form">
				<li>
					<label>姓名：</label>
					<input  name="name" id="name" value="" size="50" style="width:390px" placeholder="请输入学生姓名" />
				</li>
				<li>
					<label>性别：</label>
					<input type="radio" name="sex" value="0" checked>男
					<input type="radio" name="sex" value="1">女
				</li>
				<li>
					<label>手机号码：</label>
					<input  name="tel" type="text" id="tel" value="" size="50" placeholder="请输入学生手机号码" style="width:366px" />
				</li>
				<li>
					<label>QQ：</label>
					<input  name="qqNum" id="qqNum" value="" size="50" style="width:394px" placeholder="请输入学生QQ" />
				</li>
				<li>
					<label>&nbsp;&nbsp;省：</label>
					<select name="province" id="province" style="width:394px"></select>
				</li>
				<li>
					<label>&nbsp;&nbsp;市：</label>
					<select name="city" id="city" style="width:394px"></select>
				</li>
				<li>
					<label>&nbsp;&nbsp;区：</label>
					<select name="area" id="area" style="width:394px"></select>
				</li>
				<li>
					<label>学校：</label>
					<input  name="school" id="school" value="" size="50" style="width:390px" placeholder="请输入学生的学校" />
				</li>
				<li>
					<label>学院：</label>
					<input  name="college" id="college" value="" size="50" style="width:390px" placeholder="请输入学生的学院" />
				</li>
				<li>
					<label>专业：</label>
					<input  name="major" id="major" value="" size="50" style="width:390px" placeholder="请输入学生的专业" />
				</li>
				<li>
					<label>年级：</label>
					<input  name="grade" id="grade" value="" size="50" style="width:390px" placeholder="请输入学生的年级" />
				</li>
				<li>
					<label>班级：</label>
					<input name="classes" id="classes" value="" size="50" style="width:390px" placeholder="请输入学生的班级" />
				</li>
				<li>
					<label>职位：</label>
					<input  name="position" id="position" value="" size="50" style="width:390px" placeholder="请输入学生的职位，如：班长，学习委员.. 没有职位的请输入‘学生’即可" />
				</li>
				</form>
				<li>
					<button id="add_btn">添加</button> 
				</li>
			</ul>
            
        </div><!-- end of add_student_div -->
            
            <div id="list_student_div" class="u_content hide">
                <form id="query_stu_form">
                <table class="color">
                    <tr>
                        <td>省份</td><td>城市</td><td>区域</td><td>学校</td>
                    </tr>
                    <tr>
                    	<td><select name="province" id="province1" style="width:140px"></select></td>  
                        <td><select name="city" id="city1" style="width:140px"></select></td>  
                        <td><select name="area" id="area1" style="width:140px"></select></td>
                        <td><input type="text" name="school" id="school"/></td> 
                    </tr>
                    <tr>
                        <td>学院</td><td>专业</td><td>年级</td><td>班级</td>
                    </tr>
                    <tr>
                        <td><input type="text" name="college" id="college"/></td>  
                        <td><input type="text" name="major" id="major"/></td>  
                        <td><input type="text" name="grade" id="grade" /></td> 
                        <td><input type="text" name="classes" id="classes" /></td>
                    </tr>
                    <tr>
                        <td>职位</td><td>姓名</td><td>PageSize</td>
                    </tr>
                    <tr>
                        
                        <td><input type="text" name="position" id="position" /></td>   
                        <td><input type="text" name="name" id="name" /></td>                     
                        <td><select name="pageSize" id="pageSize">
                            <option value="10">10</option>
                            <option selected="selected" value="20">20</option>
                            <option value="30">30</option>
                            <option value="50">50</option>
                        </select></td>
                    </tr>
                    
                    <tr>
                        <td colspan="3">
                        <input type="button" id="query_stu_btn" value="Query All Student" />
                        <input type="button" id="query_somestu_btn" value="Query" />
                        <input type="reset" id="reset_btn" value="Reset" />
                        </td>
                    </tr>
                </table>
                </form>
                <div id="stu_list_div"></div>
            </div><!-- end of list_student_div -->
            
             
    </div>    
    <#include "/admin/include/footer.ftl">
  </div>
</body>
<#include "/include/js.html">
<script type="text/javascript" src="${jsRoot}/jsAddress.js"></script>
<script type="text/javascript">
	addressInit('province', 'city', 'area', '广东', '广州市', '市辖区');
	addressInit('province1', 'city1', 'area1', '广东', '广州市', '市辖区');
</script>
<script type="text/javascript" src="${jsRoot}/admin/base.js"></script>
<script type="text/javascript" src="${jsRoot}/admin/stumgr.js"></script> 
</html>
