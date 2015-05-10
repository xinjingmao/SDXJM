/*
 * 控制div的显示和隐藏
 */

$(function(){
	base.run();
});    

var base ={
	run:function(){
		base._init_();
		base._event_();
		},
		
	_init_:function(){
		$("#query_winaward_div").hide();
		$("#query_accept_div").hide();
	},	
	
	_event_:function(){
		//控制活动div的显示与隐藏
		$("#query_activity").click(function(){
			base._checkout1();		
		});
		
		//控制参与活动div的显示与隐藏
		$("#query_award").click(function(){
			base._checkout2();
		});
		
		//控制接受推荐div的显示与隐藏
		$("#query_accept").click(function(){
			base._checkout3();		
		});
		
		//控制获奖详情div的显示与隐藏
		$("#query_winaward").click(function(){
			base._checkout4();
		});
		
		//控制获奖详情div的显示与隐藏
		$("#act_mode_set").click(function(){
			base._checkout5();
		});
	},
	
	_checkout1:function(){
		//控制活动详情的显示
		if($("#query_activity_div").css("display")=="none"){
			$("#query_activity_div").css("display","block");
			$("#query_award_div").css("display","none");
			$("#query_winaward_div").css("display","none");
			$("#query_accept_div").css("display","none");
			$("#act_mode_set_div").css("display","none");
		}
	},
	
	_checkout2:function(){
		//控制参与活动的显示
		if($("#query_award_div").css("display")=="none"){
			$("#query_award_div").css("display","block");
			$("#query_activity_div").css("display","none");
			$("#query_winaward_div").css("display","none");
			$("#query_accept_div").css("display","none");
			$("#act_mode_set_div").css("display","none");
		}
	},
	_checkout3:function(){
		//控制接受推荐的显示
		if($("#query_accept_div").css("display")=="none"){
			$("#query_accept_div").css("display","block");
			$("#query_award_div").css("display","none");
			$("#query_activity_div").css("display","none");
			$("#query_winaward_div").css("display","none");
			$("#act_mode_set_div").css("display","none");
		}
	},
	
	_checkout4:function(){
		//控制获奖的显示
		if($("#query_winaward_div").css("display")=="none"){
			$("#query_winaward_div").css("display","block");
			$("#query_award_div").css("display","none");
			$("#query_activity_div").css("display","none");
			$("#query_accept_div").css("display","none");
			$("#act_mode_set_div").css("display","none");
		}
	},
	
	_checkout5:function(){
		//控制活动模板设置的显示
			$("#act_mode_set_div").css("display","block");
			$("#query_winaward_div").css("display","none");
			$("#query_award_div").css("display","none");
			$("#query_activity_div").css("display","none");
			$("#query_accept_div").css("display","none");
	},
	
	switchDiv : function(d1,d2,d3,d4,d5){
		if($(d1).css("display")=="none"){
			$(d1).css("display","block");
			$(d2).css("display","none");
			$(d3).css("display","none");
			$(d4).css("display","none");
			$(d5).css("display","none");
		}
	},
};

