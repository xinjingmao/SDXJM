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
	},
	
	add_student : function(){
		var data = $("#add_student_form").serialize();
		$.post("/stu/add",data,function(result){
				//$("#stuTip").text(result.message);
  				alert(result.message);
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
};