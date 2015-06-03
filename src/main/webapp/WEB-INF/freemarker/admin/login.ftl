<!DOCTYPE html>
<html>
<head lang="en">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>管理员登陆</title>
    <link rel="stylesheet" href="${cssRoot}/style.css" type="text/css" />
</head>
<body>
    <div class="l_all">
        <div class="l_message">
            <div class="l_message_tag">
                <p>学生资料录入系统</p>
            </div>
            <form id="login_form">
                <div class="l_message_user">
                    <label><input name="tel" class="txt_user" type="text" placeholder="手机号码" tabindex="1"/></label>
                </div>
                <div class="l_message_password">
                    <label><input name="password" type="password" placeholder="密 码" tabindex="2"/></label>
                </div>
            </form>
            <div class="l_message_login">
                <p><button id="admin_login_a" onclick="javascript:;">登陆</button></p>
            </div>
        </div>
        <div class="l_img">
            <p><img src="/media/images/l_bg.jpg"/></p>
        </div>
    </div>
    <div class="l_footing">
        <p>广州卓讯网络科技有限公司&nbsp; &nbsp;TEL:020-29041145</p>
    </div>
</body>

<#include "/include/js.html">
<script type="text/javascript" src="${jsRoot}/admin/login.js"></script>
</html>