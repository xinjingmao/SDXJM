<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>WeLcOmE-(AtiviTy)</title>
<#include "/admin/include/admin-css.html">  
</head>

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
				<form id="add_student_form">
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
					<select name="school" id="school" style="width:390px"></select>
				</li>
				<li>
					<label>学院：</label>
					<select name="college" id="college" style="width:390px"></select>
				</li>
				<li>
					<label>专业：</label>
					<select name="major" id="major" style="width:390px"></select>
				</li>
				<li>
					<label>入学年份：</label>
					<input  name="grade" id="grade" value="" size="50" style="width:366px" placeholder="请输入学生的入学年份" />
				</li>
				<li>
					<label>班级：</label>
					<input name="classes" id="classes" value="" size="50" style="width:390px" placeholder="请输入学生的班级" />
				</li>
				<li>
					<label>职位：</label>
					<input  name="position" id="position" value="" size="50" style="width:390px" placeholder="请输入学生的职位，如：班长，学习委员.. 没有职位的请输入‘学生’即可" />
				</li>
				
				<li>
					<input type="reset" value="重置" />
				</li>
				</form>
				<button id="add_btn">添加</button> 
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
                    <td><select name="school" id="school1" style="width:140px"></select></td> 
                </tr>
                <tr>
                    <td>学院</td><td>专业</td><td>入学年份</td><td>班级</td>
                </tr>
                <tr>
                    <td><select name="college" id="college1" style="width:140px"></select></td>  
                    <td><select name="major" id="major1" style="width:140px"></select></td>  
                    <td><input type="text" name="grade" id="grade1" /></td> 
                    <td><input type="text" name="classes" id="classes1" /></td>
                </tr>
                <tr>
                    <td>职位</td><td>姓名</td><td>tel</td><td>PageSize</td>
                </tr>
                <tr>
                    
                    <td><input type="text" name="position" id="position1" /></td>   
                    <td><input type="text" name="name" id="name1" /></td>  
                    <td><input type="text" name="tel" id="tel1" /></td>                    
                    <td><select name="pageSize" id="pageSize">
                        <option value="10">10</option>
                        <option selected="selected" value="20">20</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                    </select></td>
                </tr>
                
                <tr>
                    <td colspan="4">
                    <input type="button" id="query_stu_btn" value="Query All Student" />
                    <input type="button" id="query_somestu_btn" value="Query" />
                    <input type="reset" id="reset_btn" value="Reset" />
                    </td>
                </tr>
            </table>
            </form>
            <div id="stu_list_div"></div>
        </div><!-- end of list_student_div -->
        
        <div id="edit_student_div" class="u_content hide">
			<ul>
				<form id="edit_student_form">
				<input type="hidden" name="id" id="stuId" value="">
				<li>
					<label>姓名：</label>
					<input  name="name" id="name2" value="" size="50" style="width:390px" placeholder="请输入学生姓名" />
				</li>
				<li>
					<label>性别：</label>
					<input type="radio" name="sex" value="0">男
					<input type="radio" name="sex" value="1">女
				</li>
				<li>
					<label>手机号码：</label>
					<input  name="tel" id="tel2" type="text"  value="" size="50" placeholder="请输入学生手机号码" style="width:366px" />
				</li>
				<li>
					<label>QQ：</label>
					<input  name="qqNum" id="qqNum2" value="" size="50" style="width:394px" placeholder="请输入学生QQ" />
				</li>
				<li>
					<label>&nbsp;&nbsp;省：</label>
					<select name="province" id="province2" style="width:394px"></select>
				</li>
				<li>
					<label>&nbsp;&nbsp;市：</label>
					<select name="city" id="city2" style="width:394px"></select>
				</li>
				<li>
					<label>&nbsp;&nbsp;区：</label>
					<select name="area" id="area2" style="width:394px"></select>
				</li>
				<li>
					<label>学校：</label>
					<select name="school" id="school2" style="width:390px"></select>
				</li>
				<li>
					<label>学院：</label>
					<select name="college" id="college2" style="width:390px"></select>
				</li>
				<li>
					<label>专业：</label>
					<select name="major" id="major2" style="width:390px"></select>
				</li>
				<li>
					<label>入学年份：</label>
					<input  name="grade"  id="grade2" value="" size="50" style="width:366px" placeholder="请输入学生的入学年份" />
				</li>
				<li>
					<label>班级：</label>
					<input name="classes" id="classes2"  value="" size="50" style="width:390px" placeholder="请输入学生的班级" />
				</li>
				<li>
					<label>职位：</label>
					<input  name="position" id="position2" value="" size="50" style="width:390px" placeholder="请输入学生的职位，如：班长，学习委员.. 没有职位的请输入‘学生’即可" />
				</li>
				
				</form>
				<button id="save_btn">保存</button> 
			</ul>
            
        </div>    
             
    </div>    
    <#include "/admin/include/footer.ftl">
  </div>
</body>
<#include "/include/js.html">
<script type="text/javascript" src="${jsRoot}/admin/base.js"></script>
<script type="text/javascript" src="${jsRoot}/jsAddress.js"></script>
<script type="text/javascript">
	addressInit('province', 'city', 'area', 'school','college','major', '广东', '广州市', '天河区');
	addressInit('province1', 'city1', 'area1', 'school1','college1','major1', '广东', '广州市', '市辖区');
</script>
<script type="text/javascript" src="${jsRoot}/admin/stumgr.js"></script> 
</html>
