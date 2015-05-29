//管理员信息页面
$(function() {
	manager.run();
});

var manager = {
	run : function() {
		this._events_();
	},

	// bind events
	_events_ : function() {
		// change password
		$("#change_password_btn").click(function() {
			manager._handle_change_password();
		});
		$("#add_manager_btn").click(function() {
			manager._handle_add_manager();
		});
		$("body").on("click", ".delmanager", function() {
			manager._handle_del_manager($(this).attr("id"));
		});
		$("#sysdata-btn").click(function() {
			manager._handle_sysdata_list();
		});
	},

	// 查询系统数据统计
	_handle_sysdata_list : function() {
		$("#admin_content").pageget({
			url : '/admin/sysdata/list',
			prepare : function() {
				return "pageSize=20";
			},
			navigatorType : 'bootstrapstyle',
			cache : false,
			callback : function() {
			}
		});

	},

	_handle_change_password : function() {
		var url = "/admin/changepwd";
		var data = $("#change_password_form").serialize();
		bz.jsonPost(url, data, function(result) {
			$("#change_password_result_div").html(result.message);
			setTimeout('$("#change_password_result_div").html("");', 4000);
		});
	},

	_handle_add_manager : function() {
		var url = "/admin/add";
		var data = $("#add_manager_form").serialize();
		bz.jsonPost(url, data, function(result) {
			if (result.success) {
				// $("#add_manager_form :input[name='managerId']").val("");
				// $("#add_manager_form :input[name='newPassword']").val("");
				url = "/admin/all";
				$.post(url, function(result) {
					$("#manager_list_div").html(result);
				});
			} else {
				$("#create_manager_result_div").html(result.message);
			}
		});
	},
	_handle_del_manager : function(id) {
		if (confirm("确认删除此管理员吗？")) {
			var url = "/admin/del";
			bz.jsonPost(url, "id=" + id, function(result) {
				url = "/admin/all";
				$.post(url, function(result) {
					$("#manager_list_div").html(result);
				});

			});
		}
	}

};