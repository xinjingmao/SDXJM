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
            <li><a href="javascript:;" id="add_school">增加学校</a></li>
            <li><a href="javascript:;" id="list_school">学校列表</a></li>
            <#--<li><a href="javascript:;" id="add_college">增加学院</a></li>
            <li><a href="javascript:;" id="list_college">学院列表</a></li>
            <li><a href="javascript:;" id="add_major">增加专业</a></li>
            <li><a href="javascript:;" id="list_major">专业列表</a></li>-->
        </ul>  
        <div id="add_school_div" class="u_content">
			<ul>
				<form method="post" id="add_school_form">
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
					<input  name="name" id="name" value="" size="50" style="width:390px" placeholder="请输入学校" />
				</li>
				</form>
				<li>
					<button id="add_btn">添加</button> 
				</li>
			</ul>
            
        </div><!-- end of add_school_div -->
        <div id="list_school_div" class="u_content hide">
            <form id="query_sch_form">
            <table class="color">
                <tr>
                    <td>省份</td><td>城市</td><td>区域</td><td>学校</td><td>PageSize</td>
                </tr>
                <tr>
                	<td><select name="province" id="province1" style="width:140px"></select></td>  
                    <td><select name="city" id="city1" style="width:140px"></select></td>  
                    <td><select name="area" id="area1" style="width:140px"></select></td>
                    <td><input type="text" name="name" id="school1"/></td> 
                    <td><select name="pageSize" id="pageSize">
                        <option value="10">10</option>
                        <option selected="selected" value="20">20</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                    </select></td>
                </tr>
                <tr>
                    <td colspan="5">
                    <input type="button" id="query_sch_btn" value="Query All School" />
                    <input type="button" id="query_somesch_btn" value="Query" />
                    <input type="reset"  value="Reset" />
                    </td>
                </tr>
            </table>
            </form>
            <div id="sch_list_div"></div>
        </div><!-- end of list_school_div -->

        <div id="list_college_div" class="u_content hide">
        	
        </div><!-- end of list_college_div -->            
          
        
        <div id="list_major_div" class="u_content hide">
			
        </div><!-- end of add_major_div -->            
                  
    </div>    
    <#include "/admin/include/footer.ftl">
  </div>
</body>  
<#include "/include/js.html">
<script type="text/javascript" src="${jsRoot}/jsAddress.js"></script>
<script type="text/javascript">
	addressInit('province', 'city', 'area', null,null,null, '广东', '广州市', '天河区');
	addressInit('province1', 'city1', 'area1', null,null,null, '广东', '广州市', '市辖区');
</script>
<script type="text/javascript" src="${jsRoot}/admin/base.js"></script>
<script type="text/javascript" src="${jsRoot}/admin/schmgr.js"></script> 
</html>
