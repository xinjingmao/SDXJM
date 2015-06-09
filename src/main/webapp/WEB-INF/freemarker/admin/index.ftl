<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<#--<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">-->
<meta name="viewport" content="initial-scale=1">
<title>学生录入系统</title>
<#include "/admin/include/admin-css.html">  
<link rel="stylesheet" href="${cssRoot}/bootstrap.min.css" type="text/css" />
<link rel="shortcut icon" href="${imageRoot}/bitbug_favicon.ico" />
</head>

<body>
<div id="my_shade"></div>
  <div id="admin_container" class="i_frame">  
	    <!-- background-->
	  	<div class="i_frame_bg">
	        <img src="${imageRoot}/bg_index.jpg"/>
	    </div>
		<div class="i_frame_body">
		    <!-- header-->
		    <#include "/admin/include/header.ftl">  
		    <div id="admin_content" class="i_frame_content">
		    	<ul id="stu_data"  class="nav nav-tabs nav-justified">
                     <li><a href="javascript:;" id="add_student">添加学生</a></li>       
                     <li><a href="javascript:;" id="list_student">学生列表</a></li>       
                </ul>
		        <div id="add_student_div" class="u_content add list_hide">
						<form id="add_student_form">
							<div class="row">
								<div class="span4">
									<div class="input-group dis">
			  							<span class="input-group-addon" id="sizing-name">姓&nbsp;名:</span>
									  	<input name="name" id="name" type="text" value="" class="form-control" placeholder="请输入学生姓名" aria-describedby="sizing-name">
									</div>
								</div>
								<div class="span4">
									<div class="input-group dis">
			  							<span class="input-group-addon">性&nbsp;别:</span>
			  							<div class="radio-box">
										  	<label class="radio-inline">
											  <input type="radio" name="sex"  value="0" checked>男
											</label>
											<label class="radio-inline">
											  <input type="radio" name="sex" value="1">女
											</label>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="span4">
									<div class="input-group dis">
										<span class="input-group-addon" id="sizing-tel">手机号码:</span>
									  	<input name="tel" id="tel" type="text" value="" class="form-control" placeholder="请输入学生手机号码" aria-describedby="sizing-tel">
									</div>
								</div>
								<div class="span4">
									<div class="input-group dis">
										<span class="input-group-addon" id="sizing-qqNum">Q&nbsp;Q:</span>
									  	<input name="qqNum" id="qqNum" type="text" value="" class="form-control" placeholder="请输入学生QQ" aria-describedby="sizing-qqNum">
									</div>
								</div>
							</div>
							<div class="row">
								<div class="span4">
									<div class="input-group dis">
										<span class="input-group-addon">&nbsp;&nbsp;省:</span>
									  	<select name="province" id="province" class="form-control"></select>
									</div>
								</div>
								<div class="span4">
									<div class="input-group dis">
										<span class="input-group-addon">&nbsp;&nbsp;市:</span>
									  	<select name="city" id="city" class="form-control"></select>
									</div>
								</div>
								<div class="span4">
									<div class="input-group dis">
										<span class="input-group-addon">&nbsp;&nbsp;区:</span>
									  	<select name="area" id="area" class="form-control"></select>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="span4">
									<div class="input-group dis">
										<span class="input-group-addon">学&nbsp;校:</span>
									  	<select name="school" id="school" class="form-control"></select>
									</div>
								</div>
								<div class="span4">
									<div class="input-group dis">
										<span class="input-group-addon">学&nbsp;院:</span>
									  	<select name="college" id="college" class="form-control"></select>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="span4">
									<div class="input-group dis">
										<span class="input-group-addon">专&nbsp;业:</span>
									  	<select name="major" id="major" class="form-control"></select>
									</div>
								</div>
								<div class="span4">
									<div class="input-group dis">
										<span class="input-group-addon">入学年份:</span>
										<select name="grade" id="grade" class="form-control"></select>
									  	<#--<input name="grade" id="grade" type="text" value="" class="form-control" placeholder="请输入学生的入学年份">-->
									</div>
								</div>
							</div>
							<div class="row">
								<div class="span4">
									<div class="input-group dis">
										<span class="input-group-addon">班级:</span>
									  	<input name="classes" id="classes" type="text" value="" class="form-control" placeholder="请输入学生的班级">
									</div>
								</div>
								<div class="span4">
									<div class="input-group dis">
										<span class="input-group-addon">职位:</span>
									  	<input name="position" id="position" type="text" value="" class="form-control" placeholder="请输入学生的职位，如：班长，学习委员.. 没有职位的请输入‘学生’即可">
									</div>
								</div>
							</div>
						</form>
						<div class="row">
								<div class="span3">
									<input type="reset" class="btn btn-info" value="重&nbsp; &nbsp;置" />
								</div>
								<div class="span3">
									<button id="add_btn" class="btn btn-success">添&nbsp; &nbsp;加</button>
								</div>
								<div class="span3">
									<button id="tobatch_btn" class="btn btn-success">批量导入</button>
								</div>
						</div>
		        </div><!-- end of add_student_div -->
		        
		        <div id="batch_div">
		        	<div class="batch_hander">
			            <h2>批量导入</h2>
			            <a href="javascript:;" id="batch_close"><span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span></a>
			        </div>
					<div class="batch_content">
			            <form method="post" id="batch_form" enctype="multipart/form-data">
			                <div class="row">
			                    <div class="span_BFB form-group">
			                        <input type="file" id="batchInputFile" name="stuData">
			                        <p><a href="/template/student_template.xls">点击下载模板</a></p>
			                    </div>
			                </div>
			            </form>
			            <div class="row btn_bottom">
			                <div class="span2">
			                	<button id="batch_btn" class="btn btn-success">批量导入</button>
			                </div>
			                <div class="span2">
			                    <button id="close_btn" class="btn btn-success">取&nbsp; &nbsp;消</button>
			                </div>
			            </div>
			        </div>
		        </div><!-- end of batch_div -->
		            
		        <div id="list_student_div">
		            <form id="query_stu_form" class="u_content">
		            	<div class="row row-margin">
						  <div class="span1"><p>省&nbsp; &nbsp;份</p></div>
						  <div class="span2"><select name="province" id="province1" class="form-control"></select></div>
						  <div class="span1"><p>城&nbsp; &nbsp;市</p></div>
						  <div class="span2"><select name="city" id="city1" class="form-control"></select></div>
						  <div class="span1"><p>区&nbsp; &nbsp;域</p></div>
						  <div class="span2"><select name="area" id="area1" class="form-control"></select></div>
						  <div class="span1"><p>学&nbsp; &nbsp;校</p></div>
						  <div class="span4"><select name="school" id="school1" class="form-control"></select></div>
						</div>  
						<div class="row row-margin">
						  <div class="span1"><p>学&nbsp; &nbsp;院</p></div>
						  <div class="span2"><select name="college" id="college1" class="form-control"></select></div>
						  <div class="span1"><p>专&nbsp; &nbsp;业</p></div>
						  <div class="span2"><select name="major" id="major1" class="form-control"></select></div>
						  <div class="span1"><p>入学年份</p></div>
						  <div class="span2"><select name="grade" id="grade1" class="form-control"></select></div>
						  <div class="span1"><p>班&nbsp; &nbsp;级</p></div>
						  <div class="span4"><input type="text" name="classes" id="classes1" class="form-control"/></div>
						</div>
						<div class="row row-margin">
						  <div class="span1"><p>职&nbsp; &nbsp;位</p></div>
						  <div class="span2"><input type="text" name="position" id="position1" class="form-control"/></div>
						  <div class="span1"><p>姓&nbsp; &nbsp;名</p></div>
						  <div class="span2"><input type="text" name="name" id="name1"  class="form-control"/></div>
						  <div class="span1"><p>电&nbsp; &nbsp;话</p></div>
						  <div class="span2"><input type="text" name="tel" id="tel1" class="form-control"/></div>
						  <div class="span1_btn"><input type="button" class="btn btn-primary" id="query_stu_btn" value="全&nbsp; &nbsp;部" /></div>
						  <div class="span1_btn"><input type="button" class="btn btn-success" id="query_somestu_btn" value="搜&nbsp; &nbsp;索" /></div>
						  <div class="span1_btn"><input type="reset" class="btn btn-info" id="reset_btn" value="重&nbsp; &nbsp;置" /></div>
						</div>
		            </form>
		            <div id="stu_list_div"></div>
		        </div><!-- end of list_student_div -->
		        
		        <div id="edit_student_div" class="u_content add list_hide">
						<form id="edit_student_form">
						<input type="hidden" name="id" id="stuId" value="">
						<div class="row">
								<div class="span4">
									<div class="input-group dis">
			  							<span class="input-group-addon" id="sizing-name">姓&nbsp;名:</span>
									  	<input name="name" id="name2" type="text" value="" class="form-control" placeholder="请输入学生姓名" aria-describedby="sizing-name">
									</div>
								</div>
								<div class="span4">
									<div class="input-group dis">
			  							<span class="input-group-addon">性&nbsp;别:</span>
			  							<div class="radio-box">
										  	<label class="radio-inline">
											  <input type="radio" name="sex"  value="0" checked>男
											</label>
											<label class="radio-inline">
											  <input type="radio" name="sex" value="1">女
											</label>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="span4">
									<div class="input-group dis">
										<span class="input-group-addon" id="sizing-tel">手机号码:</span>
									  	<input name="tel" id="tel2" type="text" value="" class="form-control" placeholder="请输入学生手机号码" aria-describedby="sizing-tel">
									</div>
								</div>
								<div class="span4">
									<div class="input-group dis">
										<span class="input-group-addon" id="sizing-qqNum">Q&nbsp;Q:</span>
									  	<input name="qqNum" id="qqNum2" type="text" value="" class="form-control" placeholder="请输入学生QQ" aria-describedby="sizing-qqNum">
									</div>
								</div>
							</div>
							<div class="row">
								<div class="span4">
									<div class="input-group dis">
										<span class="input-group-addon">&nbsp;&nbsp;省:</span>
									  	<select name="province" id="province2" class="form-control"></select>
									</div>
								</div>
								<div class="span4">
									<div class="input-group dis">
										<span class="input-group-addon">&nbsp;&nbsp;市:</span>
									  	<select name="city" id="city2" class="form-control"></select>
									</div>
								</div>
								<div class="span4">
									<div class="input-group dis">
										<span class="input-group-addon">&nbsp;&nbsp;区:</span>
									  	<select name="area" id="area2" class="form-control"></select>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="span4">
									<div class="input-group dis">
										<span class="input-group-addon">学&nbsp;校:</span>
									  	<select name="school" id="school2" class="form-control"></select>
									</div>
								</div>
								<div class="span4">
									<div class="input-group dis">
										<span class="input-group-addon">学&nbsp;院:</span>
									  	<select name="college" id="college2" class="form-control"></select>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="span4">
									<div class="input-group dis">
										<span class="input-group-addon">专&nbsp;业:</span>
									  	<select name="major" id="major2" class="form-control"></select>
									</div>
								</div>
								<div class="span4">
									<div class="input-group dis">
										<span class="input-group-addon">入学年份:</span>
									  	<select name="grade" id="grade2" class="form-control"></select>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="span4">
									<div class="input-group dis">
										<span class="input-group-addon">班级:</span>
									  	<input name="classes" id="classes2" type="text" value="" class="form-control" placeholder="请输入学生的入学年份">
									</div>
								</div>
								<div class="span4">
									<div class="input-group dis">
										<span class="input-group-addon">职位:</span>
									  	<input name="position" id="position2" type="text" value="" class="form-control" placeholder="请输入学生的职位，如：班长，学习委员.. 没有职位的请输入‘学生’即可">
									</div>
								</div>
							</div>
						</form>
						<div class="span3">
							<button id="save_btn" class="btn btn-success">保&nbsp; &nbsp;存</button> 
						</div>
		        </div>    
		             
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
