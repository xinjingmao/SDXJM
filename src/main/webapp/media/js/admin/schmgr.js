$(function() {
	schmgr.run();
});

var schmgr = {
	run : function() {
		schmgr._init_();
		schmgr._event_();
	},

	_init_ : function() {
		schmgr.getAllschool();
	},

	_event_ : function() {
		//div显示和隐藏
//		$("#add_school").click(function(){
//			base.switchDiv("#add_school_div","#list_school_div","#list_college_div","#list_major_div");
//		});
		$("#list_school").click(function(){
			schmgr.getAllschool();
			base.switchDiv("#list_school_div","#add_school_div","#list_college_div","#list_major_div");
		});
		
		/*$("#add_college").click(function(){
			base.switchDiv("#add_college_div","#list_school_div","#add_school_div","#list_college_div","#add_major_div","#list_major_div");
		});
		$("#list_college").click(function(){
			base.switchDiv("#list_college_div","#add_school_div","#add_college_div","#list_school_div","#add_major_div","#list_major_div");
		});
		
		$("#add_major").click(function(){
			base.switchDiv("#add_major_div","#list_school_div","#add_school_div","#list_college_div","#add_college_div","#list_major_div");
		});
		$("#list_major").click(function(){
			base.switchDiv("#list_major_div","#add_school_div","#add_college_div","#list_school_div","#add_major_div","#list_college_div");
		});*/
		
		$("#add_btn").click(function() {
			schmgr.add_school();
		});
		
		$("#add_school_close").click(function() {
			schmgr.hideBox();
		});
		
		$("#add_school").click(function() {
			$("#name").val("");
			schmgr.showBox();
		});
		
		$("#query_sch_btn").click(function() {
			schmgr.getAllschool();
		});
		
		$("#query_somesch_btn").click(function() {
			schmgr.getSomeschool()
		});
		
		$("body").on("click",".addcol",function(){
			schmgr.toAddCollege($(this).attr("id"));
		});
		$("body").on("click",".listcol",function(){
			schmgr.listCollege($(this).attr("value"));
		});
		
		$("body").on("click",".addmaj",function(){
			schmgr.toAddMajor($(this).attr("value"));
		});
		$("body").on("click",".listmaj",function(){
			schmgr.listMajor($(this).attr("value"));
		});
		
		$("body").on("click","#add_btn1",function(){
			schmgr.addCollege();
		});
		
		$("body").on("click","#add_btn2",function(){
			schmgr.addMajor();
		});
		
		$("body").on("click",".delmaj",function(){
			schmgr.delMajor($(this).attr("id"));
		});
		
		$("body").on("click",".delcol",function(){
			schmgr.delCollege($(this).attr("id"));
		});
		
		$("body").on("click","#ud_btn",function(){
			schmgr.updateCollege();
		});
		
		$("body").on("click",".changeName",function(){
			schmgr.changeSchName($(this).attr("id"));
		});
		
		$("body").on("click",".delsch",function(){
			schmgr.delSchool($(this).attr("id"));
		});

		window.addEventListener("resize", function(){
			if($("#my_shade").css("display") == "block"){
				$("#my_shade").css("height",$(document).height());
		        $("#my_shade").css("width",$(document).width());
		        var top = ($(window).height() - $("#add_school_div").height())/2;
		        var left = ($(window).width() - $("#add_school_div").width())/2;
		        var scrollTop = $(document).scrollTop();
		        var scrollLeft = $(document).scrollLeft();
		        if(top + scrollTop-122 > 0 && left + scrollLeft-180 > 0){
		        	$("#add_school_div").css( { position : "absolute", "top" : top + scrollTop-122, "left" : left + scrollLeft-180} );
		        }else{
		        	$("#add_school_div").css( { position : "absolute", "top" : "0", "left" : "0"} );
		        }
			}
		}, false);
	},
	
	add_school : function(){
		var data = $("#add_school_form").serialize();
		$.post("/sch/add",data,function(result){
  				alert(result.message);
  				if(result.message == "添加学校成功"){
  					schmgr.hideBox();
  	  				schmgr.getAllschool();
  				}
  	  	},"json");
		
	},
	
	getAllschool : function(){
		$("#sch_list_div").pageget({
			url : '/sch/all',
			prepare : function() {
				return $("#query_sch_form").serialize();
			},
			navigatorType : 'bootstrapstyle',
			cache : false,
			callback : function() {
			}
		});
	},
	
	getSomeschool : function(){
		$("#sch_list_div").pageget({
			url : '/sch/somesch',
			prepare : function() {
				return $("#query_sch_form").serialize();
			},
			navigatorType : 'bootstrapstyle',
			cache : false,
			callback : function() {
			}
		});
	},
	
	/*toAddCollege : function(id){
		var d = id.split("-");
		$("#schoolId").val(d[0]);
		$("#sName").text(d[1]);
		base.switchDiv("#list_school_div","#add_school_div","#list_college_div","#list_major_div");
	},*/
	
	listCollege : function(val){
		/*var d = val.split("-");
		$("#schoolId").val(d[0]);
		$("#sName").text(d[1]);*/
		$.post("/sch/listCol",val,function(result){
			$("#list_college_div").html(result);
	  	});
		base.switchDiv("#list_college_div","#add_school_div","#list_school_div","#list_major_div");
	},
	
	/*toAddMajor : function(id){
		var d = id.split("-");
		//$("#schoolId").val(d[0]);
		$("#sName2").text(d[1]);
		base.switchDiv("#list_school_div","#add_school_div","#list_college_div","#list_major_div");
	},*/
	
	listMajor : function(val){
		//var d = val.split("-");
		$.post("/sch/listMaj",val,function(result){
			$("#list_major_div").html(result);
	  	});
		base.switchDiv("#list_major_div","#add_school_div","#list_school_div","#list_college_div");
	},
	
	addCollege : function(){
		var data = $("#add_college_form").serialize();
		$.post("/sch/addCol",data,function(result){
			if(result.success){
				data = "id="+$("#schoolId").val()+"&name="+$("#sName").text();
  				schmgr.listCollege(data);
			}else
				alert(result.message);
  	  	},"json");
	},
	
	addMajor : function(){
		if($("#collegeId").val() == 0){
			alert("请先添加学院");
			return false;
		}
		var data = $("#add_major_form").serialize();
		$.post("/sch/addMaj",data,function(result){
				if(result.success){
					data = "id="+$("#sId").val()+"&name="+$("#sName1").text();
	  				schmgr.listMajor(data);
				}else
					alert(result.message);
  	  	},"json");
	},
	
	delMajor : function(id){
		var f = confirm('确认删除此专业？');
		if(f == true){
			$.post("/sch/delMaj",id,function(result){
  				var data = "id="+$("#sId").val()+"&name="+$("#sName1").text();
  				schmgr.listMajor(data);
  	  		});
		}else
			return false;
		
	},
	
	delCollege : function(id){
		var f = confirm('确认删除此学院？');
		if(f == true){
			$.post("/sch/delCol",id,function(result){
  				var data = "id="+$("#schoolId").val()+"&name="+$("#sName").text();
  				schmgr.listCollege(data);
  	  		});
		}else
			return false;
		
	},
	
	updateCollege : function(){
		var data = $("#update_college_form").serialize();
		$.post("/sch/updateCol", data, function(result) {
			data = "id=" + $("#schoolId").val() + "&name="+ $("#sName").text();
			schmgr.listCollege(data);
		});
		
	},
	
	changeSchName : function(id){
		var res = confirm("确认更该校名？");
		if(res == false){
			return false;
		}
		var data = "name="+$("#sN"+id).val()+"&id="+id;
		$.post("/sch/changeSName", data, function(result) {
			alert(result.message);
		},"json");
	},
	
	delSchool : function(id){
		var f = confirm('确认删除此学校？');
		if(f == true){
			$.post("/sch/delSch",id,function(result){
				schmgr.getAllschool();
  	  		});
		}else
			return false;
		
	},
	
	showBox : function(){
		$("#my_shade").css("height",$(document).height());
        $("#my_shade").css("width",$(document).width());
        $("#my_shade").show();
        var top = ($(window).height() - $("#add_school_div").height())/2;
        var left = ($(window).width() - $("#add_school_div").width())/2;
        var scrollTop = $(document).scrollTop();
        var scrollLeft = $(document).scrollLeft();
        if(top + scrollTop-122 > 0 && left + scrollLeft-180 > 0){
        	$("#add_school_div").css( { position : "absolute", "top" : top + scrollTop-122, "left" : left + scrollLeft-180} ).show();
        }else{
        	$("#add_school_div").css( { position : "absolute", "top" : "0", "left" : "0"} ).show();
        }
	},
	
	hideBox : function(){
		$("#my_shade").css("height","0");
        $("#my_shade").hide();
        $("#add_school_div").hide();
	},
};

