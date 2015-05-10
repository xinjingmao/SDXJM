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
	},

	_event_ : function() {
		//div显示和隐藏
		$("#add_student").click(function(){
			base.switchDiv("#add_student_div","#list_student_div");
		});
		$("#list_student").click(function(){
			stumgr.getAllStudent();
			base.switchDiv("#list_student_div","#add_student_div");
		});
		
		
		$("#add_btn").click(function() {
			stumgr.add_student();
		});
	},
	
	add_student : function(){
		var data = $("#add_student_form").serialize();
		//alert(data);
		$.post("/stu/add",data,function(result){
			//alert(result.code);
  			//alert("添加成功");
  			//if(result.success){
  				alert(result.message);
  			//}
  	  	},"json");
		
	},
	
	getAllStudent : function(){
		/*$.post("/stu/all",function(result){
  			$("#stu_list_div").html(result);
  	  	});*/
		
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
};