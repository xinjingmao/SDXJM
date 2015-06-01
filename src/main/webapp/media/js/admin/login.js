//管理员登录页面
$(function(){
    admin.run();
});

var admin = {
    run: function(){
        this._events_();
    },
    //bind events
    _events_: function(){
        $("#password").keydown(function(e){
        	if(e.keyCode == 13){
        		admin._do_login_();
        	}
        });
        $("#admin_login_a").click(function(){
        	admin._do_login_();
        });
    },
    
    _do_login_: function(){
    	var url = "/admin/login";
    	var data = $("#login_form").serialize();
    	bz.jsonPost(url, data, function(result){    		
    		if(result.success){
    			//redirect
    			alert("登陆成功！");
    			bz.util.redirect("/stu/index");
    		}else{
    			alert(result.message);
    		}
    	});
    },
    
};