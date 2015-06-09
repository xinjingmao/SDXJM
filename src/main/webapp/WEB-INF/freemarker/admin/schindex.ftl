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
    	<ul id="sch_data"  class="nav nav-tabs nav-justified">
            <li id="li_add_school"><a href="javascript:;" id="add_school">添加学校</a></li>                
            <li><a href="javascript:;" id="list_school">学校列表</a></li>				
        </ul>
        <div id="add_school_div">
        	<div class="add_school_hander">
	            <h2>添加学校</h2>
	            <a href="javascript:;" id="add_school_close"><span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span></a>
	        </div>
			<div class="add_school_content">
	            <form method="post" id="add_school_form">
	                <div class="row">
	                    <div class="span_BFB">
	                        <div class="input-group dis">
	                            <span class="input-group-addon">&nbsp;&nbsp;省:</span>
	                            <select name="province" id="province" class="form-control"></select>
	                        </div>
	                    </div>
	                </div>
	                <div class="row">
	                    <div class="span_BFB">
	                        <div class="input-group dis">
	                            <span class="input-group-addon">&nbsp;&nbsp;市:</span>
	                            <select name="city" id="city" class="form-control"></select>
	                        </div>
	                    </div>
	                </div>
	                <div class="row">
	                    <div class="span_BFB">
	                        <div class="input-group dis">
	                            <span class="input-group-addon">&nbsp;&nbsp;区:</span>
	                            <select name="area" id="area" class="form-control"></select>
	                        </div>
	                    </div>
	                </div>
	                <div class="row">
	                    <div class="span_BFB">
	                        <div class="input-group dis">
	                            <span class="input-group-addon" id="sizing-name">学&nbsp;校:</span>
	                            <input name="name" id="name" type="text" value="" class="form-control" placeholder="请输入学校" aria-describedby="sizing-name">
	                        </div>
	                    </div>
	                </div>
	            </form>
	            <div class="row btn_bottom">
	                <div class="span2">
	                    <button id="add_btn" class="btn btn-success btn_center">添&nbsp; &nbsp;加</button>
	                </div>
	                <div class="span2">
	                    <button id="tobatch_btn" class="btn btn-success btn_center">批量导入</button>
	                </div>
	            </div>
	        </div>
        </div><!-- end of add_school_div -->
        
        <div id="batch_div">
        	<div class="batch_hander">
	            <h2>批量导入</h2>
	            <a href="javascript:;" id="batch_close"><span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span></a>
	        </div>
			<div class="batch_content">
	            <form method="post" id="batch_form">
	                <div class="row">
	                    <div class="span_BFB form-group">
	                        <input type="file" id="batchInputFile">
	                        <p><a href="#">点击下载模板</a></p>
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
        
        <div id="list_school_div">
            <form id="query_sch_form" class="u_content">
            	<div class="row row-margin">
					<div class="span1"><p>省&nbsp; &nbsp;份</p></div>
					<div class="span2"><select name="province" id="province1" class="form-control"></select></div>
					<div class="span1"><p>城&nbsp; &nbsp;市</p></div>
					<div class="span2"><select name="city" id="city1" class="form-control"></select></div>
					<div class="span1"><p>区&nbsp; &nbsp;域</p></div>
					<div class="span2"><select name="area" id="area1" class="form-control"></select></div>
					<div class="span1"><p>学&nbsp; &nbsp;校</p></div>
					<div class="span4"><input type="text" name="name" id="school1"  class="form-control"/></div>
				</div>
				<div class="row row-margin">
					<div class="span1_btn"><input type="button" class="btn btn-primary" id="query_sch_btn" value="全&nbsp; &nbsp;部" /></div>
					<div class="span1_btn"><input type="button" class="btn btn-success" id="query_somesch_btn" value="搜&nbsp; &nbsp;索" /></div>
					<div class="span1_btn"><input type="reset" class="btn btn-info" id="reset_btn" value="重&nbsp; &nbsp;置" /></div>
				</div>
            </form>
            <div id="sch_list_div"></div>
        </div><!-- end of list_school_div -->

        <div id="list_college_div" class="u_content list_hide">
        	
        </div><!-- end of list_college_div -->            
          
        
        <div id="list_major_div" class="u_content list_hide">
			
        </div><!-- end of add_major_div -->            
                  
    </div>
    </div>
    <#include "/admin/include/footer.ftl">
    
  </div>
</body>
<#include "/include/js.html">
<script type="text/javascript" src="${jsRoot}/admin/base.js"></script>
<script type="text/javascript" src="${jsRoot}/jsAddress.js"></script>  
<script type="text/javascript">
	addressInit('province', 'city', 'area', null,null,null, '广东', '广州市', '天河区');
	addressInit('province1', 'city1', 'area1', null,null,null, '广东', '广州市', '市辖区');
</script>
<script type="text/javascript" src="${jsRoot}/admin/schmgr.js"></script>
</html>
