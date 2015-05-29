$(function(){
	login.run();
});

var login = {
	run : function(){
		login._event_();
	},
	
	_event_ : function(){
		login._login_click();
		login._login_keydown();
		login._validate_code_click();
		login._forget_login_click();
		//login._doc_click();
		$("#addApp").click(function(){
			login._check_login();
		});
	},
	_check_login : function(){
		var url = "user/checklogin";
		bz.jsonPost(url, {}, function(result){
			if(result.success){
				//登录成功，则跳转到活动页面
				bz.util.redirect("/app/list");
			}else{
				bz.util.redirect("/user/reg");
			}
		});
	},
	_login_click : function(){
		$("#login-btn").click(function(){
			
			login._login();
		});
		
		
		/*//回车事件
		$("#login-btn").keypress(function(e){
			if(e.keyCode == 13){
				alert('enter'+e.keyCode);
			   login._login(); //处理事件
			}
		});*/
		
		return false;
	},
	
	_login_keydown : function(){
		//回车事件
		$("#loginForm").keydown(function(e){
			 var e = e || event,
			 keycode = e.which || e.keyCode;
			 if (keycode==13) {
				
				 login._login();
			 }
			});
		return false;
	},
	
	_login : function(){
		var url = "/user/get";
		var email = $("#registerEmail").val();
		var password = $("#registerPassword").val();
		if( (email == '') || (bz.util.isEmail(email) === false) ){
			alert("请填写合法的邮箱");
			return false;
		}
		
		if(password == ''){
			alert("请填写密码");
			return ;
		}
		var data = ['email=', email,
		            '&password=', password,
		            '&autoLogin=', $("#autoLogin").is(":checked")].join("");
		
		bz.jsonPost(url, data, function(result){
			if(result.success){
				//登录成功，则跳转到活动页面
				bz.util.redirect("/app/list");
			}else{
				alert(result.message);
			}
		});
	},
	
	_validate_code_click : function(){
		$("#validate-code").click(function(){
			var url = "/user/isEmailAvailable";
			var email = $("#registerEmail2").val();
			
			if(bz.util.isEmail(email) === false){
				$("#forgetEmailTip").html("邮箱不合法");
				setTimeout("$('#forgetEmailTip').text('')",2000);
				return false;
			}
			
			var data = ['email=', email].join("");
			bz.jsonPost(url, data, function(result){
				//已被注册，则发送验证码给该邮箱
				if(result.success == false){
					url = "/user/getVerifyCode";
					bz.jsonPost(url, data, function(result){
						if(result.success){
							alert("验证码已发送到您的邮箱，请查收");
						}else{
							$("#forgetEmailTip").html(result.message);
							setTimeout("$('#forgetEmailTip').text('')",2000);
						}
					});
				}else{
					$("#forgetEmailTip").html(result.message);
					setTimeout("$('#forgetEmailTip').text('')",2000);
				}
			});
		});
		
		return false;
	},
	
	_forget_login_click : function(){
		$("#forget-login").click(function(){
			var url = "/user/update";
			var password = $("#newPassword").val();
			var confirmPassword = $("#newPassword1").val();
			var email = $("#registerEmail2").val();
			
			if(bz.util.isEmail(email) === false){
				$("#forgetEmailTip").html("邮箱不合法");
				setTimeout("$('#forgetEmailTip').text('')",2000);
				return false;
			}
			if(password === ""){
				$("#forgetErrorPassword").html("密码不能为空");
				setTimeout("$('#forgetErrorPassword').text('')",2000);
				return false;
			}
			if(password !== confirmPassword){
				$("#forgetErrorPassword").html("两次密码输入不一致");
				setTimeout("$('#forgetErrorPassword').text('')",2000);
				return false;
			}
			
			if(password.length < 6){
				$("#forgetErrorPassword").html("为了安全起见，请将密码长度设置到6位以上");
				setTimeout("$('#forgetErrorPassword').text('')",2000);
				return false;
			}
			
			var data = ['email=', email,
			            '&password=', password,
			            '&confirmpassword=', confirmPassword,
			            '&verifyCode=', $("#inputvalidatecode3").val()
			            ].join("");
			
			bz.jsonPost(url, data, function(result){
				if(result.success){
					//修改成功，帮用户登录
					bz.util.redirect("/app/list");
				}else{
					//修改失败，打印错误信息
					$("#forgetErrorMsg").html(result.message);
					setTimeout("$('#forgetErrorMsg').text('')",2000);
				}
			});
			
		});
		
		return false;
	}
	
};

/* 获取验证码bg变色 */
function tp_bg_green(){
	var registerEmail2_bgColor = $("#registerEmail2").css("borderColor");
	var get_code = $("#inputvalidatecode3").next(".validate-code-btn");
	if(registerEmail2_bgColor == "rgba(82, 168, 236, 0.8)"){
		get_code.removeClass("tp-bg-green");
		get_code.addClass("tp-bg-green");
		$('button#validate-code').removeClass("tp-bg-green");
		$('button#validate-code').addClass("tp-bg-green");
	}
}
$(function(){
	setInterval('tp_bg_green()');  //这个是登录页面的变色
})
