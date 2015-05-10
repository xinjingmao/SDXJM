<div class="page-header">
	<div class="head-in">
	<ul class="inline">
		<li><a href="/" class="main-page-link"><img src="${imageRoot}/youtui.png" alt="友推"/></a></li>
		<li>
			<a href="/" class="header-link">首页</a>
			<a href="/intro/index.htm" class="header-link">产品介绍</a>
			<a href="/download/sdk/newest" class="header-link">SDK下载</a>
			<a href="/doc/index.htm?v=1.5" class="header-link doc-link">集成文档</a>
			<a href="/about" class="header-link">联系我们</a>
			<a href="/cms/content/news/100" class="header-link">新闻动态</a>
			&nbsp;&nbsp;<a class="" href="http://bbs.youtui.mobi">论坛社区</a>&nbsp;
			<a class="" href="http://faq.youtui.mobi">问答支持</a>
		</li>
		<li class="log-set">
			<#if email??>
				<img src="${imageRoot}/default_avatar.png" style="vertical-align:0;"/>
				<a href="/app/list">${email}</a>
				<a href="/user/logout">退出</a>
			<#else>
				<a href="/user/reg">注册</a>
				<a href="#" class="login-btn">登录</a>
			</#if>
		</li>
	</ul>
	</div>
</div>