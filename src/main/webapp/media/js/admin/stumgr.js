$(function() {
	stumgr.run();
});

var stumgr = {
	run : function() {
		stumgr._init_();
		stumgr._event_();
	},

	_init_ : function() {
		//$("#query_award_btn").click();
		//stumgr.getSomeSch();
		stumgr.getAllStudent();
		stumgr.setOption("grade");
		stumgr.setOption("grade1");
		stumgr.setOption("grade2");
	},

	_event_ : function() {
		//div显示和隐藏
		$("#add_student").click(function(){
			base.switchDiv("#add_student_div","#list_student_div","#edit_student_div");
		});
		
		$("#list_student").click(function(){
			stumgr.getAllStudent();
			base.switchDiv("#list_student_div","#add_student_div","#edit_student_div");
		});
		
		$("#add_btn").click(function() {
			stumgr.add_student();

//			stumgr.getAllStudent();
//			base.switchDiv("#list_student_div","#add_student_div","#edit_student_div");
		});
		
		/*$("#area").change(function(){
			stumgr.getSomeSch();
		});*/
		$("body").on("click",".toEdit",function(){
			stumgr.toEdit($(this).attr("id"));
		});
		
		$("body").on("click",".delstu",function(){
			stumgr.delStu($(this).attr("id"));
		});
		
		$("#save_btn").click(function() {
			stumgr.edit_student();
		});
		
		$("#query_stu_btn").click(function() {
			stumgr.getAllStudent();
		});
		
		$("#query_somestu_btn").click(function() {
			stumgr.getSomeStudent();
		});
		
		//批量导入
		$("#tobatch_btn").click(function() {
			stumgr.showBatchBox();
		});
		
		$("#batch_close").click(function() {
			stumgr.hideBatchBox();
		});
		
		$("#close_btn").click(function() {
			stumgr.hideBatchBox();
		});
		
		$("#batch_btn").click(function() {
			var file = $("#batchInputFile").val();
			if(file != ""){
				if(!/.(xls|xlsx|xlsm)$/.test(file.toLowerCase())){
					alert("文件类型不是Excel文件!");
					return false;
				}else{
					alert("批量导入成功");
					stumgr.hideBatchBox();
				}
			}else{
				alert("请选择您要导入的文件!");
			}
		});
		
		window.addEventListener("resize", function(){
			if($("#my_shade").css("display") == "block"){
				$("#my_shade").css("height",$(document).height());
		        $("#my_shade").css("width",$(document).width());
		        var top_sch = ($(window).height() - $("#add_school_div").height())/2;
		        var left_sch = ($(window).width() - $("#add_school_div").width())/2;
		        var top_batch = ($(window).height() - $("#batch_div").height())/2;
		        var left_batch = ($(window).width() - $("#batch_div").width())/2;
		        var scrollTop = $(document).scrollTop();
		        var scrollLeft = $(document).scrollLeft();
		        if(top_sch + scrollTop - 122 > 0 && left_sch + scrollLeft - 180 > 0){
		        	$("#add_school_div").css( { position : "absolute", "top" : top_sch + scrollTop - 122, "left" : left_sch + scrollLeft - 180} );
		        }else{
		        	$("#add_school_div").css( { position : "absolute", "top" : "0", "left" : "0"} );
		        }
		        if(top_batch + scrollTop - 122 > 0 && left_batch + scrollLeft - 180 > 0){
		        	$("#batch_div").css( { position : "absolute", "top" : top_batch + scrollTop - 122, "left" : left_batch + scrollLeft - 180} );
		        }else{
		        	$("#batch_div").css( { position : "absolute", "top" : "0", "left" : "0"} );
		        }
			}
		}, false);
		
	},
	
	add_student : function(){
		var data = $("#add_student_form").serialize();
		$.post("/stu/add",data,function(result){
				//$("#stuTip").text(result.message);
  				alert(result.message);
  				if(result.message == "添加学生成功"){
  					stumgr.getAllStudent();
  					base.switchDiv("#list_student_div","#add_student_div","#edit_student_div");
  				}
  	  	},"json");
	},
	
	getAllStudent : function(){
		$("#stu_list_div").pageget({
			url : '/stu/all',
			prepare : function() {
				return $("#query_stu_form").serialize();
			},
			navigatorType : 'bootstrapstyle',
			cache : false,
			callback : function() {
			}
		});
	},
	
	getSomeStudent : function(){
		$("#stu_list_div").pageget({
			url : '/stu/some',
			prepare : function() {
				return $("#query_stu_form").serialize();
			},
			navigatorType : 'bootstrapstyle',
			cache : false,
			callback : function() {
			}
		});
	},
	
	getSomeSch : function(){
		var data = ['province=', $("#province").val()
		            , '&city=', $("#city").val()
		            , '&area=', $("#area").val()
		            ].join("");
		$.post("/sch/some",data,function(result){
			var schoolList = result;
			$("#school,#college,#major").empty();
			base.schoolInit('school','college','major',schoolList);
  	  	},"json");
	},
	
	toEdit : function(id){
		$.post("/stu/one","id="+id,function(result){
			addressInit('province2', 'city2', 'area2', 'school2','college2','major2', 
					result.province,result.city,result.area,result.school,result.college,result.major);
			$('#edit_student_form input[name="sex"]').eq(result.sex).prop('checked', true);
			$("#stuId").val(result.id);
			$("#name2").val(result.name);
	        $("#tel2").val(result.tel);
	        $("#qqNum2").val(result.qqNum);
	        $("#grade2").val(result.grade);
	        $("#classes2").val(result.classes);
	        $("#position2").val(result.position);
			base.switchDiv("#edit_student_div","#add_student_div","#list_student_div");
  	  	},"json");
	},
	
	edit_student : function(){
		var data = $("#edit_student_form").serialize();
		$.post("/stu/edit",data,function(result){
  				alert(result.message);
  				if(result.message == "更新成功"){
  					stumgr.getAllStudent();
  					base.switchDiv("#list_student_div","#add_student_div","#edit_student_div");
  				}
  	  	},"json");
		
	},
	
	delStu : function(id){
		var f = confirm("确认删除该学生？");
		if(!f){
			return;
		}
		$.post("/stu/del",id,function(result){
				stumgr.getAllStudent();
	  	});
	},
	
	setOption : function(_selectid){
		var selectid = document.getElementById(_selectid);
	    var var_option;
	    var date = new Date();//获取当前时间
	    var year = date.getFullYear();
	    
	    var_option = document.createElement("option");
        //将option添加到选择框中
        selectid.options.add(var_option);
        //默认选中状态
        selectid.options[0].selected=true;
        var_option.innerHTML = "全部";
        var_option.value = "";
	    
	    if(year > 2010){
	        for(var i = 2010; i <= year;i++){
	        	var_option = document.createElement("option");
	            //将option添加到选择框中
	            selectid.options.add(var_option);
	            var_option.innerHTML = i + "年";
	            var_option.value = i;
	        }
	    }
	},
	
	showBatchBox : function(){
		$("#my_shade").css("height",$(document).height());
        $("#my_shade").css("width",$(document).width());
        $("#my_shade").show();
        var top = ($(window).height() - $("#batch_div").height())/2;
        var left = ($(window).width() - $("#batch_div").width())/2;
        var scrollTop = $(document).scrollTop();
        var scrollLeft = $(document).scrollLeft();
        if(top + scrollTop-122 > 0 && left + scrollLeft-180 > 0){
        	$("#batch_div").css( { position : "absolute", "top" : top + scrollTop-122, "left" : left + scrollLeft-180} ).show();
        }else{
        	$("#batch_div").css( { position : "absolute", "top" : "0", "left" : "0"} ).show();
        }
	},
	
	hideBatchBox : function(){
		$("#my_shade").css("height","0");
        $("#my_shade").hide();
        $("#batch_div").hide();
	},
	
};